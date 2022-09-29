import {test, expect} from '@playwright/test'

test.describe("Hooks Example", ()=> {

    test.beforeAll(() =>{
        console.log("This is before all");
    })

    test.afterAll(() =>{
        console.log("This is after all")
    })

    test.beforeEach(() =>{
        console.log("This is before each");
    })

    test.afterEach(() =>{
        console.log("This is after each")
    })

    test("First test", ()=>{
        console.log("This is the first test")
    })

    test("Second test", ()=>{
        console.log("This is the second test")
    })

})