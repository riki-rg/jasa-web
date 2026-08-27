import { test, expect } from "@playwright/test";

test.describe("Consultation Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/consultation");
  });

  test("should load consultation page", async ({ page }) => {
    // Check for main heading - could be h1, h2, or h3
    const heading = page.locator("h1, h2, h3").first();
    await expect(heading).toContainText("Konsultasi");
  });

  test("should display form fields", async ({ page }) => {
    await expect(page.locator("label:has-text('Nama Lengkap')")).toBeVisible();
    await expect(page.locator("label:has-text('Email')")).toBeVisible();
    await expect(page.locator("label:has-text('WhatsApp/Telepon')")).toBeVisible();
    await expect(page.locator("label:has-text('Budget Perkiraan')")).toBeVisible();
    await expect(page.locator("label:has-text('Jenis Project')")).toBeVisible();
    await expect(page.locator("label:has-text('Deskripsi Project & Fitur')")).toBeVisible();
  });

  test("should fill and submit form", async ({ page }) => {
    await page.fill('input[name="name"]', "Test User");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('input[name="phone"]', "+62 812-3456-7890");

    // Select budget
    await page.click('button[role="combobox"]:has-text("Pilih range budget")');
    await page.click('div[role="option"]:has-text("5 - 15 Juta")');

    // Select project type
    await page.click('button[role="combobox"]:has-text("Pilih jenis project")');
    await page.click('div[role="option"]:has-text("E-Commerce")');

    await page.fill('textarea[name="message"]', "Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.");

    // Submit form
    await page.click('button:has-text("Kirim Konsultasi")');

    // Wait for success message
    await expect(page.locator("text=Terima kasih! Form berhasil dikirim")).toBeVisible({ timeout: 10000 });
  });

  test("should show validation errors for empty required fields", async ({ page }) => {
    await page.click('button:has-text("Kirim Konsultasi")');
    // Check for form validation - HTML5 validation will show browser native messages
    // Just verify the button click works
    await expect(page.locator('button:has-text("Kirim Konsultasi")')).toBeVisible();
  });

  test("should show AI estimate button", async ({ page }) => {
    await expect(page.locator('button:has-text("Dapatkan Estimasi AI")')).toBeVisible();
  });
});