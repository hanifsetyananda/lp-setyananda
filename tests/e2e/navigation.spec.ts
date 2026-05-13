import { test, expect } from '@playwright/test'

test.describe('Anchor Navigation Verification', () => {
  test('should smoothly navigate to respective target sections when links are clicked', async ({ page, isMobile }) => {
    await page.goto('/')

    const menuBtn = page.locator('button[aria-label="Toggle menu"]')
    const isMenuVisible = await menuBtn.isVisible()

    if (isMenuVisible) {
      // Toggle mobile menu
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

    // Test navigation to #contact
    if (isMenuVisible) {
      await menuBtn.click()
      await page.locator('.md\\:hidden a[href="#contact"]').click()
    } else {
      await page.locator('header nav a[href="#contact"]').first().click()
    }
    await expect(page).toHaveURL(/.*#contact/)
    await expect(page.locator('section#contact')).toBeVisible()

    // Test navigation back to #home
    if (isMenuVisible) {
      await menuBtn.click()
      await page.locator('.md\\:hidden a[href="#home"]').click()
    } else {
      await page.locator('header nav a[href="#home"]').first().click()
    }
    await expect(page).toHaveURL(/.*#home/)
    await expect(page.locator('section#home')).toBeVisible()
  })
})
