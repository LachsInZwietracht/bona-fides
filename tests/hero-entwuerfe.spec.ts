import { test, expect } from "@playwright/test";
import { acceptCookiesUpfront } from "./helpers";
import {
  heroDesignOrder,
  heroDesigns,
  heroOverviewToken,
  heroReviewPath,
} from "../lib/hero-designs";

/** Die bildlosen Entwürfe 04–06 – sie tragen die Aussage allein über Layout und Bewegung. */
const textDesigns = ["redaktion", "observation", "dossier"] as const;

test.beforeEach(async ({ page }) => {
  await acceptCookiesUpfront(page);
});

test.describe("Hero-Entwürfe", () => {
  test("die Vergleichsseite zeigt alle sechs Entwürfe untereinander", async ({ page }) => {
    await page.goto(heroReviewPath(heroOverviewToken));

    for (const variant of heroDesignOrder) {
      await expect(page.locator(`#${variant}`)).toBeAttached();
      await expect(
        page.getByRole("heading", { name: heroDesigns[variant].name, exact: false }),
      ).toBeAttached();
    }
  });

  for (const variant of textDesigns) {
    const design = heroDesigns[variant];

    test(`Entwurf ${design.number} trägt Aussage und beide Handlungsaufforderungen`, async ({
      page,
    }) => {
      await page.goto(heroReviewPath(design.reviewToken));

      // Die Kernaussage ist über alle Entwürfe identisch – nur das Bild ändert sich.
      const headline = page.getByRole("heading", { level: 1 });
      await expect(headline).toContainText("Verdacht ist keine");
      await expect(headline).toContainText("Entscheidungsgrundlage");

      const primary = page.getByRole("link", { name: /fall schildern/i });
      await expect(primary).toHaveAttribute("href", "/#contact");

      const secondary = page.getByRole("link", { name: /leistungen ansehen/i });
      await expect(secondary).toHaveAttribute("href", "/leistungen");
    });
  }

  test("Entwürfe bleiben für Suchmaschinen gesperrt", async ({ page }) => {
    const response = await page.goto(heroReviewPath(heroDesigns.dossier.reviewToken));

    expect(response?.headers()["x-robots-tag"]).toContain("noindex");
  });

  test("ein unbekanntes Token führt ins Leere", async ({ page }) => {
    const response = await page.goto("/entwuerfe/kein-gueltiges-token");

    expect(response?.status()).toBe(404);
  });
});
