# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: consultation.spec.ts >> Consultation Page >> should load consultation page
- Location: e2e/consultation.spec.ts:8:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/consultation
Call log:
  - navigating to "http://localhost:3000/consultation", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Consultation Page", () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto("/consultation");
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/consultation
  6  |   });
  7  | 
  8  |   test("should load consultation page", async ({ page }) => {
  9  |     // Check for main heading - could be h1, h2, or h3
  10 |     const heading = page.locator("h1, h2, h3").first();
  11 |     await expect(heading).toContainText("Konsultasi");
  12 |   });
  13 | 
  14 |   test("should display form fields", async ({ page }) => {
  15 |     await expect(page.locator("label:has-text('Nama Lengkap')")).toBeVisible();
  16 |     await expect(page.locator("label:has-text('Email')")).toBeVisible();
  17 |     await expect(page.locator("label:has-text('WhatsApp/Telepon')")).toBeVisible();
  18 |     await expect(page.locator("label:has-text('Budget Perkiraan')")).toBeVisible();
  19 |     await expect(page.locator("label:has-text('Jenis Project')")).toBeVisible();
  20 |     await expect(page.locator("label:has-text('Deskripsi Project & Fitur')")).toBeVisible();
  21 |   });
  22 | 
  23 |   test("should fill and submit form", async ({ page }) => {
  24 |     await page.fill('input[name="name"]', "Test User");
  25 |     await page.fill('input[name="email"]', "test@example.com");
  26 |     await page.fill('input[name="phone"]', "+62 812-3456-7890");
  27 | 
  28 |     // Select budget
  29 |     await page.click('button[role="combobox"]:has-text("Pilih range budget")');
  30 |     await page.click('div[role="option"]:has-text("5 - 15 Juta")');
  31 | 
  32 |     // Select project type
  33 |     await page.click('button[role="combobox"]:has-text("Pilih jenis project")');
  34 |     await page.click('div[role="option"]:has-text("E-Commerce")');
  35 | 
  36 |     await page.fill('textarea[name="message"]', "Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.");
  37 | 
  38 |     // Submit form
  39 |     await page.click('button:has-text("Kirim Konsultasi")');
  40 | 
  41 |     // Wait for success message
  42 |     await expect(page.locator("text=Terima kasih! Form berhasil dikirim")).toBeVisible({ timeout: 10000 });
  43 |   });
  44 | 
  45 |   test("should show validation errors for empty required fields", async ({ page }) => {
  46 |     await page.click('button:has-text("Kirim Konsultasi")');
  47 |     // Check for form validation - HTML5 validation will show browser native messages
  48 |     // Just verify the button click works
  49 |     await expect(page.locator('button:has-text("Kirim Konsultasi")')).toBeVisible();
  50 |   });
  51 | 
  52 |   test("should show AI estimate button", async ({ page }) => {
  53 |     await expect(page.locator('button:has-text("Dapatkan Estimasi AI")')).toBeVisible();
  54 |   });
  55 | });
```