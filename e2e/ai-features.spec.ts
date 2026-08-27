import { test, expect } from "@playwright/test";

test.describe("AI Features", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display AI estimator demo on landing page", async ({ page }) => {
    // Scroll to AI features section
    await page.locator("text=Fitur AI Terintegrasi").scrollIntoViewIfNeeded();
    await expect(page.locator("text=Demo AI Estimator")).toBeVisible();
    await expect(page.locator("text=Estimasi dengan AI")).toBeVisible();
  });

  test("should have AI estimate button on consultation page", async ({ page }) => {
    await page.goto("/consultation");
    await page.fill('textarea[name="message"]', "Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.");
    await page.click('button[role="combobox"]:has-text("Pilih jenis project")');
    await page.click('div[role="option"]:has-text("E-Commerce")');
    
    await expect(page.locator('button:has-text("Dapatkan Estimasi AI")')).toBeEnabled();
  });

  test("should show loading state when clicking AI estimate", async ({ page }) => {
    await page.goto("/consultation");
    await page.fill('textarea[name="message"]', "Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.");
    await page.click('button[role="combobox"]:has-text("Pilih jenis project")');
    await page.click('div[role="option"]:has-text("E-Commerce")');
    
    await page.click('button:has-text("Dapatkan Estimasi AI")');
    // Should show loading state
    await expect(page.locator("text=AI Menganalisis")).toBeVisible({ timeout: 5000 });
  });
});