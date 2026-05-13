import { test, expect } from '@playwright/test'

test.describe('Responsive Layout Verification', () => {
  test('should render without horizontal overflow across all configured viewports', async ({ page }) => {
    await page.goto('/')

    // Wait for the main elements to render
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('section#home')).toBeVisible()
    await expect(page.locator('section#service')).toBeVisible()
    await expect(page.locator('section#contact')).toBeVisible()

    // Evaluate horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth
    })

    expect(hasHorizontalOverflow).toBe(false)
  })
})
