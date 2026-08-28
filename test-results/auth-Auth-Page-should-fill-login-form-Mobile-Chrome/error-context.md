# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Auth Page >> should fill login form
- Location: e2e/auth.spec.ts:30:7

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/auth/login
Call log:
  - navigating to "http://localhost:3000/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test.describe("Auth Page", () => {
  4  |   test.beforeEach(async ({ page }) => {
> 5  |     await page.goto("/auth/login");
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:3000/auth/login
  6  |   });
  7  | 
  8  |   test("should load login page", async ({ page }) => {
  9  |     await expect(page.locator("h3")).toContainText("Masuk");
  10 |   });
  11 | 
  12 |   test("should switch to register mode", async ({ page }) => {
  13 |     await page.click('button:has-text("Daftar")');
  14 |     await expect(page.locator("h3")).toContainText("Daftar Akun");
  15 |     await expect(page.locator('input[name="name"]')).toBeVisible();
  16 |   });
  17 | 
  18 |   test("should show validation errors for empty login", async ({ page }) => {
  19 |     await page.click('button:has-text("Masuk")');
  20 |     // Check for form validation - HTML5 validation will show browser native messages
  21 |     // Just verify the button click works
  22 |     await expect(page.locator('button:has-text("Masuk")')).toBeVisible();
  23 |   });
  24 | 
  25 |   test("should have OAuth buttons", async ({ page }) => {
  26 |     await expect(page.locator('button:has-text("Google")')).toBeVisible();
  27 |     await expect(page.locator('button:has-text("GitHub")')).toBeVisible();
  28 |   });
  29 | 
  30 |   test("should fill login form", async ({ page }) => {
  31 |     await page.fill('input[name="email"]', "test@example.com");
  32 |     await page.fill('input[name="password"]', "password123");
  33 |     await expect(page.locator('button:has-text("Masuk")')).toBeEnabled();
  34 |   });
  35 | });
```