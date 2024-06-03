import {test ,expect} from '@playwright/test';

test('RadioButtons',async({page})=>{

    await page.goto("https://demo.nopcommerce.com/register");

   await page.locator('#gender-male').check();

   await expect(await page.locator('#gender-male')).toBeChecked();

   await expect(await page.locator('#gender-male').isChecked()).toBeTruthy();

   await expect(await page.locator('#gender-female').isChecked()).toBeFalsy();

   await page.waitForTimeout(5000);


})