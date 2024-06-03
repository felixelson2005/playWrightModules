import {test, expect} from '@playwright/test';

test ('ActionsTest',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    const firstName=await page.locator("#FirstName");
    await expect(firstName).toBeVisible();
    await expect(firstName).toBeEmpty();
    await expect(firstName).toBeEditable();
    await expect(firstName).toBeEnabled();
    await page.locator("#FirstName").fill('John')

    await page.waitForTimeout(5000);



})