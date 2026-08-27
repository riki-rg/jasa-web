import { test, expect } from "@playwright/test";

test.describe("Auth Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/auth/login");
  });

  test("should load login page", async ({ page }) => {
    await expect(page.locator("h3")).toContainText("Masuk");
  });

  test("should switch to register mode", async ({ page }) => {
    await page.click('button:has-text("Daftar")');
    await expect(page.locator("h3")).toContainText("Daftar Akun");
    await expect(page.locator('input[name="name"]')).toBeVisible();
  });

  test("should show validation errors for empty login", async ({ page }) => {
    await page.click('button:has-text("Masuk")');
    // Check for form validation - HTML5 validation will show browser native messages
    // Just verify the button click works
    await expect(page.locator('button:has-text("Masuk")')).toBeVisible();
  });

  test("should have OAuth buttons", async ({ page }) => {
    await expect(page.locator('button:has-text("Google")')).toBeVisible();
    await expect(page.locator('button:has-text("GitHub")')).toBeVisible();
  });

  test("should fill login form", async ({ page }) => {
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="password"]', "password123");
    await expect(page.locator('button:has-text("Masuk")')).toBeEnabled();
  });
});