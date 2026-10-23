import assert from 'node:assert/strict';

function installation(version) {
  assert.match(version, /^\d+\.\d+\.\d+$/, 'Installation version must be stable semver');
  return `Requires Node.js 20 or newer. Linux, macOS and Windows installation is checked in
CI. Download the versioned \`.tgz\` and \`.sha256\` from
[Velocity CLI ${version}](https://github.com/velocity-quest/velocity-cli/releases/tag/cli-v${version}),
verify the SHA-256 checksum, then run \`npm install -g ./velocity-quest-cli-${version}.tgz\`.
Upgrade using the next verified archive. Both commands report version \`${version}\`.

`;
}

/** Own only the versioned introduction; preserve all command examples and prose. */
export function generateReleaseReadme(readme, version) {
  const heading = '## Install and upgrade\n\n';
  assert.equal(readme.split(heading).length, 2, 'Expected one CLI installation section');
  const start = readme.indexOf(heading) + heading.length;
  const end = readme.indexOf('```sh\n', start);
  assert.ok(end > start && !readme.slice(start, end).includes('\n## '), 'Expected installation commands');
  return readme.slice(0, start) + installation(version) + readme.slice(end);
}

/** Check every installation reference, including both aliases' expected output. */
export function validateReleaseReadme(readme, version) {
  assert.equal(readme, generateReleaseReadme(readme, version), 'CLI installation guide does not match the package version');
  const commands = readme.split('## Install and upgrade\n\n')[1].split('```sh\n')[1]?.split('```')[0];
  assert.match(commands || '', /^velocity --version$/m, 'Missing velocity version command');
  assert.match(commands || '', /^vel --version$/m, 'Missing vel version command');
}
