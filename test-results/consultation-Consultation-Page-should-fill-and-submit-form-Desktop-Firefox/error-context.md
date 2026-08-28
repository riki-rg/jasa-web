# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: consultation.spec.ts >> Consultation Page >> should fill and submit form
- Location: e2e/consultation.spec.ts:23:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[role="combobox"]:has-text("Pilih range budget")')
    - locator resolved to <button dir="ltr" type="button" role="combobox" data-state="closed" data-placeholder="" aria-required="true" aria-expanded="false" aria-autocomplete="none" class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - heading "Konsultasi Gratis" [level=3] [ref=e11]
        - paragraph [ref=e12]: Isi form di samping, kami akan balas via WhatsApp/Email dalam 1x24 jam.
      - generic [ref=e13]:
        - generic [ref=e18]:
          - paragraph [ref=e19]: Gratis & Tanpa Komitmen
          - paragraph [ref=e20]: Konsultasi 30 menit, estimasi biaya, saran teknis
        - generic [ref=e27]:
          - paragraph [ref=e28]: Estimasi AI Instan
          - paragraph [ref=e29]: Dapatkan estimasi biaya & timeline otomatis
        - generic [ref=e30]:
          - paragraph [ref=e31]: 📱 Balasan via WhatsApp/Email
          - paragraph [ref=e32]: 📋 Proposal detail dalam 1-2 hari
          - paragraph [ref=e33]: 🤝 Kontrak transparan, milestone jelas
          - paragraph [ref=e34]: 🚀 Mulai development minggu depan
    - generic [ref=e36]:
      - generic [ref=e37]:
        - heading "Form Konsultasi Project" [level=3] [ref=e38]
        - paragraph [ref=e39]: Isi detail project Anda. Semakin detail, semakin akurat estimasinya.
      - generic [ref=e41]:
        - generic [ref=e42]:
          - generic [ref=e43]:
            - text: Nama Lengkap *
            - textbox "Nama Lengkap *" [ref=e44]:
              - /placeholder: Nama Anda
              - text: Test User
          - generic [ref=e45]:
            - text: Email *
            - textbox "Email *" [ref=e46]:
              - /placeholder: email@domain.com
              - text: test@example.com
        - generic [ref=e47]:
          - generic [ref=e48]:
            - text: WhatsApp/Telepon
            - textbox "WhatsApp/Telepon" [active] [ref=e49]:
              - /placeholder: +62 8xx-xxxx-xxxx
              - text: +62 812-3456-7890
          - generic [ref=e50]:
            - text: Budget Perkiraan *
            - combobox [ref=e51]:
              - generic: Pilih range budget
            - combobox [ref=e54]
        - generic [ref=e55]:
          - text: Jenis Project *
          - combobox [ref=e56]:
            - generic: Pilih jenis project
          - combobox [ref=e59]
        - generic [ref=e60]:
          - text: Deskripsi Project & Fitur *
          - textbox "Deskripsi Project & Fitur *" [ref=e61]:
            - /placeholder: "Jelaskan project Anda: fitur utama, target user, referensi design, deadline, dll. Contoh: 'Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.'"
        - button "Dapatkan Estimasi AI" [disabled]
        - button "Kirim Konsultasi" [ref=e62]
  - generic [ref=e67] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e68]
    - generic [ref=e73]:
      - button "Open issues overlay" [ref=e74]:
        - generic [ref=e75]:
          - generic [ref=e76]: "0"
          - generic [ref=e77]: "1"
        - generic [ref=e78]: Issue
      - button "Collapse issues badge" [ref=e79]
  - alert [ref=e82]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Consultation Page", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto("/consultation");
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
> 29 |     await page.click('button[role="combobox"]:has-text("Pilih range budget")');
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
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