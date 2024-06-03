import {test,expect} from '@playwright/test';
import { allure } from "allure-playwright";

test('Allure test1', async({page})=>{

    await page.goto("https://demoblaze.com/");

    expect(await page).toHaveTitle("STORE");


})


test('Allure test2', async({page})=>{


    await page.goto("https://playwright.dev/");

    expect(await page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

})



test('Allure test3', async({page})=>{


    await page.goto("https://ociqaintx.talarianweb.com/iam/login");

    expect(await page).toHaveTitle("Xactly Login");

})