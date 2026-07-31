import type { Page } from "@playwright/test"

/**
 * Der Cookie-Banner erscheint zeitversetzt und legt ein Overlay über die Seite.
 * Für alle Tests, die nicht den Banner selbst prüfen, wird die Zustimmung vorab gesetzt.
 */
export async function acceptCookiesUpfront(page: Page) {
  await page.addInitScript(() => {
    window.localStorage.setItem("cookie-consent", "accepted")
  })
}
