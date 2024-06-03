import {test,expect} from '@playwright/test';


test('Locators Test', async({page}) => {

    await page.goto('https://demoblaze.com/');

    await page.locator('id=login2').click();

    await page.fill('#loginusername','demousername');

    await page.locator("input[id='loginpassword']").fill("demopassword");

    await page.click("//button[text()='Log in']");

    const logoutlink=page.locator("//a[@id='logout2']");

    await expect(logoutlink).toBeVisible();

    await page.close();

})