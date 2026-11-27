---
name: github-ci-cd
description: Configure GitHub Actions checks and controlled releases.
---

# github-ci-cd

## Workflow and rules

Use least-privilege workflow permissions, pinned trusted actions, no secrets on untrusted PRs. Run lint, tests with isolated PostgreSQL and blocked outbound integrations, migration checks, dependency/secret scan and image build. Require passing checks before deployment. Use environment approvals for sensitive deployments and report failures. Never push or deploy beyond user authorization.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Mandatory localization

Apply `localization-i18n` when available. All human-facing copy (UI, forms, validation, API display messages, notifications, email, SMS, accessibility labels and document templates) must come from translation catalogs. No hardcoded Persian text in source code, including comments and identifiers; use English for technical code and comments. Prefer stable translation keys or English gettext message IDs as required by the framework. Persian text belongs in dedicated locale files, translated content fixtures or user-provided content, never executable code. Keep API error codes stable and locale-independent. Verify locale coverage, fallback, RTL and absence of hardcoded Persian source before release.
