import {test, expect} from '@playwright/test'

test("Assertions", async({page}) => {
    await page.goto("http://example.com/")

    expect(page).toHaveURL("http://example.com/");
    expect(page).toHaveTitle("Example Domain");

    const pageTitle = await page.locator("h1");
    await expect(pageTitle).toContainText("Example");
    await expect(pageTitle).toBeVisible;
    await expect(pageTitle).toHaveCount(1);
})