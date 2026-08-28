import { test, expect } from "@playwright/test";

test.describe("AI Features", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display AI workflow section on landing page", async ({ page }) => {
    // Scroll to AI workflow section
    await page.locator("text=AI workflow").scrollIntoViewIfNeeded();
    await expect(page.locator("text=AI dipakai buat bantu jualan")).toBeVisible();
    await expect(page.locator("text=Demo AI Estimator")).toBeVisible();
    await expect(page.locator("text=Estimasi dengan AI")).toBeVisible();
  });

  test("should have AI estimate button on consultation page", async ({ page }) => {
    await page.goto("/consultation");
    await page.fill('textarea[name="message"]', "Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.");
    await page.click('button[role="combobox"]:has-text("Pilih jenis project")');
    await page.click('div[role="option"]:has-text("E-Commerce")');
    
    // Consultation page uses "Dapatkan Estimasi AI"
    await expect(page.locator('button:has-text("Dapatkan Estimasi AI")')).toBeEnabled();
  });

  test("should have clickable AI estimate demo button on landing page", async ({ page }) => {
    // Test the AI estimator demo button on the landing page
    await page.locator("text=AI workflow").scrollIntoViewIfNeeded();
    await expect(page.locator('button:has-text("Estimasi dengan AI")')).toBeEnabled();
    await page.click('button:has-text("Estimasi dengan AI")');
    // Demo button is clickable (no loading state in demo)
    await expect(page.locator('button:has-text("Estimasi dengan AI")')).toBeVisible();
  });
});