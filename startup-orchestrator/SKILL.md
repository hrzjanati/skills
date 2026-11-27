---
name: startup-orchestrator
description: Coordinate startup development from idea through design, backend, testing, security and release.
---

# startup-orchestrator

## Workflow and rules

Inspect project state and user scope first. Use startup-planning for MVP; frontend-design (UI/UX Pro Max) and web-development for UI; django-architecture, python-development, django-api and database-design for backend; environment-secrets before integration. Use python-testing and webapp-testing throughout; secure-coding before review and penetration-testing only in authorized scope. Run code-review and github-ci-cd checks; docker-deployment and hamravesh-darkube only when deployment is requested. Finish with monitoring-logging, performance-optimization and seo-accessibility as relevant. If a named skill is unavailable, disclose it and follow its available instructions; do not pretend invocation. Report files changed, commands/results, remaining risks and approvals. Keep permanent project rules in AGENTS.md and CLAUDE.md; do not overwrite existing instructions.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Iranian service integrations

When needed, use kavenegar-sms for OTP/system SMS, sabanovin-sms for customer SMS/reminders and zibal-payment for payment gateway integration. Follow environment-secrets and python-testing; never run real paid requests without explicit authorization.

## Mandatory localization

Apply `localization-i18n` when available. All human-facing copy (UI, forms, validation, API display messages, notifications, email, SMS, accessibility labels and document templates) must come from translation catalogs. No hardcoded Persian text in source code, including comments and identifiers; use English for technical code and comments. Prefer stable translation keys or English gettext message IDs as required by the framework. Persian text belongs in dedicated locale files, translated content fixtures or user-provided content, never executable code. Keep API error codes stable and locale-independent. Verify locale coverage, fallback, RTL and absence of hardcoded Persian source before release.
