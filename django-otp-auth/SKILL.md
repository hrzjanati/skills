---
name: django-otp-auth
description: Implement secure SMS OTP login and registration in Django with Kavenegar, replay prevention, rate limits and isolated tests.
---

# Secure OTP authentication

## Flow
1. Normalize mobile number and validate server-side; rate limit by number, IP and session/device as appropriate. Return generic responses to prevent account enumeration.
2. Generate six digits with secrets.randbelow(1000000) and zero padding, never random. Store challenge UUID, purpose, identity and session binding, expiry, resend time, attempts, consumed_at and keyed HMAC verifier (dedicated OTP_HMAC_KEY in environment). Never store or log raw OTP. Use constant-time comparison, domain separation and key rotation. Separate challenge table from User.
3. Send via kavenegar-sms approved template. Default expiry 300 seconds, resend cooldown 60 seconds, five failed attempts, temporary lockout 1800 seconds. Enforce limits across resend and parallel requests; avoid indefinite account-lock abuse, add global spend limits. Redact provider failures; do not blindly retry ambiguous send timeout.
4. Verify atomically under transaction/row lock or equivalent. Check purpose, identity, session, expiry, lockout and consumed state; increment failure counts atomically and commit failure state. Consume successful challenge once. Resend invalidates prior challenge without resetting abuse budget. Shared rate-limit storage across replicas; fail safely if unavailable.
5. Existing user: resolve exactly one active verified login identity, Django login with explicit configured backend and session rotation. New user: issue short-lived single-use registration grant bound to verified mobile and session. Never trust POST phone or hidden input as proof. Consume grant in registration transaction; do not silently log into another account on conflict. Optional Shahkar uses separate verification. Sensitive actions require distinct purpose.
6. CSRF, HTTPS, secure cookies, safe redirects, session revocation. JWT only when needed with short access and revocable/rotating refresh. SMS OTP is vulnerable to SIM swap; privileged/high-risk users require stronger MFA.

## Environment
OTP_HMAC_KEY, OTP_EXPIRY_SECONDS=300, OTP_RESEND_SECONDS=60, OTP_MAX_ATTEMPTS=5, OTP_LOCKOUT_SECONDS=1800, KAVENEGAR_API_KEY, KAVENEGAR_OTP_TEMPLATE. Ignored local .env and Hamravesh runtime ENV; no secret defaults. All copy via locale catalogs.

## Tests
Mock SMS and identity providers. Test valid/new account, expired/invalid code, replay, wrong session/purpose, resend, concurrent verification/failures, lockout/recovery, inactive user, direct registration POST, tampered phone, shared caregiver number, timeout, throttling, CSRF, redaction. Use PostgreSQL for concurrency. Tests in accounts/tests/. Fail CI on unexpected outbound requests.
