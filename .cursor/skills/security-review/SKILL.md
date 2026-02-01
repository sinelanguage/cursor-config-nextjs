---
name: security-review
description: Run a lightweight security review and checklist.
disable-model-invocation: true
---
# Security Review

Perform a focused security review for frontend and config changes.

## When to Use

- Use this skill before release or after auth/data changes.

## Inputs

- Areas touched (auth, storage, API, config)
- Known risks or incidents

## Instructions

1. Check for unsafe patterns (XSS, insecure storage, secrets).
2. Review CSP and environment variable handling.
3. Ensure dependency scanning is noted (`npm audit`).
4. List any missing mitigations or follow-ups.

## Output

- A security checklist with findings and next steps.
