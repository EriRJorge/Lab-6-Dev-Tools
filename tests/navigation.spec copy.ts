import { test, expect } from "@playwright/test";

test("homepage has playwright in title", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await expect(page).toHaveTitle(/Playwright/);
});

test("get started link navigates to intro page", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await expect(page.locator("text=Get Started")).toBeVisible();
	await page.click("text=Get Started");
	await expect(page).toHaveURL("https://playwright.dev/docs/intro");
	await expect(page.locator("h1")).toHaveText("Installation");
});
