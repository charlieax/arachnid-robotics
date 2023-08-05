/// <reference types= "vitest" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    maxConcurrency: 1,
    globals: true,

    exclude: ['**/node_modules/**'],
  },
  plugins: [tsconfigPaths()],
})
