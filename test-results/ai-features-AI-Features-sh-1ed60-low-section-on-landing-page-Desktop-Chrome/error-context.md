# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ai-features.spec.ts >> AI Features >> should display AI workflow section on landing page
- Location: e2e/ai-features.spec.ts:8:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("AI Features", () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto("/");
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  6  |   });
  7  | 
  8  |   test("should display AI workflow section on landing page", async ({ page }) => {
  9  |     // Scroll to AI workflow section
  10 |     await page.locator("text=AI workflow").scrollIntoViewIfNeeded();
  11 |     await expect(page.locator("text=AI dipakai buat bantu jualan")).toBeVisible();
  12 |     await expect(page.locator("text=Demo AI Estimator")).toBeVisible();
  13 |     await expect(page.locator("text=Estimasi dengan AI")).toBeVisible();
  14 |   });
  15 | 
  16 |   test("should have AI estimate button on consultation page", async ({ page }) => {
  17 |     await page.goto("/consultation");
  18 |     await page.fill('textarea[name="message"]', "Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.");
  19 |     await page.click('button[role="combobox"]:has-text("Pilih jenis project")');
  20 |     await page.click('div[role="option"]:has-text("E-Commerce")');
  21 |     
  22 |     // Consultation page uses "Dapatkan Estimasi AI"
  23 |     await expect(page.locator('button:has-text("Dapatkan Estimasi AI")')).toBeEnabled();
  24 |   });
  25 | 
  26 |   test("should have clickable AI estimate demo button on landing page", async ({ page }) => {
  27 |     // Test the AI estimator demo button on the landing page
  28 |     await page.locator("text=AI workflow").scrollIntoViewIfNeeded();
  29 |     await expect(page.locator('button:has-text("Estimasi dengan AI")')).toBeEnabled();
  30 |     await page.click('button:has-text("Estimasi dengan AI")');
  31 |     // Demo button is clickable (no loading state in demo)
  32 |     await expect(page.locator('button:has-text("Estimasi dengan AI")')).toBeVisible();
  33 |   });
  34 | });
```