---
name: next-isr-revalidation
description: Add ISR and on-demand revalidation to Next.js routes.
disable-model-invocation: true
---
# Next.js ISR and Revalidation

Add incremental static regeneration with explicit revalidation.

## When to Use

- Pages that can tolerate stale content
- Performance-sensitive routes

## Inputs

- Route segment
- Revalidation interval or tags

## Instructions

1. Use `revalidate` options on server fetches.
2. Add `revalidatePath` or `revalidateTag` where needed.
3. Ensure cache strategy is explicit and documented.

## Output

- ISR-enabled route with revalidation strategy.
