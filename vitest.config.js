/// <reference types= "vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    maxConcurrency: 1,
    globals: true,

    exclude: ['**/node_modules/**'],
  },
})
