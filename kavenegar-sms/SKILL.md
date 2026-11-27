---
name: kavenegar-sms
description: Integrate Kavenegar SMS and OTP in Python/Django, manage approved templates, delivery status and safe tests.
---

# Kavenegar SMS / کاوه‌نگار

## Setup
- Use the official Python SDK or documented REST API. Read KAVENEGAR_API_KEY, KAVENEGAR_TIMEOUT (20 seconds suggested), optional KAVENEGAR_SENDER and configured template names from settings/env. Use placeholders in .env.example and set real values only in local .env or Hamravesh runtime ENV.
- Confirm template approval and exact token names in the provider panel before enabling OTP. Normalize Iranian mobile numbers consistently; validate before sending.
- Use VerifyLookup for OTP and approved transactional templates, Send for permitted ordinary messages, and Status for delivery checks. Do not mistake successful submission for delivery.
- REST URLs include the API key in their path: redact URLs, request/response bodies, OTP tokens and phone numbers from logs, exceptions and Sentry. Never disable TLS verification.

## Implementation
Keep a provider adapter under the owning SMS app. Preserve existing result contracts (e.g. success, response, error, error_code). Check HTTP and provider return.status; persist provider message ID and local correlation ID. Classify invalid credentials/template/recipient as non-retryable. For uncertain network outcomes, reconcile before resending; use bounded backoff, rate limiting and duplicate suppression.
Generate OTP cryptographically, store a protected verifier, enforce expiry, attempt limits, resend cooldown and single use. Avoid account enumeration. Do not log OTP. Route only intended message types to this provider; in a two-provider setup system OTP can use Kavenegar and customer reminders SabaNovin.
If delivery callbacks are supported/configured, authenticate according to the actual provider contract; otherwise poll authenticated status. Never trust unauthenticated callback claims.

## Verification
Mock SDK/HTTP. Test missing key, invalid mobile/template, success, provider error, timeout, ambiguous send, delivery transitions, expired/replayed OTP and redaction. Block external network in ordinary tests. No live SMS without explicit permission and designated test recipient.

## Sources
- https://kavenegar.com/rest.html
- https://github.com/kavenegar/kavenegar-python
- Related skills: python-testing, environment-secrets, secure-coding, sabanovin-sms.
