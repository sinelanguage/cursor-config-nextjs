---
name: release-checklist
description: Generate a pre-release checklist and changelog steps.
disable-model-invocation: true
---
# Release Checklist

Prepare a release checklist that matches this repo's workflow.

## When to Use

- Use this skill before tagging a release.

## Inputs

- Version number (SemVer)
- Release scope (major, minor, patch)

## Instructions

1. Confirm tests, lint, and build pass.
2. Ensure changelog is updated and formatted.
3. Verify version references and tags.
4. List any deployment or publish steps.

## Output

- A checklist of pre-release actions.
