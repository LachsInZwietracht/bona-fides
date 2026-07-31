import { test, expect } from "@playwright/test";
import { acceptCookiesUpfront } from "./helpers";


test.describe("B2B-Startseite", () => {
  test.beforeEach(async ({ page }) => {
    await acceptCookiesUpfront(page);
    await page.goto("/");
  });

  test("positioniert sich in H1 und Metadaten als Wirtschaftsdetektei für Unternehmen", async ({
    page,
  }) => {
    await expect(page).toHaveTitle(/Wirtschaftsdetektei für Unternehmen/i);

    const h1 = page.locator("h1");
    await expect(h1).toHaveCount(1);
    // Claim zuerst, Keyword bleibt für die Suche in der Überschrift
    await expect(h1).toContainText("Entscheidungsgrundlage");
    await expect(h1).toContainText("Wirtschaftsdetektei für Unternehmen");

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /Unternehmen, Versicherer und Kanzleien/);
  });

  test("führt Besucher vom Hero-CTA in das Anfrageformular", async ({ page }) => {
    await page.getByRole("link", { name: /Fall vertraulich schildern/i }).first().click();

    const contact = page.locator("#contact");
    await expect(contact).toBeInViewport({ timeout: 10000 });
    await expect(contact.getByLabel(/Ansprechpartner/)).toBeVisible();
  });

  test("verlinkt jedes Käufersegment auf die passende Leistungsseite", async ({ page }) => {
    const segments = page.locator("#fuer-wen a");
    await expect(segments).toHaveCount(6);

    await page
      .locator("#fuer-wen")
      .getByRole("link", { name: /Personalleitung & HR/ })
      .click();

    await expect(page).toHaveURL(/\/leistungen\/lohnfortzahlungsbetrug$/);
    await expect(page.locator("h1")).toContainText("Lohnfortzahlungsbetrug");
  });

  test("Rechner stellt Schadenssumme und Ermittlungsaufwand gegenüber", async ({ page }) => {
    const calculator = page.locator("#rechner");
    await calculator.scrollIntoViewIfNeeded();

    const effort = calculator.getByTestId("effort-range");
    const effortBefore = await effort.textContent();

    // Fallart wechseln: Aufwandsspanne und Startwert müssen mitziehen
    await calculator.getByTestId("calc-case-trigger").click();
    await page.getByRole("option", { name: /Vorgetäuschte Arbeitsunfähigkeit/ }).click();

    await expect(effort).not.toHaveText(effortBefore ?? "");
    await expect(calculator.getByTestId("damage-value")).toContainText("9.000");

    // Höherer Schaden verschiebt das Verhältnis nach oben
    const ratioBefore = await calculator.getByTestId("calc-ratio").textContent();
    const slider = calculator.getByTestId("damage-slider").locator('[role="slider"]');
    await slider.focus();
    for (let i = 0; i < 10; i += 1) {
      await slider.press("ArrowRight");
    }
    await expect(calculator.getByTestId("calc-ratio")).not.toHaveText(ratioBefore ?? "");

    await calculator.getByRole("link", { name: /Fall prüfen lassen/i }).click();
    await expect(page.locator("#contact")).toBeInViewport({ timeout: 10000 });
  });

  test("rät bei zu kleinen Summen vom Mandat ab, statt es zu verkaufen", async ({ page }) => {
    const calculator = page.locator("#rechner");
    await calculator.scrollIntoViewIfNeeded();

    const slider = calculator.getByTestId("damage-slider").locator('[role="slider"]');
    await slider.focus();
    await slider.press("Home");

    await expect(calculator.getByTestId("calc-ratio")).toContainText("Hier lohnt erst das Gespräch");
  });

  test("macht Honorarmodelle und Kostenerstattung sichtbar", async ({ page }) => {
    const pricing = page.locator("#honorar");
    await expect(pricing.getByRole("heading", { name: "Erste Einschätzung" })).toBeVisible();
    await expect(pricing.getByRole("heading", { name: "Phasenfestpreis" })).toBeVisible();
    await expect(pricing.getByRole("heading", { name: "Tagessatz" })).toBeVisible();
    await expect(pricing).toContainText(/Kostenerstattung/);
  });

  test("liefert FAQPage-Structured-Data für die Startseite", async ({ page }) => {
    const graphs = await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsed = graphs.map((graph) => JSON.parse(graph));

    const faqPage = parsed
      .flatMap((entry) => entry["@graph"] ?? [entry])
      .find((node: { "@type"?: string }) => node["@type"] === "FAQPage");

    expect(faqPage).toBeTruthy();
    expect(faqPage.mainEntity.length).toBeGreaterThanOrEqual(8);
    expect(faqPage.mainEntity[0].acceptedAnswer.text.length).toBeGreaterThan(50);
  });

  test("rendert Fachbeiträge serverseitig, damit sie indexierbar sind", async ({ request }) => {
    const response = await request.get("/");
    const html = await response.text();

    expect(html).toContain("Erkenntnisse aus laufenden Mandaten");
    expect(html).toMatch(/href="\/blog\/[a-z0-9-]+"/);
  });
});

test.describe("Mobile Lead-Erfassung", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await acceptCookiesUpfront(page);
  });

  test("blendet die Sticky-CTA nach dem Hero ein und am Formular wieder aus", async ({ page }) => {
    await page.goto("/");

    const stickyCta = page.getByTestId("sticky-cta");
    await expect(stickyCta).toHaveClass(/translate-y-full/);

    await page.evaluate(() => window.scrollTo(0, 2000));
    await expect(stickyCta).toHaveClass(/translate-y-0/);

    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(stickyCta).toHaveClass(/translate-y-full/);
  });

  test("öffnet die Leistungen im mobilen Menü", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Menü öffnen" }).click();
    await page
      .getByRole("navigation", { name: "Mobile Navigation" })
      .getByRole("link", { name: "Due Diligence" })
      .click();

    await expect(page).toHaveURL(/\/leistungen\/due-diligence$/);
  });
});
