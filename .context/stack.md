# Technology Stack

## Core Framework & Runtime

### React 18+

**Version**: `^18.3.0`

Features used:

- Concurrent features (useTransition, useDeferredValue)
- Server Components (when applicable)
- Suspense for data fetching
- Automatic batching

**Installation**:

```bash
npm install react@^18.3.0 react-dom@^18.3.0
```

### TypeScript 5.5+

**Version**: `^5.5.0`

Configuration: Strict mode enabled

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "strict": true,
    "jsx": "react-jsx"
  }
}
```

**Key features**:

- Template literal types
- Branded types
- Discriminated unions
- Conditional types
- Top-level await

## Build Tools

### Vite 5+

**Version**: `^5.0.0`

Highlights:

- Lightning-fast HMR
- Optimized production builds
- Plugin ecosystem
- Native ES modules

**Key Plugins**:

```bash
npm install -D @vitejs/plugin-react
npm install -D @originjs/vite-plugin-federation
```

### Module Federation

**Plugin**: `@originjs/vite-plugin-federation`
**Version**: `^2.8.4`

Supports both v1 and v2 patterns:

- Singleton sharing
- Remote and host applications
- Type-safe federated modules

## Package Management

### npm Workspaces

**Version**: npm 9+

Workspace structure:

```json
{
  "name": "monorepo",
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

Scripts:

```json
{
  "scripts": {
    "dev": "npm run dev --workspace=apps/host",
    "build": "npm run build --workspaces"
  }
}
```

## UI Libraries

### Base Component Library

**Tailwind CSS**

- Version: `^3.4.0`
- Utility-first CSS framework
- JIT mode for performance
- Custom design tokens integration

**Alternative**: Styled Components, Emotion, or CSS Modules

### Design System Components

**Storybook**

- Version: `^8.0.0`
- Component documentation
- Visual testing
- Interaction testing

**Chromatic**

- Visual regression testing
- Automatic diffs
- PR integration

### Headless UI Primitives

**Radix UI**

- Version: `^1.0.0` (latest)
- Unstyled, accessible component primitives
- Full keyboard navigation and screen reader support
- Built-in focus management and ARIA attributes

**Installation**:

```bash
# Install individual primitives as needed
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-select
npm install @radix-ui/react-tabs
npm install @radix-ui/react-toast
# ... and other primitives as required
```

**Common Radix UI Primitives**:

- `@radix-ui/react-dialog` - Modal dialogs
- `@radix-ui/react-dropdown-menu` - Dropdown menus
- `@radix-ui/react-select` - Select components
- `@radix-ui/react-tabs` - Tab navigation
- `@radix-ui/react-toast` - Toast notifications
- `@radix-ui/react-accordion` - Accordion components
- `@radix-ui/react-popover` - Popover components
- `@radix-ui/react-tooltip` - Tooltip components
- `@radix-ui/react-checkbox` - Checkbox inputs
- `@radix-ui/react-radio-group` - Radio button groups
- `@radix-ui/react-switch` - Toggle switches
- `@radix-ui/react-slider` - Slider controls

**Key Features**:

- Zero runtime styling (you provide the styles)
- Fully accessible (WCAG 2.2 Level AA compliant)
- Uncontrolled and controlled component support
- TypeScript-first with excellent type definitions
- Supports composition and customization

### Component Library (Copy-Paste Approach)

**ShadCN UI**

- **Not installed as a package** - Components are copied into your codebase
- Built on top of Radix UI primitives
- Fully customizable after copying
- TypeScript-first with excellent type safety
- Uses Tailwind CSS for styling

**Installation & Setup**:

```bash
# Initialize ShadCN CLI (one-time setup)
npx shadcn@latest init

# This creates:
# - components.json configuration file
# - Sets up required utilities (cn, class-variance-authority, etc.)
```

**Required Dependencies** (installed automatically):

```bash
# Core utilities (installed by ShadCN CLI)
npm install class-variance-authority clsx tailwind-merge

# Radix UI primitives (installed as components are added)
# See Radix UI section above
```

**Adding Components**:

```bash
# Add individual components via CLI
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add select

# Add multiple components at once
npx shadcn@latest add button dialog dropdown-menu
```

**Component Location**:
Components are copied to `src/components/ui/` by default (configurable in `components.json`)

**Key Philosophy**:

- **Non buy-in approach**: You own the code, not dependent on a package
- **Fully customizable**: Modify components directly after copying
- **Type-safe**: Full TypeScript support with proper types
- **Composable**: Build complex UIs from simple primitives
- **Accessible**: Built on Radix UI, inherits accessibility features

**Relationship with Radix UI**:

- ShadCN components are built on Radix UI primitives
- Radix UI provides the unstyled, accessible foundation
- ShadCN adds Tailwind CSS styling and component composition
- You can use Radix UI directly or through ShadCN components

## Testing Stack

### Vitest

**Version**: `^2.0.0`

Fast unit testing:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### Testing Library

**Versions**:

- `@testing-library/react`: `^16.0.0`
- `@testing-library/jest-dom`: `^6.0.0`
- `@testing-library/user-event`: `^15.0.0`

### Playwright

**Version**: `^1.40.0`

E2E testing:

```bash
npm install -D @playwright/test
```

### Test Coverage

**@vitest/coverage-v8**

- Istanbul instrumentation
- Coverage thresholds
- HTML reports

## Linting & Formatting

### ESLint

**Version**: `^9.0.0`
**Config**: Flat config

Plugins:

```bash
npm install -D \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import
```

### Prettier

**Version**: `^3.3.0`

Configuration:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### TypeScript ESLint

**Rules**:

- `@typescript-eslint/no-explicit-any`: error
- `@typescript-eslint/no-unused-vars`: error
- `@typescript-eslint/explicit-function-return-type`: warn

## Security Tools

### Snyk

**Version**: `^1.1292.0`

Commands:

```bash
# Auth
snyk auth

# Scan code
snyk code scan

# Scan dependencies
snyk test

# Monitor project
snyk monitor
```

### npm audit

Built-in vulnerability scanning:

```bash
npm audit
npm audit fix
```

## Accessibility Tools

### axe-core

**Version**: `^4.9.0`

Integration:

```bash
npm install -D @axe-core/react jest-axe
```

Testing:

```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

test('should have no accessibility violations', async () => {
  const { container } = render(<Component />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### Pa11y CI

**Version**: `^3.0.0`

Accessibility linting in CI/CD:

```bash
npm install -D pa11y-ci
```

## CI/CD Platforms

### GitHub Actions

Example workflow:

```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build
```

### GitLab CI

Configuration:

```yaml
stages:
  - test
  - build

test:
  stage: test
  script:
    - npm ci
    - npm run lint
    - npm run test

build:
  stage: build
  script:
    - npm run build
```

## State Management

### Context API

Built-in React state for:

- Theme
- Authentication
- User preferences

### Zustand (Optional)

**Version**: `^5.0.0`

Simple state management:

```bash
npm install zustand
```

### React Query (Optional)

**Version**: `^5.0.0`

Data fetching:

```bash
npm install @tanstack/react-query
```

## Type Definitions

### @types/*

Common type definitions:

```bash
npm install -D @types/react @types/react-dom @types/node
```

## Development Tools

### VS Code Extensions

Recommended:

- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)
- TypeScript and JavaScript Language Features
- Error Lens (usernamehw.errorlens)
- Thunder Client (rangav.vscode-thunder-client)

### Node Version

**Node**: `20.x` or `22.x`
**npm**: `9.x` or `10.x`

Use `.nvmrc`:

```
20
```

## Build Targets

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

Babel targets (via Vite):

```json
{
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Safari versions",
    "last 2 Edge versions"
  ]
}
```

### Modern JavaScript

ES2022 features:

- Top-level await
- Private class fields
- Optional chaining
- Nullish coalescing
- Logical assignment

## Bundle Analysis

### vite-bundle-visualizer

**Version**: `^0.12.0`

Usage:

```bash
npm install -D vite-bundle-visualizer
```

Configure in `vite.config.ts`:

```typescript
import { visualizer } from 'vite-bundle-visualizer'

export default defineConfig({
  plugins: [
    visualizer({ open: true })
  ]
})
```

## Performance Monitoring

### Web Vitals

Track in production:

```bash
npm install web-vitals
```

### Lighthouse CI

Automated auditing:

```bash
npm install -D @lhci/cli
```

## Documentation

### Storybook Docs

Storybook addons:

```bash
npm install -D \
  @storybook/addon-docs \
  @storybook/addon-controls \
  @storybook/addon-actions \
  @storybook/addon-interactions
```

### TypeDoc (Optional)

TypeScript documentation generator:

```bash
npm install -D typedoc
```

## Version Control

### Git Hooks

**Husky**
Version: `^9.0.0`

```bash
npm install -D husky
npx husky init
```

**lint-staged**
Version: `^15.0.0`

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## Project Dependencies

### Core Dependencies

```bash
npm install \
  react@^18.3.0 \
  react-dom@^18.3.0
```

### UI Component Dependencies

**ShadCN Utilities** (required for ShadCN components):

```bash
npm install \
  class-variance-authority \
  clsx \
  tailwind-merge
```

**Radix UI Primitives** (install as needed for components):

```bash
# Install Radix UI primitives as components are added
# Example: when adding a dialog component
npm install @radix-ui/react-dialog

# Common primitives (install as needed)
npm install @radix-ui/react-dropdown-menu \
  @radix-ui/react-select \
  @radix-ui/react-tabs \
  @radix-ui/react-accordion \
  @radix-ui/react-popover \
  @radix-ui/react-tooltip
```

**Note**: Radix UI packages are installed automatically when adding ShadCN components via CLI.

### Development Dependencies

```bash
npm install -D \
  typescript@^5.5.0 \
  vite@^5.0.0 \
  @vitejs/plugin-react \
  @types/react \
  @types/react-dom \
  @types/node \
  vitest@^2.0.0 \
  @testing-library/react@^16.0.0 \
  @playwright/test@^1.40.0
```

## Environment Setup

### .env Files

```bash
# .env.development
VITE_API_URL=http://localhost:3000/api
VITE_ENABLE_DEV_TOOLS=true

# .env.production
VITE_API_URL=https://api.production.com
VITE_ENABLE_DEV_TOOLS=false
```

### Development Server

Vite dev server:

- Port: 3000
- HMR: Enabled
- Open browser: true

```bash
npm run dev
```

## Complete package.json Template

```json
{
  "name": "frontend-app",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "@storybook/react": "^8.0.0",
    "@testing-library/react": "^16.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.0.0",
    "@vitest/coverage-v8": "^2.0.0",
    "@vitest/ui": "^2.0.0",
    "eslint": "^9.0.0",
    "husky": "^9.0.0",
    "prettier": "^3.3.0",
    "typescript": "^5.5.0",
    "vite": "^5.0.0",
    "vitest": "^2.0.0"
  }
}
```
