# Next.js Rendering & UI Patterns

> This document replaces the previous design-system focus with Next.js UI and rendering patterns.

## Server vs Client Components

### Default to Server Components

- Fetch data on the server
- Render stable UI without client JS
- Pass serializable props to Client Components

### Use Client Components for Interactivity

- Add `"use client"` only when needed
- Keep client-only components small
- Avoid server-only data in client code

## Layout and Route Patterns

### Layout Composition

- Use `layout.tsx` for shared UI
- Prefer nested layouts for section isolation
- Keep layout data fetching minimal

### Error and Loading States

- `loading.tsx` for suspense fallback
- `error.tsx` for segment error boundaries
- `not-found.tsx` for missing content

## Metadata & SEO

- Prefer `metadata` and `generateMetadata` in App Router
- Keep metadata close to route definitions
- Use dynamic metadata only when needed

## Forms & Mutations

- Use Server Actions for form submissions
- Validate input on the server
- Return typed results and handle errors gracefully

## Client Interactivity Patterns

- Use `useTransition` for non-urgent updates
- Use `useDeferredValue` for expensive UI rendering
- Keep client state localized

## Partial Hydration

- Combine Server Components with Client Components for interactive islands
- Avoid unnecessary `use client` on parent components
- Split interactive widgets into small client leaves
