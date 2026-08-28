# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: theme-responsive.spec.ts >> light theme >> keeps primary content readable
- Location: e2e/theme-responsive.spec.ts:11:9

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
  3  | for (const theme of ["light", "dark"]) {
  4  |   test.describe(`${theme} theme`, () => {
  5  |     test.beforeEach(async ({ page }) => {
> 6  |       await page.goto("/");
     |                  ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/
  7  |       await page.evaluate((value) => localStorage.setItem("theme", value), theme);
  8  |       await page.reload();
  9  |     });
  10 | 
  11 |     test("keeps primary content readable", async ({ page }) => {
  12 |       await expect(page.locator("h1")).toBeVisible();
  13 |       await expect(page.locator("#services")).toBeVisible();
  14 |       await expect(page.locator("#portfolio").first()).toBeVisible();
  15 |       await expect(page.locator("#testimonials")).toBeVisible();
  16 |       await expect(page.locator("#faq")).toBeVisible();
  17 |       await expect(page.locator("#about")).toBeVisible();
  18 |       await expect(page.locator("#contact")).toBeVisible();
  19 |       await expect(page.locator("html")).toHaveClass(new RegExp(theme === "dark" ? "dark" : "^(?!.*dark)"));
  20 |     });
  21 | 
  22 |     test("has no horizontal overflow", async ({ page }) => {
  23 |       const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  24 |       expect(overflow).toBe(false);
  25 |     });
  26 | 
  27 |     test("theme toggle changes theme", async ({ page }) => {
  28 |       const toggle = page.locator('[data-testid="theme-toggle"]');
  29 |       await expect(toggle).toBeVisible();
  30 |       const before = (await page.locator("html").getAttribute("class")) ?? "";
  31 |       const beforeTheme = await page.evaluate(() => localStorage.getItem("theme") || "dark");
  32 |       await toggle.click();
  33 |       await page.waitForFunction(
  34 |         (prev: string) => localStorage.getItem("theme") !== prev,
  35 |         beforeTheme
  36 |       );
  37 |       const after = await page.locator("html").getAttribute("class");
  38 |       expect(after).not.toBe(before);
  39 |     });
  40 |   });
  41 | }
  42 | 
  43 | test("responsive layouts do not overflow at key widths", async ({ page }) => {
  44 |   for (const width of [360, 768, 1024, 1440]) {
  45 |     await page.setViewportSize({ width, height: 900 });
  46 |     await page.goto("/");
  47 |     const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  48 |     expect(overflow, `horizontal overflow at ${width}px`).toBe(false);
  49 |   }
  50 | });
```