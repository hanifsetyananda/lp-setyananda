import { test, expect } from '@playwright/test'

test.describe('SEO & Metadata Completeness Verification', () => {
  test('should verify required title, language, meta tags, OpenGraph, and JSON-LD structured data', async ({ page }) => {
    await page.goto('/')

    // 1. Language Attribute
    await expect(page.locator('html')).toHaveAttribute('lang', 'id')

    // 2. Title Tag
    await expect(page).toHaveTitle(
      'Setyananda — Jasa Pembuatan Website & Aplikasi Profesional'
    )

    // 3. Basic SEO Meta Tags
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute(
      'content',
      /Setyananda — Jasa pembuatan website pribadi/
    )

    const metaKeywords = page.locator('meta[name="keywords"]')
    await expect(metaKeywords).toHaveAttribute('content', /setyananda/i)

    // 4. Open Graph Tags
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
      'content',
      'website'
    )
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      'content',
      /Setyananda/
    )
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      '/og-image.png'
    )

    // 5. Structured Data JSON-LD
    const jsonLdScript = page.locator('script[type="application/ld+json"]')
    await expect(jsonLdScript).toHaveCount(1)

    const jsonContent = await jsonLdScript.textContent()
    expect(jsonContent).not.toBeNull()

    const parsedJson = JSON.parse(jsonContent!)
    expect(parsedJson['@context']).toBe('https://schema.org')
    expect(parsedJson['@type']).toBe('Organization')
    expect(parsedJson.name).toBe('Setyananda')
    expect(parsedJson.sameAs).toContain(
      'https://web.facebook.com/profile.php?id=61589536477399'
    )
  })
})
