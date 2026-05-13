import { test, expect } from '@playwright/test'

test.describe('Dark/Light Mode Theme Toggle Verification', () => {
  test('should toggle dark and light classes on html root element when theme switch is clicked', async ({ page }) => {
    await page.goto('/')

    const themeToggleBtn = page.locator('button[aria-label="Toggle dark mode"]')
    await expect(themeToggleBtn).toBeVisible()

    // By default, ThemeProvider sets defaultTheme="light" on initial load
    await expect(page.locator('html')).toHaveClass(/light/)

    // Click toggle to switch to dark mode
    await themeToggleBtn.click()
    await expect(page.locator('html')).toHaveClass(/dark/)

    // Click toggle again to switch back to light mode
    await themeToggleBtn.click()
    await expect(page.locator('html')).toHaveClass(/light/)
  })
})
