# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing-page.spec.ts >> Landing Page >> should display tech stack
- Location: e2e/landing-page.spec.ts:47:7

# Error details

```
Error: page.goto: NS_ERROR_CONNECTION_REFUSED
Call log:
  - navigating to "http://localhost:3000/", waiting until "load"

```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "Unable to connect" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e9]: localhost:3000
    - generic [ref=e10]:
      - heading "What can you do about it?" [level=3] [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]: The site could be temporarily unavailable or too busy. Try again in a few moments.
        - listitem [ref=e14]: If you are unable to load any pages, check your computer’s network connection.
        - listitem [ref=e15]: If your computer or network is protected by a firewall or proxy, make sure that Nightly is permitted to access the web.
    - button "Try Again" [ref=e18]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Landing Page", () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto("/");
     |                ^ Error: page.goto: NS_ERROR_CONNECTION_REFUSED
  6  |   });
  7  | 
  8  |   test("should load successfully", async ({ page }) => {
  9  |     await expect(page).toHaveTitle(/Jasa Web Coding/);
  10 |   });
  11 | 
  12 |   test("should display hero section", async ({ page }) => {
  13 |     await expect(page.locator("h1").first()).toContainText("Website mahal");
  14 |     await expect(page.locator("text=bukan template polos")).toBeVisible();
  15 |   });
  16 | 
  17 |   test("should have navigation links (desktop)", async ({ page }) => {
  18 |     const viewport = page.viewportSize();
  19 |     if (viewport && viewport.width < 768) {
  20 |       test.skip();
  21 |     }
  22 |     const nav = page.locator("nav");
  23 |     await expect(nav.locator("text=Layanan")).toBeVisible();
  24 |     await expect(nav.locator("text=Proses")).toBeVisible();
  25 |     await expect(nav.locator("text=Teknologi")).toBeVisible();
  26 |     await expect(nav.locator("text=Kontak")).toBeVisible();
  27 |   });
  28 | 
  29 |   test("should display services section", async ({ page }) => {
  30 |     await expect(page.locator("#services")).toBeVisible();
  31 |     await expect(page.locator("#services").locator("text=Pilih hasil, bukan jargon")).toBeVisible();
  32 |     await expect(page.locator("#services").locator("text=Website Custom")).toBeVisible();
  33 |     await expect(page.locator("#services").locator("text=E-Commerce")).toBeVisible();
  34 |     await expect(page.locator("#services").locator("text=AI Integration")).toBeVisible();
  35 |     await expect(page.locator("#services").locator("text=SaaS & Dashboard")).toBeVisible();
  36 |   });
  37 | 
  38 |   test("should display process section", async ({ page }) => {
  39 |     await expect(page.locator("#process")).toBeVisible();
  40 |     await expect(page.locator("#process").locator("text=Scroll pelan. Project juga begitu.")).toBeVisible();
  41 |     await expect(page.locator("#process").locator("text=Konsultasi Gratis")).toBeVisible();
  42 |     await expect(page.locator("#process").locator("text=Proposal & Kontrak")).toBeVisible();
  43 |     await expect(page.locator("#process").locator("text=Development")).toBeVisible();
  44 |     await expect(page.locator("#process").locator("text=Deploy & Handover")).toBeVisible();
  45 |   });
  46 | 
  47 |   test("should display tech stack", async ({ page }) => {
  48 |     await expect(page.locator("#tech")).toBeVisible();
  49 |     await expect(page.locator("#tech").locator("text=Modern stack, tanpa over-engineering.")).toBeVisible();
  50 |     await expect(page.locator("#tech").locator("text=Next.js 15").first()).toBeVisible();
  51 |     await expect(page.locator("#tech").locator("text=TypeScript").first()).toBeVisible();
  52 |     await expect(page.locator("#tech").locator("text=Tailwind CSS").first()).toBeVisible();
  53 |     await expect(page.locator("#tech").locator("text=Prisma ORM").first()).toBeVisible();
  54 |   });
  55 | 
  56 |   test("should have CTA button to consultation", async ({ page }) => {
  57 |     const ctaButton = page.locator('a[href="/consultation"]').first();
  58 |     await expect(ctaButton).toBeVisible();
  59 |     await expect(ctaButton).toContainText("Konsultasi");
  60 |   });
  61 | 
  62 |   test("should have footer with contact info", async ({ page }) => {
  63 |     const footer = page.locator("footer");
  64 |     await expect(footer).toBeVisible();
  65 |     await expect(footer.locator("text=Jasa Web Coding").first()).toBeVisible();
  66 |     await expect(footer.locator("text=hello@jasawebcoding.com")).toBeVisible();
  67 |   });
  68 | });
```