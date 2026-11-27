---
name: zibal-payment
description: Integrate Zibal Iranian payment gateway with verified callbacks, idempotent settlement and isolated Django tests.
---

# Zibal payment / زیبال

## Setup
Configure ZIBAL_MERCHANT, ZIBAL_TIMEOUT, and an HTTPS callback URL from trusted settings. If an existing project uses legacy ZIBAL_MERCHNAT_CODE, support it as an explicitly documented migration alias. Do not require an unrelated API key for ordinary IPG unless the actual contract requires it. Keep all secrets out of source and frontend.
Store money as integer rial; convert integer toman to rial exactly once (multiply by 10). Reject nonpositive or invalid amounts. Derive price from server-side order, never browser input.

## Payment lifecycle
- Create a pending payment record with unique order ID, expected amount, currency, owner and provider. POST JSON to https://gateway.zibal.ir/v1/request with merchant, amount, callbackUrl and orderId; include optional fields only per documentation.
- On result 100 and valid trackId, save the track ID before redirecting to https://gateway.zibal.ir/start/{trackId}. Validate the ID and use a fixed trusted origin.
- Callback parameters such as trackId, success, status and orderId are untrusted hints. Locate the local record by stored track ID. Never credit funds from callback alone.
- POST merchant and trackId to https://gateway.zibal.ir/v1/verify on the server. Validate provider result, amount and available order/reference identifiers against the pending record. Result 100 is success; result 201 means previously verified in the existing integration: reconcile authoritative details before treating it as paid, and never credit twice. Unknown or mismatched results remain pending or enter manual review.
- Use atomic settlement with row locking and unique ledger/payment constraints. Do not hold a DB transaction open across network calls. Repeated callbacks, concurrent verification and worker retries must not double-credit. Handle timeouts as uncertain and reconcile later; do not blindly create another charge.
- Never collect card PAN/CVV/PIN in the app. Redact merchant, personal data and payment payloads. Restrict callback redirect destinations.

## Tests
Mock request/verify and test success, rejected request, forged callback, wrong amount, unknown ID, duplicate callback, concurrent settlement, already-verified response, timeout, malformed JSON and rollback. Use dedicated test DB and fake merchant; no real payment or external request in ordinary tests. Any live sandbox test requires explicit authorization and current provider sandbox instructions.

## Sources
- https://help.zibal.ir/IPG/API/ (official documentation URL; retrieval timed out during drafting, recheck before deployment)
- https://github.com/zibalco/gateway-nodejs (provider SDK)
Related skills: database-design, secure-coding, python-testing, environment-secrets.
