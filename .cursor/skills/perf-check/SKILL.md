---
name: perf-check
description: Run a quick performance review and propose optimizations.
disable-model-invocation: true
---
# Performance Check

Provide a focused performance pass for a feature or page.

## When to Use

- Use this skill when UI feels slow or before release.

## Inputs

- Target components or pages
- Known bottlenecks (if any)

## Instructions

1. Identify expensive renders or large bundles.
2. Suggest memoization or derived state fixes.
3. Recommend code splitting or lazy loading.
4. Check image and font loading strategies.

## Output

- A list of concrete performance recommendations.
