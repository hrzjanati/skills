---
name: systematic-debugging
description: Diagnose bugs from evidence before changing code.
---

# systematic-debugging

## Workflow and rules

Reproduce with a minimal safe case; inspect traceback, logs, recent diffs and configuration without exposing secrets. Form one hypothesis and test it; isolate the failing layer. Add a failing regression test, fix root cause and rerun checks. Avoid speculative unrelated changes. Reference https://github.com/obra/superpowers .

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.
