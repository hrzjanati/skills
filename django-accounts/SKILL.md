---
name: django-accounts
description: Build a modular Django accounts app for signup, OTP login, profiles, authorization, active sessions and optional family identity workflows.
---

# Accounts app

Apply django-user-model and django-otp-auth when available. Independently enforce custom UUID user before first migration, unique verified login identity, cryptographic one-time OTP with protected verifier, atomic rate limits, no raw OTP storage, no login from unverified POST, no shared caregiver number as login identity.

## Layout
accounts/models/user.py, identity.py, otp.py, session.py; accounts/services/authentication.py, registration.py, profiles.py, sessions.py; accounts/views/, forms/, serializers/, urls.py, admin.py, migrations/, tests/. Small modules can remain single files. Separate family domain into own app when substantial. Thin views and explicit service contracts.

## Journey
Mobile entry -> send challenge -> verify -> existing session or verified registration grant -> optional identity verification -> profile completion -> dashboard. Logout POST with CSRF. Profile editing, safe account recovery, verified phone change with revocation of relevant sessions and invalidation of identity verification. Optional Shahkar only with consent and minimal retained data. Do not expose raw national ID or provider response. Family profiles require explicit caregiver permission and object-level checks, not unaudited impersonation.

## Sessions and admin
Use Django sessions, rotate on login and privilege change. Track active sessions with opaque user-scoped references, coarse device labels and last activity; never expose raw session tokens. Users revoke only their own sessions. Enforce disabled/revoked accounts. Strong MFA for admins, separate staff privileges, auditable role changes. HTTPS, secure cookies, CSRF, validated redirects.

## Gates
English code and comments; all copy in locale catalogs. .env.example and runtime ENV; no hardcoded secrets. Test permissions, grant reuse, profile updates, cross-account access, revocation, disabled users and caregiver isolation. Mock paid providers, never copy private source/data.
