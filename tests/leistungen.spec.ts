import { test, expect } from "@playwright/test";
import { acceptCookiesUpfront } from "./helpers";

const b2bSlugs = [
  "wirtschaftsdetektei",
  "lohnfortzahlungsbetrug",
  "interne-ermittlungen",
  "due-diligence",
  "versicherungsbetrug",
  "cyber-forensik",
  "wettbewerbsverstoesse",
  "asset-tracing",
];


test.beforeEach(async ({ page }) => {
  await acceptCookiesUpfront(page);
});

test.describe("Leistungsübersicht", () => {
  test("listet alle B2B-Leistungen und verlinkt sie", async ({ page }) => {
    await page.goto("/leistungen");

    await expect(page.locator("h1")).toContainText("Ermittlungsleistungen für Unternehmen");

    for (const slug of b2bSlugs) {
      await expect(page.locator(`a[href="/leistungen/${slug}"]`).first()).toBeVisible();
    }

    // B2C bleibt als Nebenlinie erreichbar, ohne die B2B-Positionierung zu verwässern
    await expect(page.locator('a[href="/leistungen/privatpersonen"]').first()).toBeVisible();
  });
});

test.describe("Leistungs-Detailseiten", () => {
  for (const slug of b2bSlugs) {
    test(`${slug}: eindeutige Metadaten, Canonical und Service-Schema`, async ({ page }) => {
      const response = await page.goto(`/leistungen/${slug}`);
      expect(response?.status()).toBe(200);

      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`/leistungen/${slug}$`),
      );

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute("content");
      expect(description?.length ?? 0).toBeGreaterThan(80);

      const nodes = (await page.locator('script[type="application/ld+json"]').allTextContents())
        .map((raw) => JSON.parse(raw))
        .flatMap((entry) => entry["@graph"] ?? [entry]);

      const service = nodes.find((node: { "@type"?: string }) => node["@type"] === "Service");
      const faq = nodes.find((node: { "@type"?: string }) => node["@type"] === "FAQPage");
      const breadcrumb = nodes.find(
        (node: { "@type"?: string }) => node["@type"] === "BreadcrumbList",
      );

      expect(service).toBeTruthy();
      expect(faq?.mainEntity?.length ?? 0).toBeGreaterThanOrEqual(3);
      expect(breadcrumb?.itemListElement?.length).toBe(3);
    });
  }

  test("bietet auf jeder Detailseite einen Weg ins Formular", async ({ page }) => {
    await page.goto("/leistungen/versicherungsbetrug");

    await page.getByRole("link", { name: /Fall schildern/i }).first().click();
    await expect(page).toHaveURL(/\/#contact$/);

    const form = page.locator("#contact form");
    await expect(form).toBeVisible();
    await expect(form.getByLabel(/Ansprechpartner/)).toBeVisible();
  });

  test("verlinkt verwandte Leistungen untereinander", async ({ page }) => {
    await page.goto("/leistungen/due-diligence");

    const related = page.locator('a[href^="/leistungen/"]:below(:text("Verwandte Leistungen"))');
    expect(await related.count()).toBeGreaterThanOrEqual(3);
  });

  test("nimmt alle Leistungsseiten in die Sitemap auf", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text();

    expect(sitemap).toContain("/leistungen</loc>");
    for (const slug of [...b2bSlugs, "privatpersonen"]) {
      expect(sitemap).toContain(`/leistungen/${slug}</loc>`);
    }
  });
});
