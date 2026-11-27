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

## End-to-end execution gates (mandatory)
When asked to build and deploy to Hamravesh, perform these steps in order, not merely describe them. Track evidence and blockers; never invent tool access or skip failed gates.
1. Inspect repository, define MVP, data sensitivity, acceptance criteria and target environment.
2. Establish modular Django architecture, PostgreSQL where appropriate, locale catalogs, .env.example, ignored local .env, .dockerignore, settings validation and permanent AGENTS.md/CLAUDE.md rules. Generate local secrets securely when authorized; never print or commit secrets.
3. Apply django-user-model, django-accounts and django-otp-auth before initial migration if accounts required. Use Kavenegar, SabaNovin, Zibal only when needed; adapters and fake test credentials.
4. Design with UI/UX Pro Max when available; implement feature slices and per-app tests, translated copy and centralized permissions. Run unit, integration, browser, migration, localization, security and authorized non-destructive assessment checks; fix failures. Block outbound paid calls.
5. Build Docker locally/CI; validate startup, health, static files, compiled locale catalogs, migration plan, isolated database and workers. Never copy .env or use production secrets at build.
6. Prepare GitHub and CI checks; commit authorized changes without secrets. Inspect actual Hamravesh app/cluster, branch, port, health path, storage and rollback plan. Obtain missing access or runtime secrets through provider UI, never chat. Do not silently create paid resources or overwrite data.
7. Configure Darkube Git/image source, runtime ENV from .env.example, database, storage, health, domain/TLS and workers as required. Apply authorized changes; controlled migrations. Check actual build/deploy logs, deployed revision, HTTP health, UI and safe synthetic smoke tests. No live SMS/payment without separate permission.
8. Report real URL, revision, checks, limitations, rollback and blockers. If no deploy access, give exact manual steps and mark unverified. A Docker build is not proof of deployment.
