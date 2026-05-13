import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
    alias: {
      '#components': path.resolve(__dirname, './src/components'),
      '#lib': path.resolve(__dirname, './src/lib'),
      '#hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
})
