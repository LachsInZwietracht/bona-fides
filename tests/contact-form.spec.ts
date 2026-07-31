import { test, expect, type Page } from "@playwright/test";
import { acceptCookiesUpfront } from "./helpers";


async function openForm(page: Page) {
  await acceptCookiesUpfront(page);
  await page.goto("/#contact");
  const form = page.locator("#contact form");
  await form.scrollIntoViewIfNeeded();
  return form;
}

test.describe("Anfrageformular", () => {
  test("blockiert unvollständige Anfragen mit konkreten Hinweisen", async ({ page }) => {
    const form = await openForm(page);

    await form.getByRole("button", { name: /Vertrauliche Anfrage senden/i }).click();

    await expect(form.getByText("Bitte geben Sie einen Ansprechpartner an")).toBeVisible();
    await expect(form.getByText("E-Mail ist erforderlich")).toBeVisible();
    await expect(form.getByText("Bitte wählen Sie einen Falltyp")).toBeVisible();
    await expect(form.getByText("Bitte skizzieren Sie den Sachverhalt")).toBeVisible();
    await expect(
      form.getByText("Ohne Einwilligung können wir Ihre Anfrage nicht bearbeiten"),
    ).toBeVisible();
  });

  test("verlangt eine Einwilligung, bevor gesendet wird", async ({ page }) => {
    const form = await openForm(page);
    let requestSent = false;
    page.on("request", (request) => {
      if (request.url().includes("/api/contact")) requestSent = true;
    });

    await form.getByLabel(/Ansprechpartner/).fill("Dr. Anna Wegener");
    await form.getByLabel(/^E-Mail/).fill("a.wegener@musterbau.de");
    await form.getByTestId("case-type-trigger").click();
    await page.getByRole("option", { name: /Interne Ermittlung/ }).click();
    await form.getByLabel(/Sachverhalt/).fill("Hinweis aus dem Meldesystem zu einem Einkäufer.");

    await form.getByRole("button", { name: /Vertrauliche Anfrage senden/i }).click();

    await expect(
      form.getByText("Ohne Einwilligung können wir Ihre Anfrage nicht bearbeiten"),
    ).toBeVisible();
    expect(requestSent).toBe(false);
  });

  test("übermittelt qualifizierte B2B-Angaben und bestätigt den Eingang", async ({ page }) => {
    const form = await openForm(page);

    let payload: Record<string, unknown> = {};
    await page.route("**/api/contact", async (route) => {
      payload = JSON.parse(route.request().postData() ?? "{}");
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ message: "Email sent successfully" }),
      });
    });

    await form.getByLabel(/Ansprechpartner/).fill("Dr. Anna Wegener");
    await form.getByLabel("Unternehmen").fill("Musterbau GmbH");
    await form.getByLabel(/^E-Mail/).fill("a.wegener@musterbau.de");
    await form.getByLabel("Telefon").fill("+49 221 1234567");
    await form.getByLabel("Ihre Funktion").fill("Leitung Compliance");

    await form.getByTestId("urgency-trigger").click();
    await page.getByRole("option", { name: /Sofort/ }).click();

    await form.getByTestId("case-type-trigger").click();
    await page.getByRole("option", { name: /Interne Ermittlung/ }).click();

    await form
      .getByLabel(/Sachverhalt/)
      .fill("Meldung aus dem Hinweisgebersystem zu möglichen Kick-back-Zahlungen im Einkauf.");

    await form.getByLabel(/Vertraulichkeitsvereinbarung/).check();
    await form.getByLabel(/Ich willige ein/).check();

    await form.getByRole("button", { name: /Vertrauliche Anfrage senden/i }).click();

    await expect(form.getByText(/Ihre Anfrage ist eingegangen/)).toBeVisible();

    expect(payload).toMatchObject({
      company: "Musterbau GmbH",
      role: "Leitung Compliance",
      caseType: "internal-investigation",
      urgency: "immediate",
      nda: true,
      consent: true,
    });

    // Nach Erfolg ist das Formular geleert und bereit für die nächste Anfrage
    await expect(form.getByLabel("Unternehmen")).toHaveValue("");
  });

  test("bietet bei Serverfehlern den direkten E-Mail-Weg an", async ({ page }) => {
    const form = await openForm(page);

    await page.route("**/api/contact", (route) =>
      route.fulfill({ status: 500, contentType: "application/json", body: "{}" }),
    );

    await form.getByLabel(/Ansprechpartner/).fill("Markus Feld");
    await form.getByLabel(/^E-Mail/).fill("m.feld@example.com");
    await form.getByTestId("case-type-trigger").click();
    await page.getByRole("option", { name: /Asset Tracing/ }).click();
    await form.getByLabel(/Sachverhalt/).fill("Titulierte Forderung, Vollstreckung läuft ins Leere.");
    await form.getByLabel(/Ich willige ein/).check();

    await form.getByRole("button", { name: /Vertrauliche Anfrage senden/i }).click();

    const alert = form.getByRole("alert");
    await expect(alert).toContainText("Übertragung ist fehlgeschlagen");
    await expect(alert.locator('a[href^="mailto:"]')).toBeVisible();
  });
});
