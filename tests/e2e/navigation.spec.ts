import { test, expect } from '@playwright/test'

test.describe('Anchor Navigation Verification', () => {
  test('should smoothly navigate to respective target sections when links are clicked', async ({ page, isMobile }) => {
    await page.goto('/')

    if (isMobile) {
      // Toggle mobile menu
      const menuBtn = page.locator('button[aria-label="Toggle menu"]')
      await expect(menuBtn).toBeVisible()
      await menuBtn.click()

      // Click Layanan link in mobile menu
      const serviceLink = page.locator('.md\\:hidden a[href="#service"]')
      await expect(serviceLink).toBeVisible()
      await serviceLink.click()
    } else {
      // Click Layanan link in desktop header
      const serviceLink = page.locator('header nav a[href="#service"]').first()
      await expect(serviceLink).toBeVisible()
      await serviceLink.click()
    }

    // Verify URL contains target hash
    await expect(page).toHaveURL(/.*#service/)

    // Verify section is visible in viewport
    const serviceSection = page.locator('section#service')
    await expect(serviceSection).toBeVisible()
  })
})
