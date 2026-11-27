---
name: sabanovin-sms
description: Integrate SabaNovin SMS sending, delivery polling and safe notification billing in Python/Django.
---

# SabaNovin SMS / صبانوین

## Setup
Configure SABANOVIN_API_KEY, SABANOVIN_GATEWAY and SABANOVIN_TIMEOUT in settings, local .env and Hamravesh runtime ENV. Do not hardcode sender or credentials. Validate recipient and sender permissions. Use opt-out/consent rules appropriate to message category.

## Adapter
The following contract was observed in an existing working integration, not independently verified against current provider documentation. Confirm it against the account's developer documentation before production:
- POST https://api.sabanovin.com/v1/{API_KEY}/sms/send.json with parameters gateway, to, text.
- Check HTTP 200 and JSON status.code == 200; retain entries and provider reference_id when supplied.
- GET https://api.sabanovin.com/v1/{API_KEY}/sms/status.json for delivery polling. Confirm exact query parameter names and delivery status codes from provider documentation or verified fixtures; never guess them.
- Return a stable application result such as success, response, error, error_code. Missing config or invalid recipient must fail without network traffic.
Keep credentials in server-side settings; redact path URLs, query text, recipients and provider payloads from logs. Use explicit timeouts and TLS. Do not assume an ambiguous timeout means no send.

## Delivery and billing
Persist message attempt, provider reference, local correlation ID and delivery state. Poll pending attempts with bounded batches, backoff and terminal status handling; stop repeated polling on credential errors. Make status transitions idempotent and prevent out-of-order regressions. Authenticate webhook if the provider supports an authenticated contract; otherwise use authenticated polling as authoritative. For paid reminders, reserve/debit/refund through a transaction-safe ledger; refund only on a verified eligible failure and at most once. Keep provider routing explicit: customer reminders here, system OTP via Kavenegar if project policy requires it.

## Tests
Use mocked HTTP fixtures for successful send, rejection, non-JSON, timeout, duplicate/unknown/out-of-order delivery, polling limits and exactly-once refunds. Never send actual SMS in unit/CI tests. Check credentials are absent in test environment.
Provider's current official documentation was not available during drafting; require verification before deployment.
Related skills: kavenegar-sms, python-testing, environment-secrets, secure-coding.
