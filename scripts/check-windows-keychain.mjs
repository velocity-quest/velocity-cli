// Exercise the packed helper against the real Windows vault. Faults are injected
// into disposable module copies, never a product option or a credential file.
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { performance } from 'node:perf_hooks';

assert.equal(process.platform, 'win32', 'Run the packed vault check on Windows');
const root = join(resolve(process.argv[2]), 'node_modules/@velocity-quest/cli/dist');
const source = await readFile(join(root, 'keychain.js'), 'utf8');
const { Keychain } = await import(pathToFileURL(join(root, 'keychain.js')).href);
const files = [], profiles = [];
const credential = { accessToken: 'vel_at_windows_fixture_' + randomUUID(), refreshToken: 'vel_rt_windows_fixture_' + randomUUID(), expiresAt: Date.now() + 3600_000 };
async function delayed(seconds, phase) {
  const anchor = phase === 'startup' ? "$ErrorActionPreference='Stop'; " : "[Console]::Error.WriteLine('velocity-credential-ready'); ";
  assert.equal(source.split(anchor).length, 2, 'Could not inject the expected phase delay');
  const file = join(root, 'keychain-probe-' + randomUUID() + '.js'); files.push(file);
  await writeFile(file, source.replace(anchor, anchor + `Start-Sleep -Seconds ${seconds}; `));
  return (await import(pathToFileURL(file).href)).Keychain;
}
async function fails(action, expected, phase) {
  const start = performance.now();
  let error;
  try { await action(); } catch (value) { error = value; }
  assert.ok(error?.code === expected && (!phase || error.message.includes(phase)), 'The vault fault did not produce the expected safe error');
  assert.ok(!JSON.stringify(error).includes(credential.accessToken) && !JSON.stringify(error).includes(credential.refreshToken), 'The vault error exposed a credential');
  return Math.round(performance.now() - start);
}
try {
  const normal = new Keychain();
  const Slow = await delayed(16, 'startup');
  const profile = randomUUID(); profiles.push(profile);
  const start = performance.now();
  await new Slow().write(profile, credential);
  const elapsedMs = Math.round(performance.now() - start);
  assert.ok(elapsedMs >= 16_000 && elapsedMs < 45_000, 'Slow startup did not remain bounded');
  assert.ok(JSON.stringify(await normal.read(profile)) === JSON.stringify(credential), 'Real vault round-trip did not preserve the credential');
  await normal.remove(profile); profiles.splice(profiles.indexOf(profile), 1);
  console.log(JSON.stringify({ check: 'slow-startup-round-trip', elapsedMs, node: process.versions.node }));

  for (const phase of ['startup', 'operation']) {
    const Stalled = await delayed(120, phase), id = randomUUID(); profiles.push(id);
    const elapsedMs = await fails(() => new Stalled().write(id, credential), 7, phase);
    assert.ok(elapsedMs >= (phase === 'startup' ? 30_000 : 15_000) && elapsedMs < 45_000, 'Stalled helper did not exit within its deadline');
    await fails(() => normal.read(id), 3);
    profiles.splice(profiles.indexOf(id), 1);
    console.log(JSON.stringify({ check: 'bounded-' + phase, elapsedMs, node: process.versions.node }));
  }
  const Stalled = await delayed(120, 'startup'), id = randomUUID(); profiles.push(id);
  const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 1_000);
  try {
    const elapsedMs = await fails(() => new Stalled(controller.signal).write(id, credential), 130);
    assert.ok(elapsedMs < 5_000, 'Cancellation waited for the helper deadline');
    await fails(() => normal.read(id), 3); profiles.splice(profiles.indexOf(id), 1);
    console.log(JSON.stringify({ check: 'cancelled-startup', elapsedMs, node: process.versions.node }));
  } finally { clearTimeout(timer); }
  console.log('Packed Windows vault checks passed: slow startup, real secure round-trip, bounded startup/operation failures and immediate cancellation; no plaintext fallback.');
} finally {
  for (const profile of profiles) {
    // Failed/delayed writes may not have created a vault entry; removal remains
    // scoped to this unique disposable profile and must never touch real users.
    await new Keychain().remove(profile).catch(() => {});
  }
  await Promise.all(files.map(file => rm(file, { force: true })));
}
