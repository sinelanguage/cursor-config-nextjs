/**
 * Storybook Preview Configuration Template
 * This is a template file for configuring Storybook v8 preview settings.
 * Copy this to your project's .storybook/preview.ts and adjust as needed.
 * @see https://storybook.js.org/docs/react/configure/overview
 */
// @ts-nocheck - Template file, module availability depends on project dependencies
import type { Preview } from '@storybook/react'
import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // Accessibility testing with axe
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    // Test coverage
    test: {
      collectCoverage: true,
    },
    // Background options
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
      ],
    },
  },
  // Global decorators
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
}

export default preview
