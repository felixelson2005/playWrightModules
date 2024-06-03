import{test,expect} from '@playwright/test';

test('listReporter test1',async({page})=>{


    await page.goto("https://demoblaze.com/");

    expect(await page).toHaveTitle("STORE");


})


test('listReporter test2',async({page})=>{


    await page.goto("https://playwright.dev/");

    expect(await page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");


})
