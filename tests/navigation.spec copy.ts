import { test, expect } from "@playwright/test";

test("homepage has playwright in title", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await expect(page).toHaveTitle(/Playwright/);
});

test("get started link navigates to intro page", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await page.click("text=Get Started");
	await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});

test('navigates to intro page when clicking "Get Started"', async ({
	page,
}) => {
	await page.goto("https://playwright.dev/");
	await page.click("text=Get Started");
	await expect(page).toHaveURL("https://playwright.dev/docs/intro");
});

test("Scrolls to the bottom of the page and clicks on the last link", async ({
	page,
}) => {
	await page.goto("https://playwright.dev/");
	await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
	await page.click("text=GitHub");
	await expect(page).toHaveURL("https://github.com/microsoft/playwright");
});
