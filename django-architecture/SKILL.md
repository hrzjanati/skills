---
name: django-architecture
description: Create or evolve a modular Django backend with feature-owned apps and tests.
---

# django-architecture

## Workflow and rules

Use a modular monolith initially. Create an app for a substantial independent domain; put small features in the owning app. Keep models, views, forms, serializers and services in modules or packages according to size; never require empty layers. Keep business rules in services, views thin, permissions centralized, migrations and tests inside each app. Namespace templates/static and URLs. Reuse existing services before creating new ones. Shared extensions must be domain-neutral; avoid circular imports and cross-app writes outside explicit service contracts. Use atomic transactions for coupled writes. See references/layout.md. Derived from reviewed architecture of a Django project; no private source included.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Localization

Apply `localization-i18n` for all user-facing text. If it is not installed, keep these rules: every human-facing string comes from translation catalogs; no Persian in executable source, identifiers or comments (English for code); stable, locale-independent API error codes; verify locale coverage, fallback and RTL before release.

## Account foundation
Use django-user-model, django-accounts and django-otp-auth if authentication is in scope. Define AUTH_USER_MODEL before initial migration; keep family relations separate from login identities. Put account tests in accounts/tests/.
