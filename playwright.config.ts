import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    channel: 'chromium', // Use system-installed Chromium to bypass Kali Linux dependency issues
  },
  projects: [
    {
      name: 'Phone Standard',
      use: {
        ...devices['Pixel 7'],
        viewport: { width: 412, height: 891 },
      },
    },
    {
      name: 'Desktop Standard',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Tablet Standard',
      use: {
        ...devices['iPad Mini'],
        browserName: 'chromium',
        viewport: { width: 768, height: 1024 },
      },
    },
  ],
  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
})
