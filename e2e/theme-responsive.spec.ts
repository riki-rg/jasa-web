import { test, expect } from "@playwright/test";

for (const theme of ["light", "dark"]) {
  test.describe(`${theme} theme`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
      await page.evaluate((value) => localStorage.setItem("theme", value), theme);
      await page.reload();
    });

    test("keeps primary content readable", async ({ page }) => {
      await expect(page.locator("h1")).toBeVisible();
      await expect(page.locator("#services")).toBeVisible();
      await expect(page.locator("#portfolio").first()).toBeVisible();
      await expect(page.locator("#testimonials")).toBeVisible();
      await expect(page.locator("#faq")).toBeVisible();
      await expect(page.locator("#about")).toBeVisible();
      await expect(page.locator("#contact")).toBeVisible();
      await expect(page.locator("html")).toHaveClass(new RegExp(theme === "dark" ? "dark" : "^(?!.*dark)"));
    });

    test("has no horizontal overflow", async ({ page }) => {
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(overflow).toBe(false);
    });

    test("theme toggle changes theme", async ({ page }) => {
      const toggle = page.locator('[data-testid="theme-toggle"]');
      await expect(toggle).toBeVisible();
      const before = (await page.locator("html").getAttribute("class")) ?? "";
      const beforeTheme = await page.evaluate(() => localStorage.getItem("theme") || "dark");
      await toggle.click();
      await page.waitForFunction(
        (prev: string) => localStorage.getItem("theme") !== prev,
        beforeTheme
      );
      const after = await page.locator("html").getAttribute("class");
      expect(after).not.toBe(before);
    });
  });
}

test("responsive layouts do not overflow at key widths", async ({ page }) => {
  for (const width of [360, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow, `horizontal overflow at ${width}px`).toBe(false);
  }
});