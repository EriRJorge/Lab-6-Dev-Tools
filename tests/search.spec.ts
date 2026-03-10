import { test, expect } from "@playwright/test";

test("search for locator", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await page.getByRole("button", { name: "Search" }).click();
	await page.getByRole("searchbox", { name: "Search" }).fill("locator");
	await expect(
		page.getByRole("link", { name: /locator/i }).first(),
	).toContainText(/locator/i);
});
