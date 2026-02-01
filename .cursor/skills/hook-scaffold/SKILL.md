---
name: hook-scaffold
description: Scaffold a custom hook with types, docs, and tests.
disable-model-invocation: true
---
# Hook Scaffold

Create a reusable hook with strict typing and tests.

## When to Use

- Use this skill when extracting reusable logic.

## Inputs

- Hook name (useX)
- Parameters and return shape
- Side effects or dependencies

## Instructions

1. Create the hook file and export a typed API.
2. Add inline documentation for usage and constraints.
3. Write tests with `renderHook` for key scenarios.

## Output

- Hook implementation and tests.
