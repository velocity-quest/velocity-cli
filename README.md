# Velocity CLI

Manage Velocity from your terminal using **velocity** or the equivalent shorter
command **vel**. This is the general management CLI; `velocity-agent` separately
executes Claude or Codex work. Ordinary management requires no LLM key.

## Install and upgrade

Requires Node.js 20 or newer. Linux, macOS and Windows installation is checked in
CI. Download the versioned `.tgz` and `.sha256` from
[Velocity CLI releases](https://github.com/velocity-quest/velocity-cli/releases),
verify the SHA-256 checksum, then run `npm install -g ./velocity-quest-cli-0.1.2.tgz`.
Upgrade using the next verified archive. Both commands report version `0.1.2`.

```sh
velocity --version
vel --version
velocity login --account personal
velocity login --account work
velocity accounts list
velocity accounts use work
velocity whoami
velocity workspaces list
velocity workspaces use my-workspace
vel issues list --json
vel issues get ENGIN-123
vel issues create --team-id ENGIN --title 'Fix the login redirect' --priority high
```

Sign-in uses browser PKCE and lets you explicitly select multiple workspaces.
Management sign-in also supports account-only access before creating a workspace.
Later membership does not enlarge an existing grant: sign in again to select a
new workspace. Current membership and roles are checked on every command.
Use **Use a different account** on consent when adding a second identity.

`vel --workspace ID_OR_SLUG workspaces leave` removes your own membership. The
last owner must promote another owner or delete the workspace first. Leaving
removes your team memberships, workspace API/MCP keys and automation hooks.
OAuth grants that include this workspace are revoked in full: sign in again
to approve access to your remaining workspaces. Other account profiles are not
changed. Workspace deletion has its existing separate owner-only command.

SSH/headless: `velocity login --account work --no-browser` prints an issuer-hosted
link and reads the paste code privately. Login URLs/prompts use stderr; JSON
results use stdout. No password, browser cookie or service-role key is stored.

## Accounts and credentials

Profiles have separate credentials, identities, server origins and workspace
defaults. `--account NAME` overrides `VELOCITY_ACCOUNT`, then the active profile.
`--workspace ID_OR_SLUG` overrides `VELOCITY_WORKSPACE`, then that profile's saved
default. One authorized workspace can be selected automatically; several need an
explicit target in scripts. Interactive terminals offer a workspace selector.
`--base-url` overrides `VELOCITY_BASE_URL`, but cannot redirect an existing
profile's credentials to another origin. Create another profile for another server.

```sh
vel login --account staging --base-url https://staging.example.com
vel --account personal --workspace home issues list --json
vel --account work --workspace project issues list --json
vel accounts rename work company
vel logout --account personal
vel accounts remove personal
vel logout --all
```

Logout revokes that profile's durable grant and removes its local credentials.
Management profiles do not change agent sign-ins. Rename retains the same secret
slot. Refresh, logout and profile changes serialize across processes.

Default storage uses macOS Keychain, Windows Credential Vault, or Linux Secret
Service (`secret-tool`) when installed. Unlock the store if access fails. On
headless Linux, explicitly use `--credential-store file`: credentials are stored
in atomic mode-0600 files in a mode-0700 directory. Windows requires its native
vault. Metadata lives in `${XDG_CONFIG_HOME:-~/.config}/velocity/cli.json` on POSIX and `%APPDATA%/velocity/cli.json` on Windows (XDG_CONFIG_HOME overrides either).

Automation may set `VELOCITY_TOKEN` (or `VELOCITY_API_KEY`) or use `--token-file`
with a private regular file. Explicit `--account` ignores environment tokens.
An explicit token is never saved or refreshed. Workspace keys stay bound to their
one workspace; personal keys are limited by their scopes and current membership. Newly enabled management REST operations require the verified management OAuth grant or an admin-scoped API key; narrowly scoped keys use the typed GraphQL commands.

## Commands, files and scripting

`velocity coverage` and [coverage.md](coverage.md) inventory the current APIs and
product surfaces. Every current GraphQL operation has a typed command. Use
`velocity RESOURCE --help` and `velocity RESOURCE ACTION --help` for the exact
flags. Operation names without a short CRUD alias become kebab-case actions.
Names resolve within the selected workspace; ambiguous labels/statuses fail and
require UUIDs. Issue identifiers work for lookups and mutations.

```sh
vel account update --display-name 'Alex'
vel account update-user-preferences --patch '{"theme":"dark"}'
vel account update-user-preferences --patch '{}' --reset-keys theme
vel account update-issue-view-preference --view board
vel issues list --filter '{"done":false}' --sort '{"field":"UPDATED_AT","direction":"DESC"}'
vel issues get ENGIN-123 --select '{ id identifier comments { id body } activities { action field createdAt } }'
vel comments create --entity-type issue --entity-id ISSUE_UUID --markdown 'Ready for review'
vel keys create-user-api-key --name automation --scopes user:read,issues:read --show-secrets
vel bulk --file operations.json --continue-on-error --json
vel api graphql --query @query.graphql --variables @variables.json
```

Use `--args @file.json`, `--args -` for stdin, or individual typed flags. Nested
filter/input values use JSON. Plain text remains plain text for string APIs.
`--select` validates an explicit GraphQL selection. One-time key/client-secret
creation requires `--show-secrets`; save its output privately. Password/token and
stored secret fields remain redacted. Successful creates are never automatically
retried. Reads retry only bounded transient HTTP failures.

Supported pagination follows issue cursors, audit cursors, and offset pages for
PRDs, stories, comments, notifications, AI logs, runs and referrals. `--no-all`
returns one page. `--max-pages` fails clearly if a complete result exceeds the
bound. Arrays lacking a pagination API include an explicit ENGIN-461 limitation
in the output context; they are not advertised as complete exports.

JSON output is `{context,data}` with the selected identity, account, origin and
workspace. Errors are sanitized JSON on stderr with `--json`. Exit codes: 0
success; 2 invalid input; 3 sign-in; 4 permission/plan; 5 missing; 6 conflict;
7 unavailable/incompatible; 8 partial batch/logout failure; 130 cancellation.
Ctrl+C cancels network requests, response bodies and watch waits.

## Content and AI

```sh
vel documents create --title Notes --markdown @notes.md
vel documents export DOC_UUID --file notes.json
vel documents import DOC_UUID --file notes.json
vel issues update ENGIN-123 --markdown @description.md
vel prds export PRD_UUID --format markdown
vel ai smart-create --input '{"text":"Fix the login redirect for engineering"}'
vel ai story-breakdown --input @story-request.json
vel ai get-workspace-ai-config
vel notifications watch --after 2026-10-04T00:00:00Z
```

JSON body exports preserve every rich-text node and carry an `updatedAt` version.
Imports reject mismatched IDs and stale versions; `--force` explicitly overrides
the version check. Markdown covers paragraphs, headings, emphasis, links, images,
lists, quotes, code and rules. Unsupported tables, HTML, task lists or editor
extensions fail unless `--allow-lossy` explicitly accepts conversion loss. Body
edits using `--markdown` obtain a current version and use an atomic conditional
update. JSON mutation callers may specify `--expected-updated-at` explicitly.

AI commands call the platform APIs, budgets, entitlements and metering. They do
not select independent providers or use local LLM credentials. Commands return
the API's proposals/results; apply reviewable suggestions with ordinary writes
where required. The platform AI policy/credit migration is tracked in ENGIN-443.
Run inspection/configuration stays under `agents`; actual execution uses
`velocity-agent`. No management command starts a hidden worker.

Notification watch polls recorded notifications, follows every supported page,
deduplicates IDs during a run, and retries bounded outages. `--after` inclusively
replays a timestamp so consumers can deduplicate IDs on restart; this is polling,
not a guarantee about live progress or transaction commit order.

## Issue links and subscriptions

```bash
vel issues create-issue-relation --source-id ENGIN-1 --target-id ENGIN-2 --type BLOCKS
vel issues remove-issue-relation --source-id ENGIN-2 --target-id ENGIN-1 --type BLOCKED_BY
vel issues subscribe-issue --issue-id ENGIN-1
vel issues get ENGIN-1 --select '{ id identifier relations { id type source { identifier } target { identifier } } subscribers { id displayName } }'
vel issues unsubscribe-issue --issue-id ENGIN-1
```

Both endpoints must share the selected workspace. Dependencies reject self-links
and cycles even under concurrent additions. `BLOCKED_BY` reverses `BLOCKS`;
`RELATES_TO` is symmetric. `DUPLICATE` records that the source duplicates the
target and preserves both issues and statuses. Repeated create/remove/subscribe
calls are idempotent and do not duplicate history or notifications.

Subscriptions add Inbox notifications for later updates and comments, excluding
your own actions. Unsubscribing removes your explicit subscription; assignments
and mentions retain their own notifications. Existing status/delete commands
manage issue lifecycle. Issue archive and reusable template operations are
currently unavailable.

## Browser flows, compatibility and known gaps

`vel open security` hands MFA/verification to the selected workspace's exact
security page. `vel open integrations --provider github` hands provider OAuth to
its settings page. `vel open billing` uses the hosted billing UI; plan/checkout
mutations also return their hosted links. Use `--no-browser` to print a handoff.
These commands do not purchase a plan or bypass owner/admin permissions.

`vel diagnostics` checks the server protocol and reports schema versions without
tokens. Protocol mismatches require an upgrade; field-validation errors on older
servers fail clearly. The `/api/cli/meta` contract and generated coverage checks
are updated with every schema/API/product change. Output envelopes and exit codes
are regression-tested. `vel completions bash|zsh|fish` generates completion for
both binary names.

Tracked API gaps: ENGIN-439 (local issue attachments), ENGIN-461 (uncursored
collections), ENGIN-462 (account deletion/export/email and functional notification
preferences). See the matrix for exact available commands and
capability/browser handoffs. Supported platform operations are implemented; these
missing platform APIs are recorded rather than hidden behind direct database access.

Maintainers relay a successful main **Management CLI** workflow with `node packages/cli/scripts/release-from-ci.mjs RUN_ID` from its exact commit. Only that checksummed CI artifact is staged in an immutable public candidate branch. Public CI repeats clean installation on all supported platforms before publishing; no local archive is released. The public distribution workflow template lives in `packages/cli/distribution` in the product repository.
