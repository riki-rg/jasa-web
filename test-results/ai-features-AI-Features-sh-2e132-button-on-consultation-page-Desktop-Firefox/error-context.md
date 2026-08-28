# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ai-features.spec.ts >> AI Features >> should have AI estimate button on consultation page
- Location: e2e/ai-features.spec.ts:16:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[role="combobox"]:has-text("Pilih jenis project")')
    - locator resolved to <button dir="ltr" type="button" role="combobox" data-state="closed" data-placeholder="" aria-required="true" aria-expanded="false" aria-autocomplete="none" class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
  - generic [ref=f1e4]:
    - generic [ref=f1e6]:
      - generic [ref=f1e7]:
        - heading "Konsultasi Gratis" [level=3] [ref=f1e11]
        - paragraph [ref=f1e12]: Isi form di samping, kami akan balas via WhatsApp/Email dalam 1x24 jam.
      - generic [ref=f1e13]:
        - generic [ref=f1e18]:
          - paragraph [ref=f1e19]: Gratis & Tanpa Komitmen
          - paragraph [ref=f1e20]: Konsultasi 30 menit, estimasi biaya, saran teknis
        - generic [ref=f1e27]:
          - paragraph [ref=f1e28]: Estimasi AI Instan
          - paragraph [ref=f1e29]: Dapatkan estimasi biaya & timeline otomatis
        - generic [ref=f1e30]:
          - paragraph [ref=f1e31]: 📱 Balasan via WhatsApp/Email
          - paragraph [ref=f1e32]: 📋 Proposal detail dalam 1-2 hari
          - paragraph [ref=f1e33]: 🤝 Kontrak transparan, milestone jelas
          - paragraph [ref=f1e34]: 🚀 Mulai development minggu depan
    - generic [ref=f1e36]:
      - generic [ref=f1e37]:
        - heading "Form Konsultasi Project" [level=3] [ref=f1e38]
        - paragraph [ref=f1e39]: Isi detail project Anda. Semakin detail, semakin akurat estimasinya.
      - generic [ref=f1e41]:
        - generic [ref=f1e42]:
          - generic [ref=f1e43]:
            - text: Nama Lengkap *
            - textbox "Nama Lengkap *" [ref=f1e44]:
              - /placeholder: Nama Anda
          - generic [ref=f1e45]:
            - text: Email *
            - textbox "Email *" [ref=f1e46]:
              - /placeholder: email@domain.com
        - generic [ref=f1e47]:
          - generic [ref=f1e48]:
            - text: WhatsApp/Telepon
            - textbox "WhatsApp/Telepon" [ref=f1e49]:
              - /placeholder: +62 8xx-xxxx-xxxx
          - generic [ref=f1e50]:
            - text: Budget Perkiraan *
            - combobox [ref=f1e51]:
              - generic: Pilih range budget
            - combobox [ref=f1e54]
        - generic [ref=f1e55]:
          - text: Jenis Project *
          - combobox [ref=f1e56]:
            - generic: Pilih jenis project
          - combobox [ref=f1e59]
        - generic [ref=f1e60]:
          - text: Deskripsi Project & Fitur *
          - textbox "Deskripsi Project & Fitur *" [active] [ref=f1e61]:
            - /placeholder: "Jelaskan project Anda: fitur utama, target user, referensi design, deadline, dll. Contoh: 'Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan.'"
            - text: "Butuh e-commerce fashion dengan fitur: user login, keranjang, pembayaran midtrans, dashboard admin produk & pesan, wishlist, review produk. Target launch 2 bulan."
        - button "Dapatkan Estimasi AI" [disabled]
        - button "Kirim Konsultasi" [ref=f1e62]
  - generic [ref=f1e67] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=f1e68]
    - generic [ref=f1e73]:
      - button "Open issues overlay" [ref=f1e74]:
        - generic [ref=f1e75]:
          - generic [ref=f1e76]: "0"
          - generic [ref=f1e77]: "1"
        - generic [ref=f1e78]: Issue
      - button "Collapse issues badge" [ref=f1e79]
  - alert [ref=f1e82]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("AI Features", () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto("/");
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
> 19 |     await page.click('button[role="combobox"]:has-text("Pilih jenis project")');
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
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