/**
 * Vite Configuration Template
 * This is a template file for Vite v5+ with React and Module Federation.
 * Copy this to your project root and adjust paths/settings as needed.
 * @see https://vitejs.dev/config/
 */
// @ts-nocheck - Template file, module availability depends on project dependencies
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Module Federation configuration
    federation({
      name: 'host_app', // Change to your app name
      // Module Federation v1 pattern
      remotes: {
        // Add remote modules here
        // remote_app: 'http://localhost:3001/remoteEntry.js',
      },
      // Shared dependencies
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.3.0',
          eager: false, // Lazy load by default
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.3.0',
          eager: false,
        },
        // Add other shared dependencies as needed
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@/components': resolve(__dirname, './src/components'),
      '@/hooks': resolve(__dirname, './src/hooks'),
      '@/utils': resolve(__dirname, './src/utils'),
      '@/types': resolve(__dirname, './src/types'),
      '@/services': resolve(__dirname, './src/services'),
    },
  },
  build: {
    target: 'esnext', // Modern target for better tree-shaking
    minify: 'esbuild', // Fast minification
    sourcemap: true, // Source maps for debugging
    rollupOptions: {
      output: {
        // Split chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    // For Module Federation development
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  preview: {
    port: 4173,
    cors: true,
  },
  // Optimize deps for faster startup
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})

