---
name: github-ci-cd
description: Configure GitHub Actions checks and controlled releases.
---

# github-ci-cd

## Workflow and rules

Use least-privilege workflow permissions, pinned trusted actions, no secrets on untrusted PRs. Run lint, tests with isolated PostgreSQL and blocked outbound integrations, migration checks, dependency/secret scan and image build. Require passing checks before deployment. Use environment approvals for sensitive deployments and report failures. Never push or deploy beyond user authorization.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Localization

Apply `localization-i18n` for all user-facing text. If it is not installed, keep these rules: every human-facing string comes from translation catalogs; no Persian in executable source, identifiers or comments (English for code); stable, locale-independent API error codes; verify locale coverage, fallback and RTL before release.
