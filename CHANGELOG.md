# Changelog

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
