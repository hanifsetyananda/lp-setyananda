import { describe, it, expect } from 'vitest'
import { execSync } from 'child_process'

describe('Build Verification Check', () => {
  it('should successfully run bun run build without compilation errors', () => {
    expect(() => {
      execSync('bun run build', { stdio: 'ignore' })
    }).not.toThrow()
  }, 60000) // Generous 60s timeout for TypeScript compilation and Vite bundling
})
