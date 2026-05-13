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
  },
  projects: [
    {
      name: 'iPhone 17',
      use: {
        ...devices['iPhone 15'], // Uses standard latest iOS emulation preset as base
        viewport: { width: 402, height: 874 },
      },
    },
    {
      name: 'iPhone 17 Pro',
      use: {
        ...devices['iPhone 15 Pro'],
        viewport: { width: 402, height: 874 },
      },
    },
    {
      name: 'iPhone 17 Pro Max',
      use: {
        ...devices['iPhone 15 Pro Max'],
        viewport: { width: 440, height: 956 },
      },
    },
    {
      name: 'Samsung Galaxy S25',
      use: {
        ...devices['Pixel 7'], // Uses Android preset as base
        viewport: { width: 360, height: 780 },
      },
    },
    {
      name: 'Samsung Galaxy S25 Ultra',
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
