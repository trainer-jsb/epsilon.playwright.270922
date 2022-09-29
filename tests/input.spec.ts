import {test, expect} from '@playwright/test'

test("input example @smoke", async({page}) => {
    await page.goto('http://zero.webappsecurity.com/login.html');
    await page.type('#user_login','username');
    await page.type('#user_password1', 'password');
    await page.click("text=Sign in");
})