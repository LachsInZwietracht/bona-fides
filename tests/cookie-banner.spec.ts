import { test, expect } from '@playwright/test'

test.describe('Cookie Banner', () => {
  test('should display cookie banner on first visit', async ({ page, context }) => {
    // Clear local storage to simulate first visit
    await context.clearCookies()
    await page.goto('/')

    // Wait for the cookie banner to appear with a timeout
    const cookieBanner = page.locator('[data-testid="cookie-banner"]').first()
    await expect(cookieBanner).toBeVisible({ timeout: 5000 })

    // Check that the banner contains expected text
    await expect(page.getByText('Überwachungshinweis')).toBeVisible()
    await expect(page.getByText('Diese Ermittlung nutzt Tracking-Cookies')).toBeVisible()
  })

  test('should allow accepting cookies', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')

    // Wait for banner and click accept
    const acceptButton = page.getByRole('button', { name: /alle akzeptieren/i })
    await expect(acceptButton).toBeVisible({ timeout: 5000 })
    await acceptButton.click()

    // Banner should disappear
    await expect(page.locator('[data-testid="cookie-banner"]')).not.toBeVisible({ timeout: 3000 })

    // Reload page - banner should not appear again
    await page.reload()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('[data-testid="cookie-banner"]')).not.toBeVisible()
  })

  test('should allow declining cookies', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')

    // Wait for banner and click decline
    const declineButton = page.getByRole('button', { name: /ablehnen/i })
    await expect(declineButton).toBeVisible({ timeout: 5000 })
    await declineButton.click()

    // Banner should disappear
    await expect(page.locator('[data-testid="cookie-banner"]')).not.toBeVisible({ timeout: 3000 })

    // Reload page - banner should not appear again
    await page.reload()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('[data-testid="cookie-banner"]')).not.toBeVisible()
  })

  test('should have proper detective theme styling', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')

    // Wait for the banner and check styling elements
    const banner = page.locator('[data-testid="cookie-banner"]').first()
    await expect(banner).toBeVisible({ timeout: 5000 })

    // Check for detective themed elements (file tab specifically)
    await expect(banner.getByText('Cookie-Richtlinie').first()).toBeVisible() // File tab
    await expect(page.getByText('Überwachungshinweis')).toBeVisible() // Header
    await expect(page.getByText('Alle Akzeptieren')).toBeVisible() // Accept button
    await expect(page.getByText('Ablehnen')).toBeVisible() // Decline button

    // Check for noir-themed copy
    await expect(page.getByText('Akten werden verschlüsselt und sicher gespeichert')).toBeVisible()
  })

  test('should close banner when clicking close button', async ({ page, context }) => {
    await context.clearCookies()
    await page.goto('/')

    // Wait for banner and click close button
    const banner = page.locator('[data-testid="cookie-banner"]').first()
    await expect(banner).toBeVisible({ timeout: 5000 })
    const closeButton = banner.locator('button').filter({ has: page.locator('svg') })
    await expect(closeButton).toBeVisible({ timeout: 5000 })
    await closeButton.click()

    // Banner should disappear but no consent should be stored
    await expect(page.locator('[data-testid="cookie-banner"]')).not.toBeVisible({ timeout: 3000 })

    // Reload page - banner should appear again since no consent was given
    await page.reload()
    await page.waitForLoadState('networkidle')
    await expect(page.locator('[data-testid="cookie-banner"]')).toBeVisible({ timeout: 5000 })
  })

  test('should reopen cookie banner when clicking cookies link in footer', async ({ page, context }) => {
    // First accept cookies to hide banner
    await context.clearCookies()
    await page.goto('/')

    const acceptButton = page.getByRole('button', { name: /alle akzeptieren/i })
    await expect(acceptButton).toBeVisible({ timeout: 5000 })
    await acceptButton.click()
    await expect(page.locator('[data-testid="cookie-banner"]')).not.toBeVisible({ timeout: 3000 })

    // Now click cookies link in footer to reopen banner
    const cookiesLink = page.getByRole('button', { name: 'Cookies' })
    await expect(cookiesLink).toBeVisible()
    await cookiesLink.click()

    // Banner should reappear
    await expect(page.locator('[data-testid="cookie-banner"]')).toBeVisible({ timeout: 5000 })
    await expect(page.getByText('Überwachungshinweis')).toBeVisible()
  })
})