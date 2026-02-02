# Project-Specific Rules

This file contains rules and conventions specific to this project.

## Project Context

Customize this file for your project's specific needs:

- Business logic patterns
- Domain-specific terminology
- Project architecture decisions
- Team conventions

## Example Rules

```markdown
## App Router

- Default to Server Components in `app/`
- Use `"use client"` only when interactivity is required
- Use `loading.tsx`, `error.tsx`, and `not-found.tsx` per route segment

## API & BFF

- Use Route Handlers in `app/api/*/route.ts`
- Validate all inputs and return typed responses
- Keep secrets server-only

## Performance

- Prefer server data fetching with caching and revalidation
- Use `next/image` and `next/font` for optimization
```

## Maintenance

Update this file as project standards evolve. Reference the main `.cursorrules` for general standards and add project-specific extensions here.
