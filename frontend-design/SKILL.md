---
name: frontend-design
description: Design accessible, responsive product interfaces using UI/UX Pro Max and a coherent design system.
---

# frontend-design

## Workflow and rules

Use UI/UX Pro Max as the primary design research skill; install the upstream package if missing with `npx skills add nextlevelbuilder/ui-ux-pro-max-skill --skill ui-ux-pro-max` after reviewing its source and obtaining permission for installation. Use its design-system workflow to choose typography, palette, spacing and interactions. Preserve existing brand tokens; design mobile-first and RTL for Persian when relevant. Specify loading, empty, error, disabled and success states. Check keyboard focus, contrast, reduced motion and screen-reader labels. Review actual rendered pages at mobile and desktop widths. Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill ; secondary inspiration: https://github.com/anthropics/skills/tree/main/skills/frontend-design . If unavailable, document fallback; do not claim the upstream skill ran.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Mandatory localization

Apply `localization-i18n` when available. All human-facing copy (UI, forms, validation, API display messages, notifications, email, SMS, accessibility labels and document templates) must come from translation catalogs. No hardcoded Persian text in source code, including comments and identifiers; use English for technical code and comments. Prefer stable translation keys or English gettext message IDs as required by the framework. Persian text belongs in dedicated locale files, translated content fixtures or user-provided content, never executable code. Keep API error codes stable and locale-independent. Verify locale coverage, fallback, RTL and absence of hardcoded Persian source before release.
