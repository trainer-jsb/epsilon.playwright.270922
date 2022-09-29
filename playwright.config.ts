import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig ={
    timeout: 60000,
    retries: 1,
    use:{
        headless: true,
        viewport:{width: 1280, height:720},
        video: "retain-on-failure",
        screenshot: "only-on-failure"
    },
    projects:[
        {
            name:"Chromium",
            use: {browserName: "chromium"},
        },
        {
            name: "Firefox",
            use: {browserName: "firefox"},
        },
        {
            name: "webkit",
            use: {browserName: "webkit"}
        },
    ],

}

export default config;