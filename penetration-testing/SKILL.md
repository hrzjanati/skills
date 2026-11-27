---
name: penetration-testing
description: Perform authorized, non-destructive security assessment of owned applications and document remediation.
---

# penetration-testing

## Workflow and rules

Confirm explicit target scope, permitted methods, environment and test accounts before active testing. Prefer local/staging with synthetic data; no production scans without explicit permission. Start with threat model, Django check --deploy, Bandit, Semgrep, pip-audit, Gitleaks and Trivy where installed. Use passive or bounded OWASP ZAP testing only in scope. Verify authorization failures and input validation with safe test cases. Never exfiltrate data, disrupt services, persist access or expose secrets. Report evidence with redaction, severity, affected component, remediation and regression test; distinguish scanner findings from confirmed issues.

## Completion

Report what changed, checks actually performed, failures and unresolved risks. Do not claim success without evidence.
