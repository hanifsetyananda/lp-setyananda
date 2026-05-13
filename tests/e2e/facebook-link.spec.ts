import { test, expect } from '@playwright/test'

test.describe('External Social Links Verification', () => {
  test('should verify Facebook link target URL and integration attributes', async ({ page }) => {
    await page.goto('/')

    const fbLink = page.locator('a[aria-label="Facebook"]').first()
    await expect(fbLink).toBeVisible()

    await expect(fbLink).toHaveAttribute(
      'href',
      'https://web.facebook.com/profile.php?id=61589536477399'
    )
    await expect(fbLink).toHaveAttribute('target', '_blank')
  })
})
