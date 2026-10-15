# Changelog

## 0.2.23

- Read and update published agent priority ordering with `agents loop-settings --protocol-version 3` and `agents update-loop-settings` JSON `protocolVersion: 3`.
- Require a complete priority permutation and both revisions. Earlier settings protocols preserve the saved order; existing workers use server queue ordering without an upgrade.

## 0.2.22

- Negotiate shared agent worktree and delivery controls with `agents loop-settings --protocol-version 2` and `agents update-loop-settings` input `protocolVersion: 2`.
- Preserve both current revisions, explicit complete settings replacements, scoped authorization and actionable legacy-client upgrade errors. Shared restrictions never grant local delivery permissions.
- Align installation instructions with the verified 0.2.22 archive.

## 0.2.19

- Accept documented `--input` JSON/file/stdin on typed input-object commands, including issue-email and Inbox preferences. Individual field flags override that input; `--input` replaces the input portion of `--args`.
- Keep typed validation, selected-account authorization and atomic partial-update behavior; schema-invalid input is rejected before transmission, and server validation errors are surfaced without retrying or claiming success.

## 0.2.18

- Add account-only issue email preference read, atomic partial update and reset commands, with optional expected-account protection.
- Support opt-in delivery of new unread issue activity, soon after activity or in daily/weekly digests. Existing Inbox categories still select what is eligible; email stays off by default.
- Document account time zones, bounded workspace batches, current access/verified-address checks, guarded provider acceptance and conservative retry limits.

## 0.2.17

- Add the exact account/workspace-pinned `vel open change-email` browser handoff.
- Document native two-address email verification, explicit account-bound confirmation, preserved browser MFA and verified profile synchronization.

## 0.2.16

- Add `vel open delete-account` / `velocity open delete-account` for the selected account's explicit permanent deletion flow.
- Account preview explains retained shared work and ownership blockers. Deletion checks current authentication, MFA, typed confirmation and serialized ownership, removes sign-in/personal credentials, and preserves anonymized shared attribution.
- Verified email mutation and notification-email delivery remain tracked separately under ENGIN-462.

## 0.2.15

- Add `vel open mfa` / `velocity open mfa` for the exact selected account/workspace authenticator setup and verification panel.
- Inventory supported browser-session enrollment/challenges/removal accurately. Account deletion, verified email changes and notification-email delivery remain tracked separately.
- Authenticator browser sign-ins require a verified second factor; existing scoped API credentials retain their separate authorization.

## 0.2.14

- Expose actionable Inbox categories and all stored automation/service alerts, authoritative workspace context, verified agent run references and stable cursors through the generated notification commands.
- Inbox reads, counts and read actions share current membership, recipient, role and entity checks. Unknown future notices remain readable as OTHER.
- Support category/cursor arguments and optional expected-user protection on read actions; ordinary management needs no AI credential.

## 0.2.13

Advertise the five private MCP attachment tools in the versioned feature
inventory. The existing `attachments upload/list/download/remove` commands
remain the binary transfer path for local screenshots and files, including
explicit stable upload IDs. The attachment API now also accepts live MCP
read/write credentials with the same workspace, consent, connection and plan
checks as MCP. The generic `api mcp` command can call the new tools; image
bytes use direct bounded MCP transfer or the private binary API, never issue
descriptions or public hosting.

## 0.2.12

Include the workspace Getting started guide in the feature inventory and its
existing browser handoff: `vel open page --path getting-started`. Native teams,
statuses, projects, issues and planning commands remain available. The guide
reads progress and offers optional scoped prompts; it creates no placeholders
or agent grants.

## 0.2.10

Read owner SSO change notices through notification commands. Creating,
updating or deleting SSO configuration now requires workspace owner access,
matching the server and browser settings policy. Admins may still read it.

## 0.2.9

Add `integrations rotate-webhook-secret` for admin/owner outbound webhook
signing-key rotation. Like creation, it requires explicit `--show-secrets`
before changing a one-time secret and is never automatically retried. New
and rotated webhooks expose RAW signing-key mode; legacy hooks expose SHA256.

## 0.2.8

Windows credential helpers allow up to 30 seconds for PowerShell startup and
input decoding, followed by a separate 15-second vault-operation deadline.
Timeouts identify the stalled phase. Cancelling a command promptly terminates
its OS credential helper and closes its pipes; reads preserve cancellation and
unavailable errors. Credentials still use the OS vault, without automatic
retries or plaintext fallback. Linux and macOS retain their 15-second deadline.

## 0.2.7

Add account-wide in-app notification preferences: `notifications preferences`,
`notifications update-preferences` and `notifications reset-preferences`.
Partial updates preserve other settings and explicit reset restores defaults.
The platform enforces opt-outs when notifications are created, including issue
subscriber delivery. Existing Inbox entries remain available. These commands
require account authorization and normal read/write scopes; workspace-connected
agents cannot change account-wide policy. Issue email notifications and email
digests are not available yet.

## 0.2.6

Concurrent commands retry when a credential-lock owner releases or replaces its
lock during the PID check, rather than incorrectly reporting an abandoned lock.
Genuinely abandoned locks still require explicit recovery and are never removed
automatically. Refresh-token rotation and account/origin isolation remain serialized.

## 0.2.5

Add admin/owner `projects set-project-showcase` for separately reviewed public
project names, descriptions, website URLs and GitHub org/repo references. Projects
stay private until explicitly listed, and workspace profile visibility still
applies. Paginated project reads can select the admin-only `publicShowcase` field.

## 0.2.4

Add the schema-derived `patch-workspace-social-settings` mutation command.
It patches only supplied Social & Public fields atomically, preserving unrelated
workspace settings, and requires a current workspace admin/owner. Website URLs
accept HTTP/HTTPS, support clearing and reject credentials and unsafe schemes.

## 0.2.3

Add private issue attachment upload/list/download/remove commands, local files
and bounded binary stdin/stdout. The ordinary platform API enforces workspace
consent, membership, 4 MiB per file and 50 files per issue. Uploads are never
automatically replayed; failed attempts return an explicit retry ID to reuse
with identical content. Downloads preserve existing files. Removing an inline
image uses the version-checked issue description mutation and normal events.

## 0.2.2

CSV/JSON issue imports now use scoped issue creation, allocate team identifiers,
accept numeric or named priorities and report each created ID, failed row and
post-create warning. REST import handles up to 100 rows and 1 MiB. Incomplete
imports exit 8 and retain row results, including legacy HTTP 200 failures.
Retry only failed rows after correcting them; created or uncertain rows must
be checked instead of replaying the batch. No import mutation is retried.

## 0.2.1

Refreshes REST export coverage after ENGIN-484: complete CSV/JSON workspace downloads
use stable ID boundaries, apply creation-date filters and refuse oversized results
before any partial file is offered. The API bounds downloads at 32 MiB and audit
exports at 5,000 rows. Records remain live during traversal. CSV/JSON issue import
remains the separate ENGIN-487 API gap; typed JSON bulk planning import is available.


## 0.2.0

Preferred database collection commands now return typed connections with
`edges`, `pageInfo` and full filtered `totalCount`, and walk all cursor pages.
JSON scripts should read records from `data.edges[].node`. Existing array
commands remain under explicit `-legacy` names. New root commands also traverse
members, milestones, PRD links/versions, issue histories and other nested data.
Custom selections include required paging metadata, and missing or cycling
cursors fail rather than returning an incomplete result. Name resolution checks
every page before accepting an unambiguous match. Identity reads page and chunk
workspace memberships, preserving account/consent boundaries. New pages use
signed account/filter/grant-bound cursors, a 100-record ceiling, immutable
primary-key order and live authorization. Legacy browser arrays retain their
display order. REST workspace export completeness remains ENGIN-484.

## 0.1.2

Adds issue relation create/remove and self subscription commands. Dependencies
reject self-links and cycles, including concurrent writes; reverse dependencies
and symmetric related links are idempotent. Duplicate links preserve their
direction and do not change issue status. Subscriptions deliver update/comment
notifications, with actor suppression and current workspace membership checks.
Relation reads now return stable IDs and valid enums. Both relation endpoints
accept selected-workspace issue identifiers. Writes use the authenticated API.

## 0.1.1

Adds `velocity workspaces leave` / `vel workspaces leave` with live membership and
write-scope checks, atomic last-owner protection, and workspace credential cleanup.
A successful departure clears that account’s matching workspace default. Grants
that include the departed workspace require fresh sign-in and consent.

## 0.1.0

First general management CLI, independently released from `velocity-agent`.
Installs equivalent `velocity` and `vel` commands. Supports named account profiles,
PKCE sign-in, explicit workspace consent, refresh/revocation, scoped platform
operations, all API pagination modes, file/stdin input, ordered bulk operations,
loss-aware Markdown, version-checked rich-text imports, platform AI operations,
recorded notification polling, browser verification handoffs, diagnostics and completions.
The versioned coverage matrix records commands, handoffs and linked API gaps.
