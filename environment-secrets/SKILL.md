---
name: environment-secrets
description: Manage local .env files and runtime environment variables securely in Hamravesh and CI.
---

# environment-secrets

## Workflow and rules

Require local .env (untracked), committed .env.example with names and safe placeholders, .gitignore and .dockerignore excluding .env and secret variants but preserving example. Never read or print live secrets unnecessarily. Read environment variables centrally; required production secrets fail fast with variable name only, no fixed fallback passwords. Runtime environment wins over local dotenv. Parse booleans and lists explicitly; validate quoted values without silently changing valid passwords. Define corresponding names in Hamravesh Darkube runtime ENV; never bake secrets into images or frontend. Use separate credentials for dev/test/prod and rotate leaked values. See references/env.example.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.
