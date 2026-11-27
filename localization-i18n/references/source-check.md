# Source audit

Use a repository-specific allowlist of locale directories, not a blanket exemption for JSON or HTML. Scan tracked application source for Arabic-script characters (including Persian letters) with a Unicode-aware tool; include source comments and templates. Exclude vendor/generated code and separate translation resources only after verifying their paths. Review escapes and user-facing English literals separately. Avoid scanning secrets or printing user data. Report path and line number. Add CI regression fixtures for a failing source file and a passing locale resource.

For Django run:

    python manage.py makemessages -l fa
    python manage.py compilemessages
    python manage.py test

Run makemessages against a clean working tree and review catalog changes. Do not overwrite existing human translations automatically.
