---
name: next-server-actions
description: Build typed Server Actions for forms and mutations.
disable-model-invocation: true
---
# Next.js Server Actions

Create Server Actions for form submissions and mutations.

## When to Use

- Mutations co-located with App Router pages
- Forms requiring server-side validation

## Inputs

- Form fields and validation rules
- Redirect or revalidation behavior

## Instructions

1. Create a Server Action in the route or `actions` module.
2. Validate inputs on the server.
3. Return typed results and handle errors.
4. Use revalidation (`revalidatePath`/`revalidateTag`) if needed.

## Output

- Server Action with validation and typed result handling.
