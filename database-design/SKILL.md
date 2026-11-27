---
name: database-design
description: Design relational schemas, safe migrations and transactional data operations.
---

# database-design

## Workflow and rules

Prefer PostgreSQL for production Django. Model ownership, constraints, unique keys and indexes around real access patterns. Use atomic writes, row locks only where required and idempotent retries. Separate schema changes from backfills; test migrations on representative PostgreSQL, check reversibility and lock impact. Run makemigrations --check --dry-run; backup and verify restoration before risky migrations. Avoid destructive changes without approval.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.
