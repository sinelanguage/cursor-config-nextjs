# Next.js Code Conventions

## File and Folder Naming

### App Router Files

- `page.tsx` - Route entry
- `layout.tsx` - Layout for a segment
- `loading.tsx` - Loading UI
- `error.tsx` - Error boundary
- `not-found.tsx` - 404 UI
- `route.ts` - Route Handler (API/BFF)

### Components

- **Component files**: PascalCase (e.g., `UserCard.tsx`)
- **Component folders**: PascalCase
- **Hooks**: `useX` prefix (e.g., `useAuth.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)

### Server/Client Boundaries

- Server Components are default in `app/`
- Add `"use client"` at the top only when necessary
- Keep Client Components as leaf nodes where possible

## Project Structure (Recommended)

```text
app/
├── layout.tsx
├── page.tsx
├── (marketing)/
│   └── page.tsx
├── (app)/
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── loading.tsx
│   └── settings/
│       └── page.tsx
├── api/
│   └── health/route.ts
components/
lib/
hooks/
types/
styles/
```

## Import Organization

1. External dependencies
2. Internal absolute imports (`@/`)
3. Relative imports
4. Type-only imports (`import type`)
5. Separate groups with blank lines

## TypeScript Conventions

- No `any` types
- Use `unknown` and narrow with type guards
- Use `readonly` for immutable data
- Use explicit return types for exported functions

## Testing Conventions

- `*.test.ts` / `*.test.tsx` for unit/integration
- Co-locate tests next to files or use a `tests/` folder
- Prefer Testing Library user-centric queries

## Styling Conventions

- Prefer CSS Modules or modern utility CSS
- Keep global styles in `styles/`
- Avoid runtime-heavy CSS-in-JS unless necessary
