import { test, expect } from "@playwright/test";

test.describe("AI Features", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display AI workflow section on landing page", async ({ page }) => {
    // AI content now lives in AboutSection: "AI as Tool, Not Gimmick"
    await page.locator("#about").scrollIntoViewIfNeeded();
    await expect(page.locator("text=AI as Tool, Not Gimmick")).toBeVisible();
    await expect(page.locator("text=AI dipakai buat ngejar efisiensi")).toBeVisible();
    // Demo button lives in PremiumLanding -> AIEstimatorDemo
    await expect(page.locator('button:has-text("Estimasi dengan AI")').first()).toBeVisible();
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
    // AIEstimatorDemo is in the landing main content, not a dedicated "AI workflow" id
    const demoButton = page.locator('button:has-text("Estimasi dengan AI")').first();
    await demoButton.scrollIntoViewIfNeeded();
    await expect(demoButton).toBeVisible();
    await expect(demoButton).toBeEnabled();
    await demoButton.click();
    await expect(demoButton).toBeVisible();
  });
});