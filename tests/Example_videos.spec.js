import {test,expect} from '@playwright/test';

test('VideoRecorder',async({page})=>{

await page.goto("https://demoblaze.com/");

await page.getByRole('link',{name: 'Log in'}).click();

await page.locator('#loginusername').fill('admin');

await page.locator('#loginpassword').fill('admin');

await page.getByRole('button',{name: 'Log in'}).click();

await expect(page.locator('#logout')).toBeVisible();

});