import assert from 'node:assert/strict';
import { spawn, execFileSync } from 'node:child_process';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { readFile, stat, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const prefix = resolve(process.argv[2]);
const version = process.argv[3];
const packageRoot = join(prefix, 'node_modules/@velocity-quest/cli');
const manifest = JSON.parse(await readFile(join(packageRoot, 'package.json'), 'utf8'));
assert.equal(manifest.version, version); assert.equal(manifest.private, false);
assert.equal(manifest.bin.velocity, manifest.bin.vel);
assert.ok(!manifest.dependencies['@velocity/cli-core']);
for (const dependency of Object.values(manifest.dependencies)) assert.match(dependency, /^\d+\.\d+\.\d+$/);
for (const alias of ['velocity', 'vel']) {
  const wrapper = join(prefix, 'node_modules/.bin', alias + (process.platform === 'win32' ? '.cmd' : ''));
  await stat(wrapper);
  const output = process.platform === 'win32'
    ? execFileSync('cmd', ['/d', '/s', '/c', `""${wrapper}" --version"`], { encoding: 'utf8', windowsVerbatimArguments: true })
    : execFileSync(wrapper, ['--version'], { encoding: 'utf8' });
  assert.equal(output.trim(), version);
}
const config = join(prefix, 'smoke-config');
const workspaceA = { id: '00000000-0000-4000-8000-000000000001', name: 'Shared name', slug: 'alpha' };
const workspaceB = { id: '00000000-0000-4000-8000-000000000002', name: 'Shared name', slug: 'beta' };
const profiles = new Map(['alice', 'bob'].map(name => [name, { user: { id: name, email: name + '@example.test' },
  workspaces: name === 'alice' ? [workspaceA, workspaceB] : [workspaceB],
  access: 'vel_at_' + name, refresh: 'vel_rt_' + name, refreshes: 0, revoked: false }]));
let loginName, authorization, writes = 0, pageCalls = 0;
const code = 'a'.repeat(64);
const server = createServer(async (request, response) => {
  const send = (value, status = 200) => { response.writeHead(status, { 'Content-Type': 'application/json' }); response.end(JSON.stringify(value)); };
  try {
    let raw = ''; for await (const chunk of request) raw += chunk;
    const path = new URL(request.url, base).pathname;
    if (path === '/.well-known/oauth-authorization-server') return send({ issuer: base, authorization_endpoint: base + '/api/oauth/authorize', token_endpoint: base + '/api/oauth/token' });
    if (path === '/api/oauth/token') {
      const input = new URLSearchParams(raw); assert.equal(input.get('client_id'), 'velocity-management-cli');
      let session;
      if (input.get('grant_type') === 'authorization_code') {
        assert.equal(input.get('code'), code); assert.equal(input.get('redirect_uri'), base + '/oauth/code');
        assert.equal(createHash('sha256').update(input.get('code_verifier')).digest('base64url'), authorization.searchParams.get('code_challenge'));
        assert.equal(authorization.searchParams.get('scope'), 'cli:read cli:write');
        session = profiles.get(loginName);
      } else {
        session = [...profiles.values()].find(value => value.refresh === input.get('refresh_token') && !value.revoked);
        if (!session) return send({ error: 'invalid_grant' }, 400);
        session.refreshes++; session.refresh += '_rotated'; session.access += '_rotated';
      }
      return send({ access_token: session.access, refresh_token: session.refresh, token_type: 'bearer', expires_in: session.refreshes ? 3600 : 1 });
    }
    if (path === '/api/oauth/revoke') {
      const input = new URLSearchParams(raw);
      const session = [...profiles.values()].find(value => value.refresh === input.get('token'));
      assert.ok(session); session.revoked = true; return send({});
    }
    if (path === '/api/cli/meta') return send({ protocolVersion: 1, schemaHash: 'smoke-schema' });
    const session = [...profiles.values()].find(value => request.headers.authorization === 'Bearer ' + value.access && !value.revoked);
    if (!session) return send({ error: 'unauthorized' }, 401);
    if (path === '/api/cli/identity') return send({ user: session.user, workspaces: session.workspaces, accountAccess: true });
    assert.equal(path, '/api/graphql');
    const workspace = session.workspaces.find(value => value.slug === request.headers['x-workspace-slug']);
    if (!workspace) return send({ errors: [{ message: 'Denied', extensions: { code: 'FORBIDDEN' } }] });
    const input = JSON.parse(raw);
    if (input.query.includes('createIssue(')) {
      writes++; return send({ data: { createIssue: { id: 'created-issue', title: input.variables.input.title } } });
    }
    if (input.query.includes('updateWorkspace(')) {
      if (session.user.id === 'bob') return send({ errors: [{ message: 'Workspace configuration requires an admin', extensions: { code: 'FORBIDDEN' } }] });
      throw new Error('Unexpected workspace update');
    }
    if (input.query.includes('issues(')) {
      pageCalls++; assert.equal(input.variables.workspaceId, workspace.id);
      return send({ data: { issues: { edges: [{ node: { id: input.variables.pagination.after ? 'two' : 'one' } }],
        totalCount: 2, pageInfo: { hasNextPage: !input.variables.pagination.after, endCursor: 'next' } } } });
    }
    throw new Error('Unexpected GraphQL operation');
  } catch (error) { send({ error: String(error) }, 500); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = 'http://127.0.0.1:' + server.address().port;
async function run(args, { login, exit = 0, alias = 'velocity' } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [join(packageRoot, manifest.bin[alias]), '--json', ...args], { env: { ...process.env,
      XDG_CONFIG_HOME: config, VELOCITY_BASE_URL: base, VELOCITY_TOKEN: '', VELOCITY_API_KEY: '', VELOCITY_ACCOUNT: '', VELOCITY_WORKSPACE: '', SSH_CLIENT: '', SSH_CONNECTION: '' }, stdio: ['pipe', 'pipe', 'pipe'] });
    let stdout = '', stderr = '', entered = false;
    const timer = setTimeout(() => { child.kill(); reject(new Error('Installed CLI smoke timed out')); }, 30000);
    child.stdout.on('data', chunk => { stdout += chunk; });
    child.stderr.on('data', chunk => {
      stderr += chunk;
      if (login && !entered) {
        const line = stderr.split('\n').find(value => value.startsWith(base + '/api/oauth/authorize?'));
        if (line) { authorization = new URL(line); loginName = login; entered = true; child.stdin.end(code + '.' + authorization.searchParams.get('state') + '\n'); }
      }
    });
    child.on('error', error => { clearTimeout(timer); reject(error); });
    child.on('close', status => {
      clearTimeout(timer);
      try {
        assert.ok(!/vel_(?:at|rt)_/.test(stdout + stderr) && !(stdout + stderr).includes(code), 'A secret was printed');
        assert.equal(status, exit, stdout + stderr); resolve({ stdout: stdout.trim(), stderr });
      } catch (error) { reject(error); }
    });
  });
}
const json = async (...args) => JSON.parse((await run(...args)).stdout);
try {
  for (const name of ['alice', 'bob']) await run(['--account', name, 'login', '--no-browser', '--credential-store', process.platform === 'win32' ? 'keychain' : 'file'], { login: name });
  const file = join(config, 'velocity/cli-credentials.json');
  if (process.platform !== 'win32') assert.equal((await stat(file)).mode & 0o777, 0o600);
  const both = await Promise.all([1, 2].map(() => json(['--account', 'alice', 'whoami'])));
  assert.equal(both[0].data.user.id, 'alice'); assert.equal(both[0].data.workspaces.length, 2);
  assert.equal(profiles.get('alice').refreshes, 1);
  await run(['--account', 'alice', 'workspaces', 'use', 'alpha']);
  const issues = await json(['--account', 'alice', 'issues', 'list'], { alias: 'vel' });
  assert.equal(issues.data.edges.length, 2); assert.equal(issues.context.workspace.slug, 'alpha'); assert.equal(pageCalls, 2);
  await run(['--account', 'alice', 'issues', 'create', '--team-id', workspaceA.id, '--title', 'Smoke issue']); assert.equal(writes, 1);
  await run(['--account', 'bob', '--workspace', 'beta', 'workspaces', 'update', workspaceB.id, '--name', 'Guest configuration'], { exit: 4 });
  await run(['--account', 'bob', '--workspace', 'alpha', 'issues', 'list'], { exit: 4 });
  await run(['--account', 'alice', '--workspace', 'beta', 'issues', 'list']);
  const bad = await run(['unknown-command'], { exit: 2 }); assert.equal(JSON.parse(bad.stderr.trim()).error.code, 2);
  for (const shell of ['bash', 'zsh', 'fish']) assert.match((await run(['completions', shell])).stdout, /vel/);
  await run(['--account', 'alice', 'logout']); assert.equal(profiles.get('alice').revoked, true);
  assert.equal((await json(['--account', 'bob', 'whoami'])).data.user.id, 'bob');
  await run(['--account', 'alice', 'whoami'], { exit: 3 });
  await run(['--account', 'bob', 'logout']);
  assert.deepEqual(JSON.parse(await readFile(file, 'utf8')).credentials, {});
  console.log(`Clean install passed: ${process.platform}, Node ${process.versions.node}, velocity/vel ${version}; two PKCE accounts, explicit workspace sets, role denial, complete pagination, atomic refresh, profile isolation, revocation, secret-safe JSON and completions.`);
} finally {
  server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  await rm(config, { recursive: true, force: true });
}
