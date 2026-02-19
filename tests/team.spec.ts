import { test, expect } from '@playwright/test';

test.describe('Team Page - Member Roster', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/team');
  });

  test('displays all current team members and not removed members', async ({ page }) => {
    // Verify current team members are visible
    await expect(page.locator('text=Fabian Radlow')).toBeVisible();
    await expect(page.locator('text=Patrick Wenk')).toBeVisible();
    await expect(page.locator('text=Moritz Brandes')).toBeVisible();
    await expect(page.locator('text=Timo')).toBeVisible();
    await expect(page.locator('text=Alex Camu')).toBeVisible();

    // Verify Franzi has been removed
    await expect(page.locator('article:has-text("Franzi")')).toHaveCount(0);
  });

  test('displays correct number of agent cards', async ({ page }) => {
    // Should show 5 team member cards
    const cards = page.locator('article');
    await expect(cards).toHaveCount(5);
  });

  test('each team member card shows role, base, and specialties', async ({ page }) => {
    // Moritz - Field Investigator
    const moritzCard = page.locator('article').filter({ hasText: 'Moritz Brandes' });
    await expect(moritzCard.locator('text=Field Investigator')).toBeVisible();
    await expect(moritzCard.locator('text=Operations Hamburg')).toBeVisible();

    // Timo - Cyber-Ermittler
    const timoCard = page.locator('article').filter({ hasText: 'Timo' });
    await expect(timoCard.locator('text=Cyber-Ermittler')).toBeVisible();
    await expect(timoCard.locator('text=Sicherheitszentrale Berlin')).toBeVisible();

    // Alex Camu - Undercover-Spezialist
    const alexCard = page.locator('article').filter({ hasText: 'Alex Camu' });
    await expect(alexCard.locator('text=Undercover-Spezialist')).toBeVisible();
    await expect(alexCard.locator('text=Außenstelle Frankfurt')).toBeVisible();
  });

  test('division filter shows correct members', async ({ page }) => {
    // Click "Feld" filter
    await page.locator('button:has-text("Feld")').click();

    // Only Moritz should be visible (field division)
    await expect(page.locator('article').filter({ hasText: 'Moritz Brandes' })).toBeVisible();
    await expect(page.locator('article')).toHaveCount(1);

    // Click "Digital" filter
    await page.locator('button:has-text("Digital")').click();

    // Fabian, Patrick, and Timo are digital
    await expect(page.locator('article')).toHaveCount(3);
    await expect(page.locator('article').filter({ hasText: 'Fabian Radlow' })).toBeVisible();
    await expect(page.locator('article').filter({ hasText: 'Patrick Wenk' })).toBeVisible();
    await expect(page.locator('article').filter({ hasText: 'Timo' })).toBeVisible();

    // Click "Undercover" filter
    await page.locator('button:has-text("Undercover")').click();

    // Only Alex Camu should be visible
    await expect(page.locator('article')).toHaveCount(1);
    await expect(page.locator('article').filter({ hasText: 'Alex Camu' })).toBeVisible();

    // Click "Alle Einheiten" to show all again
    await page.locator('button:has-text("Alle Einheiten")').click();
    await expect(page.locator('article')).toHaveCount(5);
  });

  test('agent count updates when filtering divisions', async ({ page }) => {
    // Default: all 5 agents
    await expect(page.locator('text=05 Agents sichtbar')).toBeVisible();

    // Filter to field
    await page.locator('button:has-text("Feld")').click();
    await expect(page.locator('text=01 Agents sichtbar')).toBeVisible();

    // Filter to digital
    await page.locator('button:has-text("Digital")').click();
    await expect(page.locator('text=03 Agents sichtbar')).toBeVisible();

    // Filter to undercover
    await page.locator('button:has-text("Undercover")').click();
    await expect(page.locator('text=01 Agents sichtbar')).toBeVisible();
  });

  test('annotation mode toggles notes for team members', async ({ page }) => {
    // Notes should not be visible initially
    await expect(page.locator('text=Kennt jemanden, der jemanden kennt')).not.toBeVisible();

    // Enable annotation mode
    await page.locator('button:has-text("Notizmodus")').click();

    // Notes should now be visible
    await expect(page.locator('text=Kennt jemanden, der jemanden kennt')).toBeVisible();

    // Disable annotation mode
    await page.locator('button:has-text("Notizmodus")').click();

    // Notes should be hidden again
    await expect(page.locator('text=Kennt jemanden, der jemanden kennt')).not.toBeVisible();
  });
});
