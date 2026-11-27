---
name: django-architecture
description: Create or evolve a modular Django backend with feature-owned apps and tests.
---

# django-architecture

## Workflow and rules

Use a modular monolith initially. Create an app for a substantial independent domain; put small features in the owning app. Keep models, views, forms, serializers and services in modules or packages according to size; never require empty layers. Keep business rules in services, views thin, permissions centralized, migrations and tests inside each app. Namespace templates/static and URLs. Reuse existing services before creating new ones. Shared extensions must be domain-neutral; avoid circular imports and cross-app writes outside explicit service contracts. Use atomic transactions for coupled writes. See references/layout.md. Derived from reviewed architecture of a Django project; no private source included.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Mandatory localization

Apply `localization-i18n` when available. All human-facing copy (UI, forms, validation, API display messages, notifications, email, SMS, accessibility labels and document templates) must come from translation catalogs. No hardcoded Persian text in source code, including comments and identifiers; use English for technical code and comments. Prefer stable translation keys or English gettext message IDs as required by the framework. Persian text belongs in dedicated locale files, translated content fixtures or user-provided content, never executable code. Keep API error codes stable and locale-independent. Verify locale coverage, fallback, RTL and absence of hardcoded Persian source before release.
