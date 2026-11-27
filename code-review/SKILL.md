---
name: code-review
description: Review changes for correctness, security, maintainability and test gaps.
---

# code-review

## Workflow and rules

Read diff and surrounding code; prioritize concrete bugs, security issues and regressions. Check feature boundaries, permission matrix, error paths, migrations and secrets. Cite file/line and explain impact; distinguish blocking issues from optional suggestions. Run relevant checks where possible and state unverified items. Reference https://github.com/obra/superpowers .

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Mandatory localization

Apply `localization-i18n` when available. All human-facing copy (UI, forms, validation, API display messages, notifications, email, SMS, accessibility labels and document templates) must come from translation catalogs. No hardcoded Persian text in source code, including comments and identifiers; use English for technical code and comments. Prefer stable translation keys or English gettext message IDs as required by the framework. Persian text belongs in dedicated locale files, translated content fixtures or user-provided content, never executable code. Keep API error codes stable and locale-independent. Verify locale coverage, fallback, RTL and absence of hardcoded Persian source before release.
