import {test, expect} from '@playwright/test'

test.describe("Screenshot Examples", () =>{

    test.beforeEach( async({page}) =>{
        await page.goto("http://example.com/")
    })

    test("Screenshot- Full Page", async({page}) =>{
       // await page.goto("http://example.com/")
        await page.screenshot({path: "screenshot/screenshot-test.png", fullPage: true})
    })

    test("Screenshot - specific webelement", async({page}) =>{
       // await page.goto("http://example.com/");
        const oelem = await page.$("h1");

         await oelem?.screenshot({path: "screenshot/screenshot-element.png"});
    })
})

