---
name: startup-orchestrator
description: Coordinate startup development from idea through design, backend, testing, security and release.
---

# startup-orchestrator

## Scope first

Inspect the repository, its existing stack and the user's request before choosing a path. Keep the existing stack and conventions. The Django-specific steps below apply to new projects and to existing Python/Django projects; for another stack, apply the same gates with that stack's equivalents and do not migrate the project to Django or PostgreSQL without explicit approval. Deployment steps run only when deployment is requested.

If a named skill is unavailable, say so and follow the instructions available here; do not pretend it ran. Keep permanent project rules in AGENTS.md and CLAUDE.md without overwriting existing instructions.

## Ordered gates

Perform these steps in order, not merely describe them. Track evidence and blockers; never invent tool access or skip a failed gate.

1. **Plan** with `startup-planning`: MVP, users, data sensitivity, acceptance criteria and target environment.
2. **Foundation** with `django-architecture`, `python-development`, `database-design` and `environment-secrets`: modular architecture, PostgreSQL where appropriate, `.env.example`, ignored local `.env`, `.dockerignore`, settings validation, and the permanent AGENTS.md/CLAUDE.md rules. Set up `localization-i18n` catalogs now, before user-facing text exists. Generate local secrets only when authorized; never print or commit secrets.
3. **Accounts** (when authentication is in scope) with `django-user-model`, `django-accounts` and `django-otp-auth`, before the initial migration.
4. **Integrations** only when needed: `kavenegar-sms` for OTP and system SMS, `sabanovin-sms` for customer SMS and reminders, `zibal-payment` for payments. Use adapters and fake test credentials; never send real paid requests without explicit authorization.
5. **Interface** with `frontend-design` and `web-development`. UI/UX Pro Max is a separate upstream skill: use it when installed, otherwise say so and follow `frontend-design` alone.
6. **Build and test each feature slice** with `django-api`, `python-testing` and `webapp-testing`: per-app tests, translated copy, centralized permissions, blocked outbound paid calls.
7. **Harden** with `secure-coding`, `code-review` and, only in an authorized scope, `penetration-testing`. Run the unit, integration, browser, migration, localization and security checks and fix failures.
8. **Release checks** with `github-ci-cd` and `docker-deployment`: build the image locally or in CI and validate startup, health, static files, compiled locale catalogs, migration plan, isolated database and workers. Never copy `.env` or use production secrets at build time. Commit authorized changes without secrets.
9. **Deploy** (only when requested) with `hamravesh-darkube`: inspect the real app, branch, port, health path, storage and rollback plan; obtain missing access or runtime secrets through the provider UI, never chat; do not silently create paid resources or overwrite data. Configure source, runtime ENV from `.env.example`, database, storage, health, domain/TLS and workers; run controlled migrations. Check build and deploy logs, deployed revision, HTTP health, UI and safe synthetic smoke tests. No live SMS or payment without separate permission.
10. **Operate** with `monitoring-logging`, `performance-optimization` and `seo-accessibility` as relevant to the release.

## Completion

Report the real URL and revision (if deployed), files changed, commands and their results, checks actually performed, failures, limitations, rollback and remaining risks or approvals. If there was no deploy access, give exact manual steps and mark them unverified. A Docker build is not proof of deployment. Do not claim success without evidence.

## Localization

Apply `localization-i18n` for all user-facing text. If it is not installed, keep these rules: every human-facing string comes from translation catalogs; no Persian in executable source, identifiers or comments (English for code); stable, locale-independent API error codes; verify locale coverage, fallback and RTL before release.
