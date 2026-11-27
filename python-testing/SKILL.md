---
name: python-testing
description: Write safe Python/Django unit, integration, permission and regression tests.
---

# python-testing

## Workflow and rules

Place tests inside owning app, e.g. tests/test_services.py. Use existing runner or pytest-django; isolate database with dedicated test credentials. Red-green-refactor for bugs; test permissions, boundary values, failures, retries and concurrency where relevant. Block outbound network at test environment level, also mock service adapters and clear paid-service credentials; allow only explicit test DB/service endpoints. Never send real SMS, calls, payments, AI or external requests. Fail CI on unexpected network attempts; use fake credentials and fixtures. Verify test database is not production before running migrations. Run targeted tests then full suite; report exact commands and results. See references/safety.md.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Mandatory localization

Apply `localization-i18n` when available. All human-facing copy (UI, forms, validation, API display messages, notifications, email, SMS, accessibility labels and document templates) must come from translation catalogs. No hardcoded Persian text in source code, including comments and identifiers; use English for technical code and comments. Prefer stable translation keys or English gettext message IDs as required by the framework. Persian text belongs in dedicated locale files, translated content fixtures or user-provided content, never executable code. Keep API error codes stable and locale-independent. Verify locale coverage, fallback, RTL and absence of hardcoded Persian source before release.
