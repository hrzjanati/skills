---
name: code-review
description: Review changes for correctness, security, maintainability and test gaps.
---

# code-review

## Workflow and rules

Read diff and surrounding code; prioritize concrete bugs, security issues and regressions. Check feature boundaries, permission matrix, error paths, migrations and secrets. Cite file/line and explain impact; distinguish blocking issues from optional suggestions. Run relevant checks where possible and state unverified items. Reference https://github.com/obra/superpowers .

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.

## Localization

Apply `localization-i18n` for all user-facing text. If it is not installed, keep these rules: every human-facing string comes from translation catalogs; no Persian in executable source, identifiers or comments (English for code); stable, locale-independent API error codes; verify locale coverage, fallback and RTL before release.
