import { test, expect } from '@playwright/test'

test.describe('Dark/Light Mode Theme Toggle Verification', () => {
  test('should toggle dark and light classes on html root element when theme switch is clicked', async ({ page }) => {
    await page.goto('/')

    const themeToggleBtn = page.locator('button[aria-label="Toggle dark mode"]')
    await expect(themeToggleBtn).toBeVisible()

    // By default, ThemeProvider sets defaultTheme="light" on initial load
    await expect(page.locator('html')).toHaveClass(/light/)

    // Get initial light background
    const initialLightBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)

    // Click toggle to switch to dark mode
    await themeToggleBtn.click()
    await expect(page.locator('html')).toHaveClass(/dark/)
    
    // Wait for CSS transitions to finish
    await page.waitForTimeout(500)
    
    const darkBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    
    // Verify the background color changed
    expect(darkBg).not.toBe(initialLightBg)

    // Click toggle again to switch back to light mode
    await themeToggleBtn.click()
    await expect(page.locator('html')).toHaveClass(/light/)
    
    // Wait for CSS transitions to finish
    await page.waitForTimeout(500)
    
    const lightBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
    
    // Verify it went back to a light background (different from dark mode)
    expect(lightBg).not.toBe(darkBg)
  })
})
