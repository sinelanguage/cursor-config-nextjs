# Code Conventions

## File and Folder Naming

### Files

**Components**: PascalCase with component name matching file name

```
Button.tsx
UserProfile.tsx
NavigationMenu.tsx
```

**Utilities**: camelCase

```
formatDate.ts
debounce.ts
apiClient.ts
```

**Hooks**: camelCase with `use` prefix

```
useAuth.ts
useLocalStorage.ts
useDebounce.ts
```

**Types**: camelCase for files, PascalCase for types

```
types.ts (file)
types/
  user.types.ts
  api.types.ts

// Types inside file
export interface User { ... }
export type ApiResponse<T> = { ... }
```

**Constants**: camelCase for config, UPPER_SNAKE_CASE for true constants

```
apiConfig.ts (file)
export const API_CONFIG = { ... } // const values

constants.ts (file)
export const MAX_RETRY_ATTEMPTS = 3
export const API_TIMEOUT = 5000
```

**Tests**: Match source file name with `.test` or `.spec`

```
Button.test.tsx
Button.spec.tsx
useAuth.test.ts
```

**Stories**: Same name as component with `.stories`

```
Button.stories.tsx
```

### Folders

**Flat structure** preferred for small collections:

```
components/
  Button.tsx
  Card.tsx
  Modal.tsx
```

**Grouped structure** for large collections:

```
components/
  Button/
    Button.tsx
    Button.test.tsx
    Button.stories.tsx
    index.ts
  Card/
    Card.tsx
    Card.test.tsx
    Card.stories.tsx
    index.ts
```

**Feature-based organization** for large apps:

```
features/
  auth/
    components/
    hooks/
    services/
    types/
  dashboard/
    components/
    hooks/
    services/
    types/
```

### ShadCN Component Organization

**ShadCN components** (copied from shadcn/ui) should be placed in a dedicated `ui/` directory:

```
src/
  components/
    ui/                    # ShadCN components (copy-paste)
      button.tsx
      dialog.tsx
      dropdown-menu.tsx
      select.tsx
      card.tsx
      input.tsx
      ...
    Button.tsx             # Your custom components
    Card.tsx
    ProductCard.tsx
```

**Naming Conventions for ShadCN Components**:

- Use **kebab-case** file names (matches ShadCN CLI output)
- Examples: `button.tsx`, `dropdown-menu.tsx`, `select-trigger.tsx`
- Keep original component names as exported from ShadCN

**Component Structure**:

```
components/
  ui/                      # ShadCN components (do not modify structure)
    button.tsx             # ShadCN Button
    dialog.tsx             # ShadCN Dialog
    dropdown-menu.tsx     # ShadCN Dropdown Menu
  Button.tsx              # Your custom Button (if extending ShadCN)
  ProductCard.tsx         # Your feature components
```

**Best Practices**:

1. **Keep ShadCN components in `ui/`**: Don't mix ShadCN components with your custom components
2. **Customize in place**: After copying, modify ShadCN components directly in `ui/` folder
3. **Create wrapper components**: If you need significant customization, create wrapper components outside `ui/`
4. **Maintain imports**: Keep ShadCN component imports from `@/components/ui/*`
5. **Version control**: ShadCN components are part of your codebase - commit them normally

**Example - Customizing ShadCN Components**:

```
components/
  ui/
    button.tsx              # ShadCN Button (customized after copy)
  CustomButton.tsx          # Wrapper component if needed
```

**Utility Functions**:

```
lib/
  utils.ts                  # cn() utility function (from ShadCN setup)
```

**Import Pattern**:

```typescript
// Import ShadCN components from ui/
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

// Import your custom components
import { ProductCard } from '@/components/ProductCard'
import { CustomButton } from '@/components/CustomButton'
```

## Import Organization

### Import Order

1. External dependencies (React, libraries)
2. Internal absolute imports (@/components, @/utils)
3. Relative imports
4. Type-only imports (use `import type`)
5. Separate groups with blank lines

```typescript
// 1. External
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

// 2. Internal absolute
import { Button } from '@/components/Button'
import { Modal } from '@/components/Modal'
import { useAuth } from '@/hooks/useAuth'

// 3. Relative
import { UserCard } from './UserCard'
import { ProductList } from './ProductList'

// 4. Type-only imports
import type { User } from './types'
import type { ComponentProps } from 'react'
```

### Import Grouping Rules

- **React** always comes first
- Group external libraries together
- Group internal imports by path depth
- Sort imports alphabetically within groups
- Separate groups with blank lines

## Component Structure Template

```typescript
// 1. Imports (organized by convention)
import React, { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { ComponentProps } from 'react'

// 2. Type definitions
export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

// 3. Component implementation
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    className,
    disabled,
    children,
    ...props 
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'base-button-styles',
          `button-${variant}`,
          `button-${size}`,
          isLoading && 'loading',
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && <Spinner className="mr-2" />}
        {children}
      </button>
    )
  }
)

// 4. Display name
Button.displayName = 'Button'

// 5. Exports (if additional exports)
export type { ButtonProps }
```

### Component File Organization

For complex components with multiple files:

```
Button/
├── Button.tsx           # Main component
├── Button.test.tsx      # Tests
├── Button.stories.tsx   # Storybook
├── Button.types.ts      # Type definitions (if complex)
├── Button.utils.ts      # Component-specific utilities
└── index.ts             # Re-exports
```

**index.ts**:

```typescript
export { Button } from './Button'
export type { ButtonProps } from './Button.types'
```

## Testing File Organization

### Test Structure

```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  describe('when rendered', () => {
    it('renders children correctly', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button')).toHaveTextContent('Click me')
    })
  })

  describe('when clicked', () => {
    it('calls onClick handler', async () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>Click</Button>)
      
      await userEvent.click(screen.getByRole('button'))
      
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('when disabled', () => {
    it('does not call onClick handler', async () => {
      const handleClick = jest.fn()
      render(<Button disabled onClick={handleClick}>Click</Button>)
      
      await userEvent.click(screen.getByRole('button'))
      
      expect(handleClick).not.toHaveBeenCalled()
    })
  })
})
```

### Test Organization

Organize tests by behavior, not by implementation:

❌ **Bad**: Testing implementation details

```typescript
it('sets state to true', () => {
  // Tests internal state
})
```

✅ **Good**: Testing user-visible behavior

```typescript
it('shows loading spinner when data is being fetched', () => {
  // Tests what user sees
})
```

### Test File Naming

- `*.test.ts` - Unit tests
- `*.test.tsx` - Component tests
- `*.spec.ts` - Alternative naming convention
- `*.e2e.ts` - E2E tests (Playwright)
- `*.visual.test.ts` - Visual regression tests

## Storybook Story Patterns

### Story Structure

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// Variant stories
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

// State stories
export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}

// Interaction test
export const WithClick: Story = {
  args: {
    children: 'Click me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    await expect(button).toBeInTheDocument()
  },
}
```

### Story Patterns

**Documentation**:

```typescript
export const Documentation = {
  args: { ... },
  parameters: {
    docs: {
      description: {
        story: 'Description of when to use this component',
      },
    },
  },
}
```

**Play Function** (Interactive):

```typescript
export const Interactive: Story = {
  args: { ... },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Simulate user interactions
  },
}
```

**Accessibility Testing**:

```typescript
export const Accessibility: Story = {
  args: { ... },
  play: async ({ canvasElement }) => {
    const { container } = render(<Button {...args} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  },
}
```

## Type Definitions

### Type Naming

```typescript
// Interfaces for object shapes
export interface User {
  id: string
  name: string
  email: string
}

// Types for unions, intersections
export type Status = 'idle' | 'loading' | 'success' | 'error'
export type UserWithStatus = User & { status: Status }

// Generic types
export type ApiResponse<T> = {
  data: T
  status: number
}

// Branded types
export type UserId = string & { readonly brand: unique symbol }
export type Email = string & { readonly brand: unique symbol }

// Utility types (document when used)
export type UserWithoutId = Omit<User, 'id'>
export type UserUpdates = Partial<User>
```

### Type Organization

```typescript
// types/user.types.ts
export interface User {
  id: string
  name: string
  email: string
}

export interface UserWithRole extends User {
  role: 'admin' | 'user' | 'guest'
}

export type UserStatus = 'active' | 'inactive' | 'pending'

// Usage
export interface UserProps {
  user: User
  status: UserStatus
}
```

## Constants

### Constant Organization

```typescript
// constants/api.constants.ts
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  USERS: '/api/users',
  PRODUCTS: '/api/products',
} as const

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const

// Usage with type safety
type ApiEndpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS]
```

## Utility Functions

### Pure Functions

```typescript
// utils/format.ts
export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}
```

### Validation Functions

```typescript
// utils/validation.ts
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
```

## Comments and Documentation

### Code Comments

```typescript
// Good: Explains "why", not "what"
// Using debounce to avoid excessive API calls during typing
const debouncedSearch = debounce(handleSearch, 300)

// Bad: States the obvious
// Set count to 0
let count = 0
```

### JSDoc Comments

```typescript
/**
 * Formats a date value to a user-friendly string
 * @param date - The date to format (Date object or ISO string)
 * @returns A formatted date string (e.g., "January 15, 2025")
 * @example
 * formatDate(new Date()) // "January 15, 2025"
 */
export function formatDate(date: Date | string): string { ... }

/**
 * Button component with multiple variants and sizes
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">Click me</Button>
 * ```
 */
export interface ButtonProps { ... }
```

### TODO Comments

```typescript
// TODO: Refactor to use React Query for data fetching (by @username, yyyy-mm-dd)
// FIXME: Memory leak in chart component (by @username, yyyy-mm-dd)
// NOTE: Temporary workaround until backend API is updated (by @username, yyyy-mm-dd)
```

## CSS and Styling

### CSS Modules

```typescript
// Button.module.css
.button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
}

.primary {
  background-color: var(--color-primary);
}

.secondary {
  background-color: var(--color-secondary);
}

// Button.tsx
import styles from './Button.module.css'
```

### Tailwind CSS

```typescript
// Use clsx/cn for conditional classes
import { cn } from '@/utils/cn'

<button className={cn(
  'px-4 py-2 rounded',
  variant === 'primary' && 'bg-blue-600',
  size === 'lg' && 'text-lg',
  className
)} />
```

## Performance Optimization

### Lazy Loading

```typescript
// Component-level lazy loading
const HeavyChart = lazy(() => import('./HeavyChart'))

// Usage with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <HeavyChart data={data} />
</Suspense>
```

### Memoization

```typescript
// Memoize expensive computations
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.date - b.date)
}, [data])

// Memoize callbacks passed to children
const handleClick = useCallback(() => {
  setCount(count + 1)
}, [count])
```

### Component Memoization

```typescript
// Memoize expensive components
export const ExpensiveComponent = React.memo(({ data }) => {
  return <ComplexVisualization data={data} />
})
```
