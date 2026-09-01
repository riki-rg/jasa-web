import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load successfully", async ({ page }) => {
    await expect(page).toHaveTitle(/Jasa Web Coding/);
  });

  test("should display hero section", async ({ page }) => {
    await expect(page.locator("h1").first()).toContainText("Website mahal");
    await expect(page.locator("text=bukan template polos")).toBeVisible();
  });

  test("should have navigation links (desktop)", async ({ page }) => {
    const viewport = page.viewportSize();
    if (viewport && viewport.width < 768) {
      test.skip();
    }
    const nav = page.locator("nav");
    await expect(nav.locator("text=Layanan")).toBeVisible();
    await expect(nav.locator("text=Proses")).toBeVisible();
    await expect(nav.locator("text=Teknologi")).toBeVisible();
    await expect(nav.locator("text=Kontak")).toBeVisible();
  });

  test("should display services section", async ({ page }) => {
    await expect(page.locator("#services")).toBeVisible();
    await expect(page.locator("#services").locator("text=Pilih hasil, bukan jargon")).toBeVisible();
    await expect(page.locator("#services").locator("text=Website Custom")).toBeVisible();
    await expect(page.locator("#services").locator("text=E-Commerce")).toBeVisible();
    await expect(page.locator("#services").locator("text=AI Integration")).toBeVisible();
    await expect(page.locator("#services").locator("text=SaaS & Dashboard")).toBeVisible();
  });

  test("should display process section", async ({ page }) => {
    await expect(page.locator("#process")).toBeVisible();
    await expect(page.locator("#process").locator("text=Scroll pelan. Project juga begitu.")).toBeVisible();
    await expect(page.locator("#process").locator("text=Konsultasi Gratis")).toBeVisible();
    await expect(page.locator("#process").locator("text=Proposal & Kontrak")).toBeVisible();
    await expect(page.locator("#process").locator("text=Development")).toBeVisible();
    await expect(page.locator("#process").locator("text=Deploy & Handover")).toBeVisible();
  });

  test("should display tech stack", async ({ page }) => {
    await expect(page.locator("#tech-stack")).toBeVisible();
    await expect(page.locator("#tech-stack").locator("text=Modern stack, tanpa over-engineering.")).toBeVisible();
    await expect(page.locator("#tech-stack").locator("text=Next.js 15").first()).toBeVisible();
    await expect(page.locator("#tech-stack").locator("text=React 19").first()).toBeVisible();
    await expect(page.locator("#tech-stack").locator("text=TypeScript").first()).toBeVisible();
    await expect(page.locator("#tech-stack").locator("text=Tailwind CSS").first()).toBeVisible();
    await expect(page.locator("#tech-stack").locator("text=Prisma ORM").first()).toBeVisible();
  });

  test("should have CTA button to consultation", async ({ page }) => {
    const ctaButton = page.locator('a[href="/consultation"]').first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toContainText("Konsultasi");
  });

  test("should have footer with contact info", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer.locator("text=Jasa Web Coding").first()).toBeVisible();
    await expect(footer.locator("text=hello@jasawebcoding.com")).toBeVisible();
  });
});