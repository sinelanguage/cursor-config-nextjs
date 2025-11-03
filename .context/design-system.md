# Design System Documentation

## Overview

This document outlines design system principles, token hierarchy, component patterns, and implementation standards for scalable, accessible UI component libraries.

## Design Token Hierarchy

### Token Structure

```typescript
// Design tokens organized by category
// Order: Basic values → Semantic tokens → Component tokens

interface DesignTokens {
  color: ColorTokens
  spacing: SpacingTokens
  typography: TypographyTokens
  shadows: ShadowTokens
  borders: BorderTokens
  breakpoints: BreakpointTokens
  animations: AnimationTokens
}
```

### Color System

**Base Colors** - Raw color values:

```typescript
export const colors = {
  // Primary palette
  blue50: '#EFF6FF',
  blue100: '#DBEAFE',
  blue500: '#3B82F6',
  blue600: '#2563EB',
  blue700: '#1D4ED8',
  
  // Neutral palette
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray900: '#111827',
  
  // Semantic palette
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
} as const
```

**Semantic Colors** - Purpose-based tokens:

```typescript
export const semanticColors = {
  // Interactive states
  interactive: {
    default: colors.blue600,
    hover: colors.blue700,
    active: colors.blue500,
    disabled: colors.gray400,
  },
  
  // Surface colors
  surface: {
    primary: colors.gray50,
    secondary: colors.white,
    tertiary: colors.gray100,
  },
  
  // Text colors
  text: {
    primary: colors.gray900,
    secondary: colors.gray600,
    disabled: colors.gray400,
  },
  
  // Status colors
  status: {
    success: colors.success,
    error: colors.error,
    warning: colors.warning,
  },
} as const
```

### Spacing System

8-point grid system:

```typescript
export const spacing = {
  xs: '4px',    // 0.5 units
  sm: '8px',    // 1 unit
  md: '16px',   // 2 units
  lg: '24px',   // 3 units
  xl: '32px',   // 4 units
  '2xl': '48px',  // 6 units
  '3xl': '64px', // 8 units
} as const
```

Usage: Prefer spacing tokens over arbitrary values.

### Typography Scale

```typescript
export const typography = {
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
} as const
```

### Responsive Breakpoints

```typescript
export const breakpoints = {
  sm: '640px',   // Small devices
  md: '768px',   // Tablets
  lg: '1024px',  // Desktops
  xl: '1280px',  // Large desktops
  '2xl': '1536px', // Extra large
} as const

// Usage with media queries
export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
} as const
```

### Shadow System

```typescript
export const shadows = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
} as const
```

## Component API Conventions

### Component Structure

```typescript
// Component.tsx
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'base-styles',
          `button-${variant}`,
          `button-${size}`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

**Conventions:**

- Always use `forwardRef` for components that can be focused
- Extend appropriate HTML element props
- Use `displayName` for better debugging
- Support `className` for composition
- Use `cn()` utility for conditional classes

### Variant Pattern

```typescript
// Define variants with type safety
const buttonVariants = {
  variant: {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ghost: 'bg-transparent text-gray-900 hover:bg-gray-100',
  },
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
} as const
```

### Compound Components

For flexible component APIs:

```typescript
// Card.Card.tsx
const CardContext = createContext<{ variant?: string }>({})

interface CardProps {
  children: React.ReactNode
  variant?: 'outlined' | 'elevated'
}

export const Card = ({ children, variant }: CardProps) => {
  return (
    <CardContext.Provider value={{ variant }}>
      <div className={cn('card-base', `card-${variant}`)}>
        {children}
      </div>
    </CardContext.Provider>
  )
}

// Card.Header.tsx
export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="card-header">{children}</div>
}

// Usage
<Card variant="elevated">
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
```

## Theming Approach

### Theme System

```typescript
// theme.ts
export interface Theme {
  colors: typeof semanticColors
  spacing: typeof spacing
  typography: typeof typography
  shadows: typeof shadows
}

export const lightTheme: Theme = {
  colors: semanticColors,
  spacing,
  typography,
  shadows,
}

export const darkTheme: Theme = {
  colors: {
    ...semanticColors,
    surface: {
      primary: '#1F2937', // Dark mode variants
      secondary: '#111827',
      tertiary: '#374151',
    },
    // ... override other color tokens
  },
  spacing,
  typography,
  shadows,
}
```

### CSS-in-JS or CSS Variables

**CSS Variables Approach** (Recommended for performance):

```css
:root {
  --color-primary: #3B82F6;
  --color-primary-hover: #2563EB;
  --spacing-md: 16px;
  /* ... */
}

[data-theme="dark"] {
  --color-primary: #60A5FA;
  /* ... dark theme overrides */
}
```

Usage:

```typescript
className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
```

## Animation Standards

### Duration Scale

```typescript
export const durations = {
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const // milliseconds

export const easing = {
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const
```

### Animation Guidelines

- **Micro-interactions**: 150-200ms (hover, click feedback)
- **Page transitions**: 200-300ms
- **Content transitions**: 300-500ms
- **Prefer `transform` and `opacity`** for performance (GPU accelerated)
- Use `will-change` sparingly
- Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Component Patterns

### 1. Controlled vs Uncontrolled

Prefer controlled components for consistency:

```typescript
// Controlled
<input value={value} onChange={(e) => setValue(e.target.value)} />

// Uncontrolled (only when truly needed)
<input defaultValue={initialValue} ref={inputRef} />
```

### 2. Polymorphic Components

Support multiple element types:

```typescript
type PolymorphicProps<E extends React.ElementType> = {
  as?: E
  children: React.ReactNode
}

type Props<E extends React.ElementType> = PolymorphicProps<E> & 
  Omit<React.ComponentPropsWithoutRef<E>, keyof PolymorphicProps<E>>

export function Text<E extends React.ElementType = 'span'>({
  as,
  children,
  ...props
}: Props<E>) {
  const Component = as || 'span'
  return <Component {...props}>{children}</Component>
}

// Usage: <Text as="h1">Title</Text>
```

### 3. Render Props Pattern

For flexible component logic:

```typescript
interface DataFetcherProps<T> {
  url: string
  children: (props: { data: T | null; loading: boolean; error: Error | null }) => React.ReactNode
}

export function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
  const { data, loading, error } = useFetch<T>(url)
  return <>{children({ data, loading, error })}</>
}
```

### 4. Slot Pattern

For flexible content placement:

```typescript
interface SlotProps {
  before?: React.ReactNode
  children: React.ReactNode
  after?: React.ReactNode
}

export const Slot = ({ before, children, after }: SlotProps) => (
  <>
    {before}
    {children}
    {after}
  </>
)
```

## ShadCN Component Integration

### Overview

ShadCN UI uses a **copy-paste approach** (non buy-in way) where components are copied directly into your codebase. This means you own the code and can customize it without being locked into a package dependency.

### Initial Setup

**1. Initialize ShadCN CLI**:

```bash
npx shadcn@latest init
```

This interactive setup:

- Creates `components.json` configuration file
- Sets up the component directory structure
- Installs required utilities (`class-variance-authority`, `clsx`, `tailwind-merge`)
- Configures Tailwind CSS paths

**2. Configure `components.json`**:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/utils"
  }
}
```

### Adding Components

**Via CLI** (Recommended):

```bash
# Add single component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button dialog dropdown-menu

# Add component with specific style
npx shadcn@latest add button --style=new-york
```

**Manual Installation**:

1. Copy component code from [shadcn/ui](https://ui.shadcn.com/)
2. Place in `src/components/ui/` directory
3. Install required Radix UI primitives manually if needed
4. Ensure all imports are correct

### Component File Structure

After adding components, structure looks like:

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx          # ShadCN Button component
│   │   ├── dialog.tsx          # ShadCN Dialog component
│   │   ├── dropdown-menu.tsx      # ShadCN Dropdown Menu
│   │   └── ...
│   └── ...
├── lib/
│   └── utils.ts                # cn() utility function
└── ...
```

### Component Usage

**Basic Usage**:

```typescript
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

function MyComponent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <p>Dialog content</p>
      </DialogContent>
    </Dialog>
  )
}
```

**With Variants**:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function MyComponent() {
  return (
    <>
      <Button variant="default">Default</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </>
  )
}
```

### Customizing Components

**After copying, components are fully customizable**:

1. **Modify Variants**:

```typescript
// components/ui/button.tsx
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        // Add your custom variant
        custom: 'bg-purple-600 text-white hover:bg-purple-700',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        // Add your custom size
        xl: 'h-14 rounded-lg px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
```

2. **Extend Component Props**:

```typescript
// components/ui/button.tsx
import { forwardRef } from 'react'
import { ButtonProps } from './types'

export interface CustomButtonProps extends ButtonProps {
  isLoading?: boolean
  icon?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ isLoading, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Spinner />}
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    )
  }
)
```

3. **Compose with Your Components**:

```typescript
// components/ProductCard.tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardHeader>
        <h3>{product.name}</h3>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
        <Button>Add to Cart</Button>
      </CardContent>
    </Card>
  )
}
```

### Utility Functions

**`cn()` utility** (class name merger):

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage:

```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className // from props
)} />
```

### Type Safety

ShadCN components are fully typed with TypeScript:

```typescript
import type { ButtonProps } from '@/components/ui/button'

// Variant props are type-safe
const props: ButtonProps = {
  variant: 'primary', // ✅ Type-safe
  size: 'lg',         // ✅ Type-safe
  // variant: 'invalid' // ❌ Type error
}
```

### Component Dependencies

ShadCN components depend on Radix UI primitives:

- Components automatically install required Radix UI packages
- You can use Radix UI primitives directly if needed
- ShadCN components wrap Radix UI with Tailwind styling

**Example - Using Radix UI directly**:

```typescript
import * as Dialog from '@radix-ui/react-dialog'

// Use Radix UI directly for custom implementations
<Dialog.Root>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      Custom styled dialog
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

### Best Practices

1. **Review Before Committing**: Always review copied components before committing
2. **Customize After Copying**: Modify components to match your design system
3. **Type Safety**: Keep TypeScript types intact when customizing
4. **Accessibility**: ShadCN components inherit Radix UI accessibility - don't break it
5. **Composition**: Build complex UIs by composing simple components
6. **Testing**: Test customized components thoroughly, especially accessibility

### Updating Components

When ShadCN releases updates:

1. Compare your customized version with the new version
2. Manually merge changes if needed
3. Test thoroughly after updates
4. Update Radix UI dependencies if required

### Component Examples

**Dialog with Form**:

```typescript
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function UserDialog() {
  const [open, setOpen] = useState(false)
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>
        <form>
          <Input placeholder="Name" />
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
```

**Combined Components**:

```typescript
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'

function FilterBar() {
  return (
    <div className="flex gap-2">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="electronics">Electronics</SelectItem>
        </SelectContent>
      </Select>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">More Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```

## Radix UI Primitive Patterns

### Overview

Radix UI provides unstyled, accessible component primitives that ShadCN components are built upon. You can use Radix UI primitives directly when you need custom implementations or when ShadCN doesn't have a component you need.

### Core Principles

1. **Unstyled**: Radix UI provides no styling - you add your own
2. **Accessible**: Built-in ARIA attributes, keyboard navigation, focus management
3. **Composable**: Combine primitives to build complex components
4. **Type-Safe**: Full TypeScript support with excellent types
5. **Controlled & Uncontrolled**: Support both patterns

### Common Patterns

#### Dialog Pattern

```typescript
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'

function CustomDialog() {
  const [open, setOpen] = useState(false)
  
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="btn-primary">Open Dialog</button>
      </Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'bg-white rounded-lg shadow-lg p-6',
            'w-[90vw] max-w-md'
          )}
        >
          <Dialog.Title className="text-xl font-bold mb-2">
            Dialog Title
          </Dialog.Title>
          <Dialog.Description className="text-gray-600 mb-4">
            Dialog description text
          </Dialog.Description>
          
          <div className="flex justify-end gap-2">
            <Dialog.Close asChild>
              <button className="btn-secondary">Cancel</button>
            </Dialog.Close>
            <button className="btn-primary">Confirm</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

#### Dropdown Menu Pattern

```typescript
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '@/lib/utils'

function CustomDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="btn-primary">Options</button>
      </DropdownMenu.Trigger>
      
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn(
            'min-w-[200px] bg-white rounded-md shadow-lg',
            'p-1 border border-gray-200'
          )}
          sideOffset={5}
        >
          <DropdownMenu.Item
            className={cn(
              'px-3 py-2 rounded-sm cursor-pointer',
              'hover:bg-gray-100 focus:bg-gray-100'
            )}
          >
            Edit
          </DropdownMenu.Item>
          
          <DropdownMenu.Item
            className={cn(
              'px-3 py-2 rounded-sm cursor-pointer',
              'hover:bg-gray-100 focus:bg-gray-100'
            )}
          >
            Delete
          </DropdownMenu.Item>
          
          <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
          
          <DropdownMenu.Item
            className={cn(
              'px-3 py-2 rounded-sm cursor-pointer',
              'hover:bg-gray-100 focus:bg-gray-100'
            )}
          >
            Settings
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
```

#### Select Pattern

```typescript
import * as Select from '@radix-ui/react-select'
import { cn } from '@/lib/utils'

function CustomSelect() {
  return (
    <Select.Root>
      <Select.Trigger
        className={cn(
          'flex items-center justify-between',
          'px-3 py-2 border border-gray-300 rounded-md',
          'bg-white hover:border-gray-400 focus:outline-none'
        )}
      >
        <Select.Value placeholder="Select an option" />
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      
      <Select.Portal>
        <Select.Content
          className={cn(
            'bg-white rounded-md shadow-lg border border-gray-200',
            'overflow-hidden'
          )}
        >
          <Select.Viewport className="p-1">
            <Select.Item
              value="option1"
              className={cn(
                'px-3 py-2 rounded-sm cursor-pointer',
                'hover:bg-gray-100 focus:bg-gray-100'
              )}
            >
              <Select.ItemText>Option 1</Select.ItemText>
            </Select.Item>
            
            <Select.Item
              value="option2"
              className={cn(
                'px-3 py-2 rounded-sm cursor-pointer',
                'hover:bg-gray-100 focus:bg-gray-100'
              )}
            >
              <Select.ItemText>Option 2</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
```

#### Tabs Pattern

```typescript
import * as Tabs from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

function CustomTabs() {
  return (
    <Tabs.Root defaultValue="tab1" className="w-full">
      <Tabs.List
        className={cn(
          'flex border-b border-gray-200',
          'space-x-1'
        )}
      >
        <Tabs.Trigger
          value="tab1"
          className={cn(
            'px-4 py-2 border-b-2 border-transparent',
            'hover:border-gray-300 data-[state=active]:border-blue-500',
            'data-[state=active]:text-blue-600'
          )}
        >
          Tab 1
        </Tabs.Trigger>
        
        <Tabs.Trigger
          value="tab2"
          className={cn(
            'px-4 py-2 border-b-2 border-transparent',
            'hover:border-gray-300 data-[state=active]:border-blue-500',
            'data-[state=active]:text-blue-600'
          )}
        >
          Tab 2
        </Tabs.Trigger>
      </Tabs.List>
      
      <Tabs.Content value="tab1" className="p-4">
        Content for Tab 1
      </Tabs.Content>
      
      <Tabs.Content value="tab2" className="p-4">
        Content for Tab 2
      </Tabs.Content>
    </Tabs.Root>
  )
}
```

### Data Attributes Pattern

Radix UI uses data attributes for state management:

```typescript
// Common data attributes
'data-[state=open]'    // When component is open
'data-[state=closed]'  // When component is closed
'data-[state=checked]' // For checkboxes, switches
'data-[state=unchecked]'
'data-[state=active]'   // For tabs, active state
'data-[disabled]'      // When disabled
'data-[side=top]'      // For positioning (top, bottom, left, right)
```

**Styling with data attributes**:

```typescript
import { cn } from '@/lib/utils'

<Dialog.Trigger
  className={cn(
    'base-styles',
    'data-[state=open]:bg-blue-600', // Active state
    'data-[disabled]:opacity-50'     // Disabled state
  )}
/>
```

### Composing with ShadCN

You can mix Radix UI primitives with ShadCN components:

```typescript
import { Button } from '@/components/ui/button'
import * as Dialog from '@radix-ui/react-dialog'

function HybridComponent() {
  return (
    <Dialog.Root>
      {/* Use ShadCN Button as trigger */}
      <Dialog.Trigger asChild>
        <Button>Open</Button>
      </Dialog.Trigger>
      
      {/* Use Radix UI for custom dialog content */}
      <Dialog.Portal>
        <Dialog.Overlay className="custom-overlay" />
        <Dialog.Content className="custom-content">
          {/* Custom implementation */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

### Accessibility Features

Radix UI primitives include:

1. **ARIA Attributes**: Automatically added (`aria-expanded`, `aria-checked`, etc.)
2. **Keyboard Navigation**: Full keyboard support
3. **Focus Management**: Proper focus trapping and restoration
4. **Screen Reader Support**: Proper roles and announcements
5. **Portal Rendering**: Content rendered in portals for proper z-index

**Example - Focus Management**:

```typescript
// Radix UI automatically handles focus trap
<Dialog.Content>
  {/* First focusable element receives focus automatically */}
  <input autoFocus />
  {/* Focus is trapped within dialog */}
  {/* ESC key closes dialog and returns focus to trigger */}
</Dialog.Content>
```

### Type Safety

Radix UI primitives are fully typed:

```typescript
import type * as Dialog from '@radix-ui/react-dialog'

// Type-safe props
const dialogProps: Dialog.DialogProps = {
  open: true,
  onOpenChange: (open) => console.log(open),
  modal: true,
}

// Type-safe event handlers
const handleOpenChange = (open: boolean) => {
  // open is typed as boolean
}
```

### Best Practices

1. **Use `asChild` prop**: When you want to use your own element as the trigger
2. **Style with data attributes**: Use Radix UI's data attributes for state-based styling
3. **Portal for overlays**: Use Portal for modals, dropdowns, etc. to avoid z-index issues
4. **Compose primitives**: Build complex components by composing simple primitives
5. **Maintain accessibility**: Don't remove ARIA attributes or break keyboard navigation
6. **Type safety**: Use TypeScript types exported from Radix UI packages

### When to Use Radix UI vs ShadCN

**Use Radix UI directly when**:

- You need a component that ShadCN doesn't provide
- You want complete control over styling
- You're building a custom design system component
- You need to compose primitives in a unique way

**Use ShadCN when**:

- You want pre-styled components that match your design system
- You need quick component integration
- You want components that follow common patterns
- You want to customize existing components

## Accessibility Standards

### ARIA Patterns

```typescript
// Button should have clear accessible name
<button aria-label="Close dialog">×</button>

// Modal should have proper focus trap and ARIA attributes
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Title</h2>
  {/* content */}
</div>

// Toggle button with proper state
<button
  aria-pressed={isOpen}
  aria-expanded={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  Menu
</button>
```

### Semantic HTML

Always use appropriate HTML elements:

- `<button>` for actions
- `<nav>` for navigation
- `<main>` for main content
- `<article>` for articles/posts
- `<section>` for distinct sections
- `<header>`, `<footer>` for page structure

## Documentation Requirements

### Storybook Stories

Every component needs stories documenting:

- Default state
- All variants
- Loading/error states
- Interaction examples
- Accessibility testing

```typescript
// Button.stories.tsx
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
  },
}

export const Default = { args: { children: 'Click me' } }
export const Primary = { args: { variant: 'primary', children: 'Primary' } }
export const Secondary = { args: { variant: 'secondary', children: 'Secondary' } }
```

## Performance Considerations

### Code Splitting

Split large component libraries:

```typescript
// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'))
```

### Tree Shaking

Export individual components for better tree shaking:

```typescript
// ❌ Bad: Barrel export with default export
export { default as Button } from './Button'

// ✅ Good: Named exports
export { Button } from './Button'
export type { ButtonProps } from './Button'
```

### Bundle Size

Keep component bundles small:

- Avoid importing entire icon libraries (use tree-shakeable imports)
- Use CSS-in-JS runtime sparingly (prefer CSS Modules or CSS Variables)
- Extract constants to avoid bundling inline objects

## Testing Standards

### Visual Testing

Use Chromatic or similar for visual regression:

```typescript
export const VisualRegression = {
  render: (args) => <Button {...args} />,
  parameters: {
    chromatic: { delay: 500 },
  },
}
```

### Interaction Testing

Test user interactions in Storybook:

```typescript
import { expect, userEvent, within } from '@storybook/test'

export const Interaction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')
    
    await userEvent.click(button)
    expect(button).toBeDisabled()
  },
}
```

### Unit Testing

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('Button calls onClick handler', async () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click</Button>)
  
  const button = screen.getByRole('button')
  await userEvent.click(button)
  
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```
