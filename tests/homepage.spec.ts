import { test, expect } from '@playwright/test';

test.describe('Bona Fides Detective Agency Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays hero section with correct branding and content', async ({ page }) => {
    // Check main heading
    await expect(page.locator('h1')).toContainText('BONA');
    await expect(page.locator('h1')).toContainText('FIDES');
    
    // Check subtitle
    await expect(page.locator('text=Detective Agency')).toBeVisible();
    
    // Check description
    await expect(page.locator('text=Professional investigation services with integrity')).toBeVisible();
    
    // Check CTA buttons are present and clickable
    await expect(page.locator('button:has-text("Free Consultation")')).toBeVisible();
    await expect(page.locator('button:has-text("View Our Services")')).toBeVisible();
    
    // Check trust indicators
    await expect(page.locator('text=Confidential')).toBeVisible();
    await expect(page.locator('text=Professional')).toBeVisible();
    await expect(page.locator('text=Results Driven')).toBeVisible();
    
    // Check case file visual element
    await expect(page.locator('text=CASE FILE #2024-001')).toBeVisible();
    await expect(page.locator('text=ACTIVE')).toBeVisible();
  });

  test('navigation header works correctly', async ({ page }) => {
    // Check logo is present and clickable
    await expect(page.locator('text=BONA FIDES').first()).toBeVisible();
    
    // Check all navigation links are present
    await expect(page.locator('nav >> text=Home')).toBeVisible();
    await expect(page.locator('nav >> text=Services')).toBeVisible();
    await expect(page.locator('nav >> text=About')).toBeVisible();
    await expect(page.locator('nav >> text=Team')).toBeVisible();
    await expect(page.locator('nav >> text=Contact Us')).toBeVisible();
    
    // Test Contact Us button functionality
    await page.locator('nav >> button:has-text("Contact Us")').click();
    await expect(page.locator('#contact')).toBeInViewport();
  });

  test('services section displays all service cards', async ({ page }) => {
    // Check section title
    await expect(page.locator('text=INVESTIGATION SERVICES')).toBeVisible();
    
    // Check all 6 service cards are present
    const services = [
      'Private Investigations',
      'Corporate Security', 
      'Insurance Claims',
      'Background Checks',
      'Surveillance Services',
      'Security Consulting'
    ];
    
    for (const service of services) {
      await expect(page.locator(`text=${service}`)).toBeVisible();
    }
    
    // Check service features are displayed
    await expect(page.locator('text=Missing Persons')).toBeVisible();
    await expect(page.locator('text=Employee Screening')).toBeVisible();
    await expect(page.locator('text=Workers Comp')).toBeVisible();
    
    // Check CTA section
    await expect(page.locator('text=NEED A CUSTOM INVESTIGATION?')).toBeVisible();
  });

  test('trust section displays metrics and credentials', async ({ page }) => {
    // Check section title
    await expect(page.locator('text=WHY CHOOSE BONA FIDES')).toBeVisible();
    
    // Check trust metrics
    await expect(page.locator('text=50+')).toBeVisible();
    await expect(page.locator('text=Years Experience')).toBeVisible();
    await expect(page.locator('text=2,500+')).toBeVisible();
    await expect(page.locator('text=Cases Solved')).toBeVisible();
    await expect(page.locator('text=98%')).toBeVisible();
    await expect(page.locator('text=Client Satisfaction')).toBeVisible();
    await expect(page.locator('text=100%')).toBeVisible();
    await expect(page.locator('text=Confidential')).toBeVisible();
    
    // Check credentials section
    await expect(page.locator('text=PROFESSIONAL CREDENTIALS')).toBeVisible();
    await expect(page.locator('text=Licensed Private Investigators')).toBeVisible();
    await expect(page.locator('text=Bonded & Insured')).toBeVisible();
    await expect(page.locator('text=Confidentiality Guaranteed')).toBeVisible();
    
    // Check guarantee statement
    await expect(page.locator('text=OUR GUARANTEE')).toBeVisible();
  });

  test('contact form validation and submission flow', async ({ page }) => {
    // Navigate to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    // Check form is visible
    await expect(page.locator('text=CONFIDENTIAL CASE INQUIRY')).toBeVisible();
    
    // Test validation - submit empty form
    await page.locator('button:has-text("Send Confidential Inquiry")').click();
    
    // Check validation messages appear
    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible();
    await expect(page.locator('text=Please enter a valid email address')).toBeVisible();
    await expect(page.locator('text=Please enter a valid phone number')).toBeVisible();
    
    // Fill out form with valid data
    await page.fill('input[id="name"]', 'John Detective');
    await page.fill('input[id="email"]', 'john@example.com');
    await page.fill('input[id="phone"]', '555-123-4567');
    
    // Select service type
    await page.locator('[data-testid="service-type-trigger"], [role="combobox"]').first().click();
    await page.locator('text=Private Investigation').click();
    
    // Select urgency
    await page.locator('[data-testid="urgency-trigger"], [role="combobox"]').last().click();
    await page.locator('text=Standard (1-2 weeks)').click();
    
    // Fill message
    await page.fill('textarea[id="message"]', 'I need help investigating a missing person case. This is a confidential matter requiring discretion.');
    
    // Submit form
    await page.locator('button:has-text("Send Confidential Inquiry")').click();
    
    // Check loading state
    await expect(page.locator('text=Sending Securely...')).toBeVisible();
    
    // Wait for success message
    await expect(page.locator('text=Message Sent Securely')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=We\'ve received your confidential inquiry')).toBeVisible();
  });

  test('mobile navigation works correctly', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that desktop nav is hidden and mobile button is visible
    await expect(page.locator('nav.hidden')).toHaveCount(0); // Desktop nav should be hidden with md:flex
    await expect(page.locator('button >> svg')).toBeVisible(); // Mobile menu button
    
    // Click mobile menu button
    await page.locator('button').filter({ has: page.locator('svg') }).first().click();
    
    // Check mobile menu items are visible
    await expect(page.locator('nav >> text=Home')).toBeVisible();
    await expect(page.locator('nav >> text=Services')).toBeVisible();
    await expect(page.locator('nav >> text=About')).toBeVisible();
    await expect(page.locator('nav >> text=Team')).toBeVisible();
    
    // Close mobile menu by clicking a link
    await page.locator('nav >> text=Home').click();
    
    // Check menu is closed (button should show menu icon again)
    await expect(page.locator('button >> svg').first()).toBeVisible();
  });

  test('footer contains all required information', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check agency info
    await expect(page.locator('footer >> text=BONA FIDES')).toBeVisible();
    await expect(page.locator('footer >> text=Licensed & Insured Since 1965')).toBeVisible();
    
    // Check services links
    await expect(page.locator('footer >> text=Private Investigations')).toBeVisible();
    await expect(page.locator('footer >> text=Corporate Security')).toBeVisible();
    
    // Check contact info
    await expect(page.locator('footer >> text=(555) 123-CASE')).toBeVisible();
    await expect(page.locator('footer >> text=info@bonafides.agency')).toBeVisible();
    await expect(page.locator('footer >> text=123 Detective St')).toBeVisible();
    
    // Check legal links
    await expect(page.locator('footer >> text=Impressum')).toBeVisible();
    await expect(page.locator('footer >> text=Datenschutz')).toBeVisible();
    
    // Check copyright
    await expect(page.locator('footer >> text=© 2024 Bona Fides Detective Agency')).toBeVisible();
  });

  test('page loads with correct styling and typography', async ({ page }) => {
    // Check that custom fonts are applied
    const heroTitle = page.locator('h1').first();
    
    // Check that page has the expected visual elements
    await expect(page.locator('[class*="font-special-elite"]')).toHaveCount({ min: 1 });
    await expect(page.locator('[class*="font-playfair"]')).toHaveCount({ min: 1 });
    await expect(page.locator('[class*="font-crimson"]')).toHaveCount({ min: 1 });
    
    // Check that color classes are applied
    await expect(page.locator('[class*="detective-blue"]')).toHaveCount({ min: 1 });
    await expect(page.locator('[class*="investigation-brown"]')).toHaveCount({ min: 1 });
    await expect(page.locator('[class*="case-file"]')).toHaveCount({ min: 1 });
  });

  test('page is accessible with keyboard navigation', async ({ page }) => {
    // Test tab navigation through interactive elements
    await page.keyboard.press('Tab'); // Should focus on first interactive element
    
    // Navigate through header links
    for (let i = 0; i < 6; i++) {
      await page.keyboard.press('Tab');
    }
    
    // Check that focused element is visible
    const focusedElement = await page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Test that Enter key works on buttons
    await page.locator('button:has-text("Free Consultation")').focus();
    await page.keyboard.press('Enter');
  });
});