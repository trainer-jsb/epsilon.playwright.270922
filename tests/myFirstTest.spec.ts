import { test, expect } from '@playwright/test'

test.describe.parallel("My first test group", () => {

    test("my first test @sanity", async ({ page }) => {
        await page.goto("http://example.com/");
        const pageTitle = await page.locator("h1");
        await expect(pageTitle).toContainText("Example");
    })

    test("click actions", async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/");
        await page.click("#signin_button");
        //await page.pause();
        await page.click("text=Sign in");
        const actionError = await page.locator('.alert-error');
        await expect(actionError).toContainText('Login and/or password are wrong.');
    })

    test("input example @smoke", async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/login.html');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click("text=Sign in");
    })

})

// args for text = 'text=value'
//args for id is #id
// args for class is .className
//args for xpath ('//xpath')

//args for combination ('#id .class')