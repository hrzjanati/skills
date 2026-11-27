---
name: secure-coding
description: Implement secure application code and review authentication, authorization, data handling and dependencies.
---

# secure-coding

## Workflow and rules

Threat-model assets and trust boundaries. Enforce object-level permissions, tenant isolation, CSRF, safe ORM queries, contextual escaping, rate limits and secure cookies. Validate uploaded content and size; private storage by default for sensitive files. Restrict outbound URLs and protect against SSRF. Authenticate webhooks and make payment writes atomic/idempotent. Mask personal data and secrets in logs. Use HTTPS and least privilege. Review against OWASP ASVS: https://owasp.org/www-project-application-security-verification-standard/ . Add regression tests.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.
