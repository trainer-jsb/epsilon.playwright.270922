import {test} from '@playwright/test'

test.describe("Tips", () =>{

    test("Test Info", async({page, browserName}, testInfo) => {
        test.skip(browserName === "chromium", "Skipping for chromium browser");
        await page.goto("http://example.com/");
        //console.log(testInfo.title);
    })

})