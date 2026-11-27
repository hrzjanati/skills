---
name: localization-i18n
description: Enforce locale-based internationalization in Python, Django, web and mobile applications. Keep Persian out of executable source code, translate every user-facing message, and verify catalogs, RTL and fallback.
---

# Localization and internationalization

## Non-negotiable project policy

- Keep source code, identifiers, comments, and technical log templates in English. Never hardcode Persian strings in Python, JavaScript, TypeScript, HTML templates, CSS, Swift, Kotlin, SQL or other executable source.
- Every user-facing string must be resolved through the project's localization framework: buttons, headings, placeholders, tooltips, aria labels, validation/errors, empty states, dialogs, emails, SMS, push notifications, generated documents and admin UI.
- Persian translations belong in locale resources only (for example locale/fa/LC_MESSAGES/django.po or locales/fa.json). User-generated data, translated test fixtures stored separately, and Persian documentation are not source code and may contain Persian. Do not remove or alter user data.
- Use stable translation keys where supported; Django gettext uses English source message IDs. Never use Persian gettext source IDs. Machine-readable error codes, protocol values and database enums must remain stable and untranslated.

## Django

Enable USE_I18N, configure LANGUAGES, LOCALE_PATHS and LocaleMiddleware after SessionMiddleware and before CommonMiddleware. Use gettext_lazy for model/form labels and gettext for request-time messages; use {% translate %} and {% blocktranslate %} in templates. Use JavaScriptCatalog or the existing frontend translation system for JS. Keep .po sources versioned; compile .mo files during build or deployment. Activate the recipient's locale explicitly in background jobs and restore it afterwards.

Suggested tree:

    locale/
      fa/LC_MESSAGES/django.po
      en/LC_MESSAGES/django.po
    frontend/locales/
      fa.json
      en.json

Run makemessages for supported locales, compilemessages, and check missing or fuzzy translations. Use named placeholders and pluralization; never concatenate fragments to construct sentences.

## Frontend and mobile

Use existing i18n library (for example i18next, String Catalogs or Android string resources); do not introduce a second system without justification. Load messages via keys, set lang and dir from active locale, use logical CSS properties, and verify mixed-direction text. Provide English fallback and detect missing keys. Store dates and money canonically; format with locale-aware tools. Persian calendar and toman/rial conversion are explicit product choices, not automatic translation.

## Verification

Run a source scan for Arabic-script characters in application code (including comments), excluding only explicitly configured translation resources, documentation, vendor/generated files and separately stored test data. Report file and line; fix violations rather than blindly deleting text. Unicode escape sequences must not be used to hide hardcoded translations. Test language switching, fallback, plural forms, placeholders, RTL, translated errors, notification locale and API machine codes. Add CI checks for translation completeness and source scan. See references/source-check.md.

Do not claim all strings are localized based solely on a Unicode scan: review hardcoded English user-facing strings as well.
