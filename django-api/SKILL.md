---
name: django-api
description: Design and test Django REST APIs with explicit contracts and access controls.
---

# django-api

## Workflow and rules

Use DRF where appropriate. Define resource routes, versioning when needed, serializers, permissions, pagination and consistent errors. Validate ownership and tenant scope on every object lookup; default deny. Document request/response contracts with OpenAPI and protect internal docs. Test anonymous, wrong-owner, valid and malformed requests. Use idempotency for retried writes and avoid exposing internal fields.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.
