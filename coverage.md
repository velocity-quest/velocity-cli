# Velocity CLI feature coverage

Version 0.2.5 · protocol 1 · schema `22fb4540d32f7cd72e50dfbf3175bc8206dc58f2e094561256f42e25974a2419`

Generated from all schema modules, REST routes, MCP tool definitions and authenticated product pages. CI rejects stale coverage and unclassified REST routes. Every GraphQL root operation has a typed command; `--select` exposes optional nested histories, relations, team members and PRD versions. Server roles, scopes, plans and feature gates remain authoritative.

## GraphQL commands

| Module | Command | Operation | Access | Context | Pagination |
|---|---|---|---|---|---|
| base | `velocity api node` | `node` | cli:read | Selected workspace | Single result / recorded summary |
| ai-usage | `velocity ai ai-usage-report` | `aiUsageReport` | cli:read | Selected workspace | Single result / recorded summary |
| ai-usage | `velocity ai ai-usage` | `aiUsage` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| ai-usage | `velocity ai ai-budget-status` | `aiBudgetStatus` | cli:read | Selected workspace | Single result / recorded summary |
| ai-usage | `velocity ai ai-usage-log` | `aiUsageLog` | cli:read | Selected workspace | Offset |
| ai-usage | `velocity ai ai-feature-access` | `aiFeatureAccess` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| api | `velocity keys api-keys-legacy` | `apiKeys` | cli:read | Selected workspace | Legacy array; prefer paged command |
| api | `velocity keys oauth-apps-legacy` | `oauthApps` | cli:read | Selected workspace | Legacy array; prefer paged command |
| api | `velocity keys user-api-keys-legacy` | `userApiKeys` | cli:read | Account | Legacy array; prefer paged command |
| api | `velocity keys api-keys` | `apiKeysPage` | cli:read | Selected workspace | Cursor |
| api | `velocity keys oauth-apps` | `oauthAppsPage` | cli:read | Selected workspace | Cursor |
| api | `velocity keys user-api-keys` | `userApiKeysPage` | cli:read | Account | Cursor |
| audit | `velocity audit audit-logs` | `auditLogs` | cli:read | Selected workspace | Audit cursor |
| automation | `velocity automations list-legacy` | `automations` | cli:read | Selected workspace | Legacy array; prefer paged command |
| automation | `velocity automations get` | `automation` | cli:read | Selected workspace | Single result / recorded summary |
| automation | `velocity automations automation-suggestions-legacy` | `automationSuggestions` | cli:read | Selected workspace | Legacy array; prefer paged command |
| automation | `velocity automations list` | `automationsPage` | cli:read | Selected workspace | Cursor |
| automation | `velocity automations automation-suggestions` | `automationSuggestionsPage` | cli:read | Selected workspace | Cursor |
| backup | `velocity backups list-legacy` | `workspaceBackups` | cli:read | Selected workspace | Legacy array; prefer paged command |
| backup | `velocity backups get` | `workspaceBackup` | cli:read | Selected workspace | Single result / recorded summary |
| backup | `velocity backups workspace-backup-download-url` | `workspaceBackupDownloadUrl` | cli:read | Selected workspace | Single result / recorded summary |
| backup | `velocity backups list` | `workspaceBackupsPage` | cli:read | Selected workspace | Cursor |
| billing | `velocity billing subscription` | `subscription` | cli:read | Selected workspace | Single result / recorded summary |
| billing | `velocity billing analytics` | `analytics` | cli:read | Selected workspace | Single result / recorded summary |
| claude | `velocity agents claude-integration` | `claudeIntegration` | cli:read | Selected workspace | Single result / recorded summary |
| claude | `velocity agents claude-agent-runs` | `claudeAgentRuns` | cli:read | Selected workspace | Offset |
| claude | `velocity agents claude-usage` | `claudeUsage` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| claude | `velocity agents claude-credits-legacy` | `claudeCredits` | cli:read | Selected workspace | Legacy array; prefer paged command |
| claude | `velocity agents virtual-members-legacy` | `virtualMembers` | cli:read | Selected workspace | Legacy array; prefer paged command |
| claude | `velocity agents claude-agent-actions-legacy` | `claudeAgentActions` | cli:read | Selected workspace | Legacy array; prefer paged command |
| claude | `velocity agents virtual-members` | `virtualMembersPage` | cli:read | Selected workspace | Cursor |
| claude | `velocity agents claude-credits` | `claudeCreditsPage` | cli:read | Selected workspace | Cursor |
| claude | `velocity agents claude-agent-actions` | `claudeAgentActionsPage` | cli:read | Selected workspace | Cursor |
| codex | `velocity agents codex-integration` | `codexIntegration` | cli:read | Selected workspace | Single result / recorded summary |
| comment | `velocity comments list` | `comments` | cli:read | Selected workspace | Offset |
| comment | `velocity comments comment-children` | `commentChildrenPage` | cli:read | Selected workspace | Cursor |
| comment | `velocity comments comment-reactions` | `commentReactionsPage` | cli:read | Selected workspace | Cursor |
| cycle | `velocity cycles get` | `cycle` | cli:read | Selected workspace | Single result / recorded summary |
| cycle | `velocity cycles list-legacy` | `cycles` | cli:read | Selected workspace | Legacy array; prefer paged command |
| cycle | `velocity cycles active-cycles-legacy` | `activeCycles` | cli:read | Selected workspace | Legacy array; prefer paged command |
| cycle | `velocity cycles list` | `cyclesPage` | cli:read | Selected workspace | Cursor |
| cycle | `velocity cycles active-cycles` | `activeCyclesPage` | cli:read | Selected workspace | Cursor |
| cycle | `velocity cycles cycle-snapshots` | `cycleSnapshotsPage` | cli:read | Selected workspace | Cursor |
| document | `velocity documents get` | `document` | cli:read | Selected workspace | Single result / recorded summary |
| document | `velocity documents list-legacy` | `documents` | cli:read | Selected workspace | Legacy array; prefer paged command |
| document | `velocity documents list` | `documentsPage` | cli:read | Selected workspace | Cursor |
| document | `velocity documents document-children` | `documentChildrenPage` | cli:read | Selected workspace | Cursor |
| feature-flag | `velocity features feature-flags-legacy` | `featureFlags` | cli:read | Account | Legacy array; prefer paged command |
| feature-flag | `velocity features feature-flags` | `featureFlagsPage` | cli:read | Account | Cursor |
| feedback | `velocity feedback my-feedback-legacy` | `myFeedback` | cli:read | Account | Legacy array; prefer paged command |
| feedback | `velocity feedback my-feedback` | `myFeedbackPage` | cli:read | Account | Cursor |
| integration | `velocity integrations list-legacy` | `integrations` | cli:read | Selected workspace | Legacy array; prefer paged command |
| integration | `velocity integrations get` | `integration` | cli:read | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations integration-by-provider` | `integrationByProvider` | cli:read | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations integration-events-legacy` | `integrationEvents` | cli:read | Selected workspace | Legacy array; prefer paged command |
| integration | `velocity integrations fetch-git-hub-issues` | `fetchGitHubIssues` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| integration | `velocity integrations fetch-git-hub-orgs` | `fetchGitHubOrgs` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| integration | `velocity integrations fetch-git-hub-repos` | `fetchGitHubRepos` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| integration | `velocity integrations fetch-twitter-mentions` | `fetchTwitterMentions` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| integration | `velocity integrations verify-sentry-connection` | `verifySentryConnection` | cli:read | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations fetch-sentry-projects` | `fetchSentryProjects` | cli:read | Selected workspace | Provider / summary / window array; inspect API policy |
| integration | `velocity integrations webhooks-legacy` | `webhooks` | cli:read | Selected workspace | Legacy array; prefer paged command |
| integration | `velocity integrations webhook` | `webhook` | cli:read | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations webhook-deliveries-legacy` | `webhookDeliveries` | cli:read | Selected workspace | Legacy array; prefer paged command |
| integration | `velocity integrations issue-references-legacy` | `issueReferences` | cli:read | Selected workspace | Legacy array; prefer paged command |
| integration | `velocity integrations list` | `integrationsPage` | cli:read | Selected workspace | Cursor |
| integration | `velocity integrations webhooks` | `webhooksPage` | cli:read | Selected workspace | Cursor |
| integration | `velocity integrations webhook-deliveries` | `webhookDeliveriesPage` | cli:read | Selected workspace | Cursor |
| integration | `velocity integrations integration-events` | `integrationEventsPage` | cli:read | Selected workspace | Cursor |
| integration | `velocity integrations issue-references` | `issueReferencesPage` | cli:read | Selected workspace | Cursor |
| issue | `velocity issues list` | `issues` | cli:read | Selected workspace | Cursor |
| issue | `velocity issues get` | `issue` | cli:read | Selected workspace | Single result / recorded summary |
| issue | `velocity issues issue-labels` | `issueLabelsPage` | cli:read | Selected workspace | Cursor |
| issue | `velocity issues issue-subscribers` | `issueSubscribersPage` | cli:read | Selected workspace | Cursor |
| issue | `velocity issues issue-activities` | `issueActivitiesPage` | cli:read | Selected workspace | Cursor |
| issue | `velocity issues issue-comments` | `issueCommentsPage` | cli:read | Selected workspace | Cursor |
| issue | `velocity issues issue-relations` | `issueRelationsPage` | cli:read | Selected workspace | Cursor |
| label | `velocity labels list-legacy` | `labels` | cli:read | Selected workspace | Legacy array; prefer paged command |
| label | `velocity labels list` | `labelsPage` | cli:read | Selected workspace | Cursor |
| mcp | `velocity mcp mcp-oauth-grants-legacy` | `mcpOAuthGrants` | cli:read | Selected workspace | Legacy array; prefer paged command |
| mcp | `velocity mcp mcp-oauth-grants` | `mcpOAuthGrantsPage` | cli:read | Selected workspace | Cursor |
| mcp | `velocity mcp mcp-connections-legacy` | `mcpConnections` | cli:read | Selected workspace | Legacy array; prefer paged command |
| mcp | `velocity mcp mcp-connection` | `mcpConnection` | cli:read | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp mcp-usage` | `mcpUsage` | cli:read | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp mcp-workspace-usage` | `mcpWorkspaceUsage` | cli:read | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp mcp-connections` | `mcpConnectionsPage` | cli:read | Selected workspace | Cursor |
| notification | `velocity notifications list` | `notifications` | cli:read | Selected workspace | Offset |
| notification | `velocity notifications unread-notification-count` | `unreadNotificationCount` | cli:read | Selected workspace | Single result / recorded summary |
| prd | `velocity prds get` | `prd` | cli:read | Selected workspace | Single result / recorded summary |
| prd | `velocity prds prd-by-identifier` | `prdByIdentifier` | cli:read | Selected workspace | Single result / recorded summary |
| prd | `velocity prds list` | `prds` | cli:read | Selected workspace | Offset |
| prd | `velocity prds prd-requirements` | `prdRequirementsPage` | cli:read | Selected workspace | Cursor |
| prd | `velocity prds prd-versions` | `prdVersionsPage` | cli:read | Selected workspace | Cursor |
| prd | `velocity prds prd-projects` | `prdProjectsPage` | cli:read | Selected workspace | Cursor |
| prd | `velocity prds prd-teams` | `prdTeamsPage` | cli:read | Selected workspace | Cursor |
| prd | `velocity prds prd-stories` | `prdStoriesPage` | cli:read | Selected workspace | Cursor |
| project | `velocity projects get` | `project` | cli:read | Selected workspace | Single result / recorded summary |
| project | `velocity projects list-legacy` | `projects` | cli:read | Selected workspace | Legacy array; prefer paged command |
| project | `velocity projects list` | `projectsPage` | cli:read | Selected workspace | Cursor |
| project | `velocity projects project-milestones` | `projectMilestonesPage` | cli:read | Selected workspace | Cursor |
| referral | `velocity referrals my-referral-code` | `myReferralCode` | cli:read | Account | Single result / recorded summary |
| referral | `velocity referrals referral-stats` | `referralStats` | cli:read | Account | Single result / recorded summary |
| referral | `velocity referrals referral-signups` | `referralSignups` | cli:read | Account | Offset |
| referral | `velocity referrals referral-credits` | `referralCredits` | cli:read | Account | Offset |
| roadmap | `velocity feedback-roadmap feature-versions-legacy` | `featureVersions` | cli:read | Account | Legacy array; prefer paged command |
| roadmap | `velocity feedback-roadmap feature-requests-legacy` | `featureRequests` | cli:read | Account | Legacy array; prefer paged command |
| roadmap | `velocity feedback-roadmap feature-request` | `featureRequest` | cli:read | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap feature-leaderboard` | `featureLeaderboard` | cli:read | Account | Provider / summary / window array; inspect API policy |
| roadmap | `velocity feedback-roadmap feature-versions` | `featureVersionsPage` | cli:read | Account | Cursor |
| roadmap | `velocity feedback-roadmap feature-requests` | `featureRequestsPage` | cli:read | Account | Cursor |
| roadmap | `velocity feedback-roadmap feature-version-features` | `featureVersionFeaturesPage` | cli:read | Selected workspace | Cursor |
| search | `velocity search hybrid-search` | `hybridSearch` | cli:read | Selected workspace | Single result / recorded summary |
| session | `velocity sessions active-sessions-legacy` | `activeSessions` | cli:read | Account | Legacy array; prefer paged command |
| session | `velocity sessions login-history-legacy` | `loginHistory` | cli:read | Account | Legacy array; prefer paged command |
| session | `velocity sessions active-sessions` | `activeSessionsPage` | cli:read | Account | Cursor |
| session | `velocity sessions login-history` | `loginHistoryPage` | cli:read | Account | Cursor |
| sso | `velocity sso sso-configuration` | `ssoConfiguration` | cli:read | Selected workspace | Single result / recorded summary |
| status | `velocity statuses list-legacy` | `statuses` | cli:read | Selected workspace | Legacy array; prefer paged command |
| status | `velocity statuses list` | `statusesPage` | cli:read | Selected workspace | Cursor |
| team | `velocity teams get` | `team` | cli:read | Selected workspace | Single result / recorded summary |
| team | `velocity teams list-legacy` | `teams` | cli:read | Selected workspace | Legacy array; prefer paged command |
| team | `velocity teams list` | `teamsPage` | cli:read | Selected workspace | Cursor |
| team | `velocity teams team-members` | `teamMembersPage` | cli:read | Selected workspace | Cursor |
| uptime | `velocity uptime list-legacy` | `uptimeMonitors` | cli:read | Selected workspace | Legacy array; prefer paged command |
| uptime | `velocity uptime get` | `uptimeMonitor` | cli:read | Selected workspace | Single result / recorded summary |
| uptime | `velocity uptime list` | `uptimeMonitorsPage` | cli:read | Selected workspace | Cursor |
| uptime | `velocity uptime uptime-results` | `uptimeResultsPage` | cli:read | Selected workspace | Cursor |
| user-story | `velocity stories get` | `userStory` | cli:read | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories user-story-by-identifier` | `userStoryByIdentifier` | cli:read | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories list` | `userStories` | cli:read | Selected workspace | Offset |
| user-story | `velocity stories story-children` | `storyChildrenPage` | cli:read | Selected workspace | Cursor |
| user-story | `velocity stories story-issues` | `storyIssuesPage` | cli:read | Selected workspace | Cursor |
| user-story | `velocity stories story-requirements` | `storyRequirementsPage` | cli:read | Selected workspace | Cursor |
| user-story | `velocity stories requirement-stories` | `requirementStoriesPage` | cli:read | Selected workspace | Cursor |
| user | `velocity account get` | `me` | cli:read | Account | Single result / recorded summary |
| user | `velocity account user` | `user` | cli:read | Account | Single result / recorded summary |
| view | `velocity views get` | `view` | cli:read | Selected workspace | Single result / recorded summary |
| view | `velocity views list-legacy` | `views` | cli:read | Selected workspace | Legacy array; prefer paged command |
| view | `velocity views list` | `viewsPage` | cli:read | Selected workspace | Cursor |
| workspace-domain | `velocity domains list-legacy` | `workspaceDomains` | cli:read | Selected workspace | Legacy array; prefer paged command |
| workspace-domain | `velocity domains get` | `workspaceDomain` | cli:read | Selected workspace | Single result / recorded summary |
| workspace-domain | `velocity domains list` | `workspaceDomainsPage` | cli:read | Selected workspace | Cursor |
| workspace-roadmap | `velocity roadmap list-legacy` | `roadmapItems` | cli:read | Selected workspace | Legacy array; prefer paged command |
| workspace-roadmap | `velocity roadmap get` | `roadmapItem` | cli:read | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap roadmap-versions-legacy` | `roadmapVersions` | cli:read | Selected workspace | Legacy array; prefer paged command |
| workspace-roadmap | `velocity roadmap roadmap-version` | `roadmapVersion` | cli:read | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap roadmap-settings` | `roadmapSettings` | cli:read | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap list` | `roadmapItemsPage` | cli:read | Selected workspace | Cursor |
| workspace-roadmap | `velocity roadmap roadmap-versions` | `roadmapVersionsPage` | cli:read | Selected workspace | Cursor |
| workspace-roadmap | `velocity roadmap roadmap-version-items` | `roadmapVersionItemsPage` | cli:read | Selected workspace | Cursor |
| workspace | `velocity workspaces get` | `workspace` | cli:read | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces list-legacy` | `workspaces` | cli:read | Account | Legacy array; prefer paged command |
| workspace | `velocity workspaces invitation-by-token` | `invitationByToken` | cli:read | Account | Single result / recorded summary |
| workspace | `velocity workspaces workspace-leaderboard` | `workspaceLeaderboard` | cli:read | Account | Provider / summary / window array; inspect API policy |
| workspace | `velocity workspaces list` | `workspacesPage` | cli:read | Account | Cursor |
| workspace | `velocity workspaces workspace-members` | `workspaceMembersPage` | cli:read | Selected workspace | Cursor |
| workspace | `velocity workspaces workspace-invitations` | `workspaceInvitationsPage` | cli:read | Selected workspace | Cursor |
| zapier | `velocity integrations zapier-integration` | `zapierIntegration` | cli:read | Selected workspace | Single result / recorded summary |
| ai-usage | `velocity ai set-ai-credit-override` | `setAiCreditOverride` | cli:write | Selected workspace | Single result / recorded summary |
| api | `velocity keys create-api-key` | `createApiKey` | cli:write | Selected workspace | Single result / recorded summary |
| api | `velocity keys update-api-key` | `updateApiKey` | cli:write | Selected workspace | Single result / recorded summary |
| api | `velocity keys revoke-api-key` | `revokeApiKey` | cli:write | Selected workspace | Single result / recorded summary |
| api | `velocity keys create-oauth-app` | `createOAuthApp` | cli:write | Selected workspace | Single result / recorded summary |
| api | `velocity keys update-oauth-app` | `updateOAuthApp` | cli:write | Selected workspace | Single result / recorded summary |
| api | `velocity keys delete-oauth-app` | `deleteOAuthApp` | cli:write | Selected workspace | Single result / recorded summary |
| api | `velocity keys create-user-api-key` | `createUserApiKey` | cli:write | Account | Single result / recorded summary |
| api | `velocity keys revoke-user-api-key` | `revokeUserApiKey` | cli:write | Account | Single result / recorded summary |
| automation | `velocity automations create` | `createAutomation` | cli:write | Selected workspace | Single result / recorded summary |
| automation | `velocity automations update` | `updateAutomation` | cli:write | Selected workspace | Single result / recorded summary |
| automation | `velocity automations delete` | `deleteAutomation` | cli:write | Selected workspace | Single result / recorded summary |
| automation | `velocity automations run-automation-suggestion-analysis` | `runAutomationSuggestionAnalysis` | cli:write | Selected workspace | Single result / recorded summary |
| automation | `velocity automations accept-automation-suggestion` | `acceptAutomationSuggestion` | cli:write | Selected workspace | Single result / recorded summary |
| automation | `velocity automations dismiss-automation-suggestion` | `dismissAutomationSuggestion` | cli:write | Selected workspace | Single result / recorded summary |
| automation | `velocity automations snooze-automation-suggestion` | `snoozeAutomationSuggestion` | cli:write | Selected workspace | Single result / recorded summary |
| backup | `velocity backups create` | `createWorkspaceBackup` | cli:write | Selected workspace | Single result / recorded summary |
| backup | `velocity backups delete` | `deleteWorkspaceBackup` | cli:write | Selected workspace | Single result / recorded summary |
| billing | `velocity billing create-checkout-session` | `createCheckoutSession` | cli:write | Selected workspace | Single result / recorded summary |
| billing | `velocity billing confirm-checkout-session` | `confirmCheckoutSession` | cli:write | Selected workspace | Single result / recorded summary |
| billing | `velocity billing create-portal-session` | `createPortalSession` | cli:write | Selected workspace | Single result / recorded summary |
| billing | `velocity billing redeem-promo-code` | `redeemPromoCode` | cli:write | Selected workspace | Single result / recorded summary |
| claude | `velocity agents update-claude-config` | `updateClaudeConfig` | cli:write | Selected workspace | Single result / recorded summary |
| claude | `velocity agents enable-claude-integration` | `enableClaudeIntegration` | cli:write | Selected workspace | Single result / recorded summary |
| claude | `velocity agents dispatch-to-claude-agent` | `dispatchToClaudeAgent` | cli:write | Selected workspace | Single result / recorded summary |
| claude | `velocity agents cancel-claude-agent-run` | `cancelClaudeAgentRun` | cli:write | Selected workspace | Single result / recorded summary |
| claude | `velocity agents add-claude-credits` | `addClaudeCredits` | cli:write | Selected workspace | Single result / recorded summary |
| claude | `velocity agents resolve-claude-agent-action` | `resolveClaudeAgentAction` | cli:write | Selected workspace | Single result / recorded summary |
| codex | `velocity agents enable-codex-integration` | `enableCodexIntegration` | cli:write | Selected workspace | Single result / recorded summary |
| codex | `velocity agents update-codex-config` | `updateCodexConfig` | cli:write | Selected workspace | Single result / recorded summary |
| codex | `velocity agents dispatch-to-codex-agent` | `dispatchToCodexAgent` | cli:write | Selected workspace | Single result / recorded summary |
| comment | `velocity comments create` | `createComment` | cli:write | Selected workspace | Single result / recorded summary |
| comment | `velocity comments update` | `updateComment` | cli:write | Selected workspace | Single result / recorded summary |
| comment | `velocity comments delete` | `deleteComment` | cli:write | Selected workspace | Single result / recorded summary |
| comment | `velocity comments add-reaction` | `addReaction` | cli:write | Selected workspace | Single result / recorded summary |
| comment | `velocity comments remove-reaction` | `removeReaction` | cli:write | Selected workspace | Single result / recorded summary |
| cycle | `velocity cycles create` | `createCycle` | cli:write | Selected workspace | Single result / recorded summary |
| cycle | `velocity cycles update` | `updateCycle` | cli:write | Selected workspace | Single result / recorded summary |
| cycle | `velocity cycles delete` | `deleteCycle` | cli:write | Selected workspace | Single result / recorded summary |
| document | `velocity documents create` | `createDocument` | cli:write | Selected workspace | Single result / recorded summary |
| document | `velocity documents update` | `updateDocument` | cli:write | Selected workspace | Single result / recorded summary |
| document | `velocity documents delete` | `deleteDocument` | cli:write | Selected workspace | Single result / recorded summary |
| document | `velocity documents move-document` | `moveDocument` | cli:write | Selected workspace | Single result / recorded summary |
| feedback | `velocity feedback submit-feedback` | `submitFeedback` | cli:write | Account | Single result / recorded summary |
| integration | `velocity integrations create` | `createIntegration` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations update` | `updateIntegration` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations regenerate-integration-webhook-secret` | `regenerateIntegrationWebhookSecret` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations set-integration-webhook-secret` | `setIntegrationWebhookSecret` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations end-integration-webhook-secret-overlap` | `endIntegrationWebhookSecretOverlap` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations delete` | `deleteIntegration` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations disconnect-integration` | `disconnectIntegration` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations import-git-hub-issues` | `importGitHubIssues` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations post-tweet` | `postTweet` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations create-issue-from-tweet` | `createIssueFromTweet` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations create-webhook` | `createWebhook` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations update-webhook` | `updateWebhook` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations delete-webhook` | `deleteWebhook` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations test-webhook` | `testWebhook` | cli:write | Selected workspace | Single result / recorded summary |
| integration | `velocity integrations retry-webhook-delivery` | `retryWebhookDelivery` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues create-issue-relation` | `createIssueRelation` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues remove-issue-relation` | `removeIssueRelation` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues subscribe-issue` | `subscribeIssue` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues unsubscribe-issue` | `unsubscribeIssue` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues create` | `createIssue` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues update` | `updateIssue` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues delete` | `deleteIssue` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues bulk-update` | `batchUpdateIssues` | cli:write | Selected workspace | Single result / recorded summary |
| issue | `velocity issues bulk-delete` | `batchDeleteIssues` | cli:write | Selected workspace | Single result / recorded summary |
| label | `velocity labels create` | `createLabel` | cli:write | Selected workspace | Single result / recorded summary |
| label | `velocity labels update` | `updateLabel` | cli:write | Selected workspace | Single result / recorded summary |
| label | `velocity labels delete` | `deleteLabel` | cli:write | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp revoke-mcp-oauth-grant` | `revokeMcpOAuthGrant` | cli:write | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp create-mcp-connection` | `createMcpConnection` | cli:write | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp update-mcp-connection` | `updateMcpConnection` | cli:write | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp delete-mcp-connection` | `deleteMcpConnection` | cli:write | Selected workspace | Single result / recorded summary |
| mcp | `velocity mcp regenerate-mcp-token` | `regenerateMcpToken` | cli:write | Selected workspace | Single result / recorded summary |
| notification | `velocity notifications mark-notification-read` | `markNotificationRead` | cli:write | Selected workspace | Single result / recorded summary |
| notification | `velocity notifications mark-all-notifications-read` | `markAllNotificationsRead` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds create` | `createPrd` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds update` | `updatePrd` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds delete` | `deletePrd` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds set-prd-status` | `setPrdStatus` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds save-prd-version` | `savePrdVersion` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds set-prd-projects` | `setPrdProjects` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds set-prd-teams` | `setPrdTeams` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds create-prd-requirement` | `createPrdRequirement` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds update-prd-requirement` | `updatePrdRequirement` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds delete-prd-requirement` | `deletePrdRequirement` | cli:write | Selected workspace | Single result / recorded summary |
| prd | `velocity prds reorder-prd-requirements` | `reorderPrdRequirements` | cli:write | Selected workspace | Single result / recorded summary |
| project | `velocity projects set-project-showcase` | `setProjectShowcase` | cli:write | Selected workspace | Single result / recorded summary |
| project | `velocity projects create` | `createProject` | cli:write | Selected workspace | Single result / recorded summary |
| project | `velocity projects update` | `updateProject` | cli:write | Selected workspace | Single result / recorded summary |
| project | `velocity projects delete` | `deleteProject` | cli:write | Selected workspace | Single result / recorded summary |
| project | `velocity projects create-milestone` | `createMilestone` | cli:write | Selected workspace | Single result / recorded summary |
| project | `velocity projects update-milestone` | `updateMilestone` | cli:write | Selected workspace | Single result / recorded summary |
| project | `velocity projects delete-milestone` | `deleteMilestone` | cli:write | Selected workspace | Single result / recorded summary |
| referral | `velocity referrals generate-referral-code` | `generateReferralCode` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap submit-feature-request` | `submitFeatureRequest` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap vote-feature` | `voteFeature` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap unvote-feature` | `unvoteFeature` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap create-feature-version` | `createFeatureVersion` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap update-feature-version` | `updateFeatureVersion` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap delete-feature-version` | `deleteFeatureVersion` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap admin-create-feature-request` | `adminCreateFeatureRequest` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap admin-update-feature-request` | `adminUpdateFeatureRequest` | cli:write | Account | Single result / recorded summary |
| roadmap | `velocity feedback-roadmap delete-feature-request` | `deleteFeatureRequest` | cli:write | Account | Single result / recorded summary |
| session | `velocity sessions revoke-session` | `revokeSession` | cli:write | Account | Single result / recorded summary |
| session | `velocity sessions revoke-all-other-sessions` | `revokeAllOtherSessions` | cli:write | Account | Single result / recorded summary |
| session | `velocity sessions change-password` | `changePassword` | cli:write | Account | Single result / recorded summary |
| sso | `velocity sso configure-sso` | `configureSso` | cli:write | Selected workspace | Single result / recorded summary |
| sso | `velocity sso update-sso` | `updateSso` | cli:write | Selected workspace | Single result / recorded summary |
| sso | `velocity sso delete-sso` | `deleteSso` | cli:write | Selected workspace | Single result / recorded summary |
| status | `velocity statuses create` | `createStatus` | cli:write | Selected workspace | Single result / recorded summary |
| status | `velocity statuses update` | `updateStatus` | cli:write | Selected workspace | Single result / recorded summary |
| status | `velocity statuses delete` | `deleteStatus` | cli:write | Selected workspace | Single result / recorded summary |
| team | `velocity teams create` | `createTeam` | cli:write | Selected workspace | Single result / recorded summary |
| team | `velocity teams update` | `updateTeam` | cli:write | Selected workspace | Single result / recorded summary |
| team | `velocity teams delete` | `deleteTeam` | cli:write | Selected workspace | Single result / recorded summary |
| team | `velocity teams add-team-member` | `addTeamMember` | cli:write | Selected workspace | Single result / recorded summary |
| team | `velocity teams update-team-member-role` | `updateTeamMemberRole` | cli:write | Selected workspace | Single result / recorded summary |
| team | `velocity teams remove-team-member` | `removeTeamMember` | cli:write | Selected workspace | Single result / recorded summary |
| uptime | `velocity uptime create` | `createUptimeMonitor` | cli:write | Selected workspace | Single result / recorded summary |
| uptime | `velocity uptime update` | `updateUptimeMonitor` | cli:write | Selected workspace | Single result / recorded summary |
| uptime | `velocity uptime delete` | `deleteUptimeMonitor` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories create` | `createUserStory` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories update` | `updateUserStory` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories delete` | `deleteUserStory` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories set-user-story-requirements` | `setUserStoryRequirements` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories reorder-user-stories` | `reorderUserStories` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories split-user-story` | `splitUserStory` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories link-issue-to-story` | `linkIssueToStory` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories unlink-issue-from-story` | `unlinkIssueFromStory` | cli:write | Selected workspace | Single result / recorded summary |
| user-story | `velocity stories create-issues-from-stories` | `createIssuesFromStories` | cli:write | Selected workspace | Single result / recorded summary |
| user | `velocity account update` | `updateProfile` | cli:write | Account | Single result / recorded summary |
| user | `velocity account update-user-preferences` | `updateUserPreferences` | cli:write | Account | Single result / recorded summary |
| user | `velocity account update-issue-view-preference` | `updateIssueViewPreference` | cli:write | Account | Single result / recorded summary |
| view | `velocity views create` | `createView` | cli:write | Selected workspace | Single result / recorded summary |
| view | `velocity views update` | `updateView` | cli:write | Selected workspace | Single result / recorded summary |
| view | `velocity views delete` | `deleteView` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-domain | `velocity domains add-domain` | `addDomain` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-domain | `velocity domains verify-domain` | `verifyDomain` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-domain | `velocity domains remove-domain` | `removeDomain` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap create` | `createRoadmapItem` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap update` | `updateRoadmapItem` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap delete` | `deleteRoadmapItem` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap create-roadmap-version` | `createRoadmapVersion` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap update-roadmap-version` | `updateRoadmapVersion` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap delete-roadmap-version` | `deleteRoadmapVersion` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap vote-roadmap-item` | `voteRoadmapItem` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap unvote-roadmap-item` | `unvoteRoadmapItem` | cli:write | Selected workspace | Single result / recorded summary |
| workspace-roadmap | `velocity roadmap update-roadmap-settings` | `updateRoadmapSettings` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces create` | `createWorkspace` | cli:write | Account | Single result / recorded summary |
| workspace | `velocity workspaces update` | `updateWorkspace` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces patch-workspace-social-settings` | `patchWorkspaceSocialSettings` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces delete` | `deleteWorkspace` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces invite-member` | `inviteMember` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces update-member-role` | `updateMemberRole` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces remove-member` | `removeMember` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces leave` | `leaveWorkspace` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces revoke-invitation` | `revokeInvitation` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces resend-invitation` | `resendInvitation` | cli:write | Selected workspace | Single result / recorded summary |
| workspace | `velocity workspaces accept-invitation` | `acceptInvitation` | cli:write | Account | Single result / recorded summary |
| zapier | `velocity integrations disconnect-zapier` | `disconnectZapier` | cli:write | Selected workspace | Single result / recorded summary |

## REST commands and capability handoffs

| API | Command or handoff | Policy |
|---|---|---|
| `/api/ai/automation-suggestions` | velocity ai update-automation-suggestions | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/backfill` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/ai/bottleneck-detection` | velocity ai bottleneck-detection | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/bottleneck-thresholds` | velocity ai update-bottleneck-thresholds | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/command-parse` | velocity ai command-parse | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/decompose` | velocity ai decompose | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/document-draft` | velocity ai document-draft | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/embed` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/ai/issue-summary` | velocity ai issue-summary | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/nl-analytics` | velocity ai nl-analytics | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/parse-automation` | velocity ai parse-automation | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/prd-generate` | velocity ai prd-generate | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/release-notes/post-to-slack` | velocity ai release-notes-post-to-slack | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/release-notes` | velocity ai release-notes | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/slack-to-issue` | velocity ai slack-to-issue | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/smart-create` | velocity ai smart-create | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/sprint-prediction` | velocity ai sprint-prediction | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/story-breakdown` | velocity ai story-breakdown | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/story-refine` | velocity ai story-refine | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/stream` | velocity ai stream | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/team-health` | velocity ai team-health | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/triage-config` | velocity ai update-triage-config | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/triage` | velocity ai triage | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/ai/workspace-ai-config` | velocity ai update-workspace-ai-config | Platform authorization, entitlements, budget and metering; workspace filled from selected context. |
| `/api/attachments/[workspaceId]/[attachmentId]` | velocity attachments upload/list/download/remove | Private scoped issue storage, live consent and membership checks; 4 MiB per file and 50 per issue. Binary stdin/stdout, explicit retry IDs and version-checked inline image removal. |
| `/api/attachments` | velocity attachments upload/list/download/remove | Private scoped issue storage, live consent and membership checks; 4 MiB per file and 50 per issue. Binary stdin/stdout, explicit retry IDs and version-checked inline image removal. |
| `/api/auth/bitbucket/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/bitbucket` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/github/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/github` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/integrations` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/linear/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/linear` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/netlify/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/netlify` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/pagerduty/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/pagerduty` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/slack/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/slack` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/sso/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/sso/discover` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/sso/enforce-check` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/sso/login` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/sso/metadata` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/twitter/callback` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/auth/twitter` | velocity open security; velocity open integrations --provider PROVIDER | Provider OAuth/SSO browser verification and callbacks; configuration uses schema commands. |
| `/api/claude/callback` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cli/identity` | velocity whoami; velocity diagnostics | Live identity and protocol compatibility. |
| `/api/cli/meta` | velocity whoami; velocity diagnostics | Live identity and protocol compatibility. |
| `/api/contact` | Public web/marketing surfaces; roadmap/referrals commands for authenticated management | Public visitor or operational endpoint; not an additional authenticated account/workspace action. |
| `/api/cron/attachment-cleanup` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/audit-log-retention` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/automation-suggestions` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/backup` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/claude-agent-runs` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/cycle-transitions` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/domain-reverification` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/feedback-updates` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/seal-integration-secrets` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/sprint-predictions` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/team-health-digest` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/uptime-checks` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/webhook-retry` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/workspace-events-retention` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/cron/workspace-health-digest` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/export` | velocity api rest --path /api/export --input JSON | Complete matching CSV/JSON downloads in immutable ID order, bounded at 32 MiB; audit exports refuse more than 5,000 rows. Narrow creation-date/actor/action filters for larger results. Shared REST authentication enforces membership, scopes and consent. |
| `/api/graphql` | All schema commands; velocity api graphql | Public authenticated platform contract. |
| `/api/health` | Public web/marketing surfaces; roadmap/referrals commands for authenticated management | Public visitor or operational endpoint; not an additional authenticated account/workspace action. |
| `/api/import` | velocity api rest --path /api/import --method POST --input JSON | Scoped issue creation with team selection, validated references and normal events. Maximum 100 rows / 1 MiB. Per-row created IDs, failures and warnings are preserved; incomplete results exit 8. Retry only failed rows after correction. |
| `/api/integrations/jira/import` | velocity api rest --path /api/integrations/jira/import | Normal platform REST authorization. Provider imports preserve streamed partial results; ordinary GraphQL bulk/content commands offer typed alternatives. |
| `/api/integrations/jira/preview` | velocity api rest --path /api/integrations/jira/preview | Normal platform REST authorization. Provider imports preserve streamed partial results; ordinary GraphQL bulk/content commands offer typed alternatives. |
| `/api/integrations/linear/files/[workspaceId]/[issueId]/[assetId]` | velocity open page --path issues | Session-only private imported-attachment download. Direct issue files use the separate native attachments commands. |
| `/api/integrations/linear/import` | velocity api rest --path /api/integrations/linear/import | Normal platform REST authorization. Provider imports preserve streamed partial results; ordinary GraphQL bulk/content commands offer typed alternatives. |
| `/api/integrations/linear/preview` | velocity api rest --path /api/integrations/linear/preview | Normal platform REST authorization. Provider imports preserve streamed partial results; ordinary GraphQL bulk/content commands offer typed alternatives. |
| `/api/integrations/pagerduty` | velocity open integrations --provider pagerduty | This provider control API requires a browser session; existing GraphQL integration configuration/inspection is available. |
| `/api/invite/[token]` | velocity workspaces accept-invitation --token TOKEN | Public invite landing handoff; authenticated acceptance is available. |
| `/api/make/actions/create-comment` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/actions/create-issue` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/actions/create-project` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/actions/update-issue` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/auth/me` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/hooks/[id]` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/hooks` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/options/cycles` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/options/labels` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/options/members` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/options/projects` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/options/statuses` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/options/teams` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/searches/find-issue` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/searches/find-project` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/searches/find-user` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/comments` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/cycles/completed` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/cycles/started` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/issues` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/issues/status-changed` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/issues/updated` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/projects` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/make/triggers/projects/updated` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/mcp` | velocity api mcp TOOL | Requires a separately MCP-scoped token and an MCP-eligible plan; worker lifecycle stays in velocity-agent. |
| `/api/oauth/authorize` | velocity login/logout; mcp grant/app commands | PKCE and private refresh lifecycle; consent remains an explicit browser interaction. |
| `/api/oauth/code` | velocity login/logout; mcp grant/app commands | PKCE and private refresh lifecycle; consent remains an explicit browser interaction. |
| `/api/oauth/consent` | velocity login/logout; mcp grant/app commands | PKCE and private refresh lifecycle; consent remains an explicit browser interaction. |
| `/api/oauth/register` | velocity login/logout; mcp grant/app commands | PKCE and private refresh lifecycle; consent remains an explicit browser interaction. |
| `/api/oauth/revoke` | velocity login/logout; mcp grant/app commands | PKCE and private refresh lifecycle; consent remains an explicit browser interaction. |
| `/api/oauth/token` | velocity login/logout; mcp grant/app commands | PKCE and private refresh lifecycle; consent remains an explicit browser interaction. |
| `/api/public/profile/[workspaceSlug]` | Public web/marketing surfaces; roadmap/referrals commands for authenticated management | Public visitor or operational endpoint; not an additional authenticated account/workspace action. |
| `/api/public/roadmap/[workspaceSlug]` | Public web/marketing surfaces; roadmap/referrals commands for authenticated management | Public visitor or operational endpoint; not an additional authenticated account/workspace action. |
| `/api/referral/track` | Public web/marketing surfaces; roadmap/referrals commands for authenticated management | Public visitor or operational endpoint; not an additional authenticated account/workspace action. |
| `/api/upload/avatar` | velocity workspaces upload-avatar | Authorized platform storage pipeline. |
| `/api/webhooks/bitbucket` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/circleci` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/datadog` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/github` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/netlify` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/opsgenie` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/pagerduty` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/sentry` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/slack` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/stripe-connect` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/stripe` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/twitter` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/webhooks/vercel` | Integration/automation/agent settings and recorded histories | Signed provider callback or privileged system job; an ordinary management CLI cannot impersonate it. |
| `/api/workspace-events` | velocity open page --path activity; velocity notifications watch; issue activities via --select | Browser/JWT activity stream has bounded snapshot reconciliation, not a durable cursor. CLI polls recorded notifications. |
| `/api/zapier/actions/create-comment` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/actions/create-issue` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/actions/create-project` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/actions/update-issue` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/auth/me` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/hooks/[id]` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/hooks` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/options/cycles` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/options/labels` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/options/members` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/options/projects` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/options/statuses` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/options/teams` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/searches/find-issue` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/searches/find-project` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/searches/find-user` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/comments` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/cycles/completed` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/cycles/started` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/issues` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/issues/status-changed` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/issues/updated` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/projects` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |
| `/api/zapier/triggers/projects/updated` | Schema management commands; integrations/zapier configuration | Third-party automation protocol wrappers and inbound triggers, not an additional human management surface. |

## MCP-only and worker surfaces

These exact tools are available through `velocity api mcp TOOL --args @payload.json` with an explicitly MCP-scoped token and eligible plan. Equivalent management data is also exposed by the schema commands above. Account-grant policies still apply. Execution claims/heartbeats/completion are worker capabilities for `velocity-agent`; use them only as part of an explicit worker protocol.

- `add_comment`
- `add_domain`
- `create_branch`
- `create_issue`
- `create_roadmap_item`
- `create_roadmap_version`
- `create_user_api_key`
- `create_workspace`
- `delete_roadmap_item`
- `delete_workspace`
- `get_active_sprint`
- `get_current_user`
- `get_cycle`
- `get_issue`
- `get_issue_context`
- `get_my_issues`
- `get_pending_agent_runs`
- `get_project`
- `get_roadmap_settings`
- `get_workspace`
- `link_commit`
- `link_pr`
- `list_comments`
- `list_cycles`
- `list_domains`
- `list_issues`
- `list_labels`
- `list_members`
- `list_projects`
- `list_roadmap_items`
- `list_roadmap_versions`
- `list_statuses`
- `list_teams`
- `list_user_api_keys`
- `list_workspaces`
- `open_pr`
- `remove_domain`
- `revoke_user_api_key`
- `search_issues`
- `transition_issue`
- `update_agent_run`
- `update_current_user`
- `update_issue`
- `update_roadmap_item`
- `update_roadmap_settings`
- `update_workspace`
- `verify_domain`
- `vote_roadmap_item`

## Product page coverage

| Page | Data commands | Browser handoff |
|---|---|---|
| `[workspaceSlug]/activity` | audit; notifications watch; issue activities via --select | velocity open page --path activity |
| `[workspaceSlug]/analytics` | billing analytics; ai; uptime | velocity open page --path analytics |
| `[workspaceSlug]/cycles/[cycleId]` | cycles | velocity open page --path cycles |
| `[workspaceSlug]/cycles` | cycles | velocity open page --path cycles |
| `[workspaceSlug]/documents/[documentId]` | documents; comments | velocity open page --path documents |
| `[workspaceSlug]/documents` | documents; comments | velocity open page --path documents |
| `[workspaceSlug]/inbox` | notifications | velocity open page --path inbox |
| `[workspaceSlug]/issues/[issueRef]` | issues; comments | velocity open page --path issues |
| `[workspaceSlug]/issues` | issues; comments | velocity open page --path issues |
| `[workspaceSlug]` | workspaces; issues; projects; notifications | velocity open page --path issues |
| `[workspaceSlug]/prds/[identifier]` | prds; stories | velocity open page --path prds |
| `[workspaceSlug]/prds` | prds; stories | velocity open page --path prds |
| `[workspaceSlug]/projects/[projectId]` | projects | velocity open page --path projects |
| `[workspaceSlug]/projects` | projects | velocity open page --path projects |
| `[workspaceSlug]/roadmap` | roadmap; feedback-roadmap | velocity open page --path roadmap |
| `[workspaceSlug]/settings/account/api-keys` | account; sessions; keys; notifications | velocity open page --path settings/account/api-keys |
| `[workspaceSlug]/settings/account/feedback` | account; sessions; keys; notifications | velocity open page --path settings/account/feedback |
| `[workspaceSlug]/settings/account/preferences` | account; sessions; keys; notifications | velocity open page --path settings/account/preferences |
| `[workspaceSlug]/settings/ai-usage` | ai | velocity open page --path settings/ai-usage |
| `[workspaceSlug]/settings/ai` | ai | velocity open page --path settings/ai |
| `[workspaceSlug]/settings/api/oauth` | keys; mcp | velocity open page --path settings/api/oauth |
| `[workspaceSlug]/settings/api` | keys; mcp | velocity open page --path settings/api |
| `[workspaceSlug]/settings/audit-log` | audit; notifications watch; issue activities via --select | velocity open page --path settings/audit-log |
| `[workspaceSlug]/settings/automations/[automationId]` | automations | velocity open page --path settings/automations |
| `[workspaceSlug]/settings/automations/new` | automations | velocity open page --path settings/automations/new |
| `[workspaceSlug]/settings/automations` | automations | velocity open page --path settings/automations |
| `[workspaceSlug]/settings/backups` | backups | velocity open page --path settings/backups |
| `[workspaceSlug]/settings/billing` | billing | velocity open page --path settings/billing |
| `[workspaceSlug]/settings/domains` | ai | velocity open page --path settings/domains |
| `[workspaceSlug]/settings/export` | api rest; bulk; content export/import | velocity open page --path settings/export |
| `[workspaceSlug]/settings/general` | workspaces; teams; statuses; labels | velocity open page --path settings/general |
| `[workspaceSlug]/settings/import/jira` | api rest; bulk; content export/import | velocity open page --path settings/import/jira |
| `[workspaceSlug]/settings/import/linear` | api rest; bulk; content export/import | velocity open page --path settings/import/linear |
| `[workspaceSlug]/settings/import` | api rest; bulk; content export/import | velocity open page --path settings/import |
| `[workspaceSlug]/settings/integrations/[provider]` | integrations; agents; mcp | velocity open page --path settings/integrations |
| `[workspaceSlug]/settings/integrations/claude` | integrations; agents; mcp | velocity open page --path settings/integrations/claude |
| `[workspaceSlug]/settings/integrations/codex` | integrations; agents; mcp | velocity open page --path settings/integrations/codex |
| `[workspaceSlug]/settings/integrations` | integrations; agents; mcp | velocity open page --path settings/integrations |
| `[workspaceSlug]/settings/integrations/pagerduty` | integrations; agents; mcp | velocity open page --path settings/integrations/pagerduty |
| `[workspaceSlug]/settings/integrations/stripe` | integrations; agents; mcp | velocity open page --path settings/integrations/stripe |
| `[workspaceSlug]/settings/integrations/zapier` | integrations; agents; mcp | velocity open page --path settings/integrations/zapier |
| `[workspaceSlug]/settings/labels` | labels | velocity open page --path settings/labels |
| `[workspaceSlug]/settings/mcp` | keys; mcp | velocity open page --path settings/mcp |
| `[workspaceSlug]/settings/members` | workspaces; teams; statuses; labels | velocity open page --path settings/members |
| `[workspaceSlug]/settings/monitoring` | uptime | velocity open page --path settings/monitoring |
| `[workspaceSlug]/settings/notifications` | account; sessions; keys; notifications | velocity open page --path settings/notifications |
| `[workspaceSlug]/settings` | workspaces; account | velocity open page --path settings |
| `[workspaceSlug]/settings/referrals` | referrals | velocity open page --path settings/referrals |
| `[workspaceSlug]/settings/roadmap` | roadmap; feedback-roadmap | velocity open page --path settings/roadmap |
| `[workspaceSlug]/settings/security` | account; sessions; keys; notifications | velocity open page --path settings/security |
| `[workspaceSlug]/settings/social` | integrations; agents; mcp | velocity open page --path settings/social |
| `[workspaceSlug]/settings/sso` | sso | velocity open page --path settings/sso |
| `[workspaceSlug]/settings/teams` | workspaces; teams; statuses; labels | velocity open page --path settings/teams |
| `[workspaceSlug]/settings/webhooks/[webhookId]` | integrations; agents; mcp | velocity open page --path settings/webhooks |
| `[workspaceSlug]/settings/webhooks` | integrations; agents; mcp | velocity open page --path settings/webhooks |
| `[workspaceSlug]/stories/[identifier]` | stories; prds | velocity open page --path stories |
| `[workspaceSlug]/stories` | stories; prds | velocity open page --path stories |
| `[workspaceSlug]/views` | views; issues list --view | velocity open page --path views |
| `onboarding` | workspaces create; account | velocity open page --path onboarding |

## Explicit API gaps

- **ENGIN-462 — Account lifecycle and notification delivery preferences:** No account deletion/full data export/email mutation; notification settings Save is currently a placeholder. Arbitrary stored JSON does not activate delivery policies.

## Additional workflows

Both binaries support multi-account PKCE, refresh/logout, per-account workspace defaults, typed JSON/stdin/file arguments, ordered partial-result bulk operations, saved-view filters, atomic preference patches/reset, rich-text JSON and loss-aware Markdown, version-checked body import/export, notification polling, diagnostics and completions. Private images/files use attachments upload/list/download/remove; images in descriptions are removed through a version-checked ordinary issue edit. MFA/provider authorization uses exact browser handoffs. No ordinary management command requires an LLM credential or service role.
