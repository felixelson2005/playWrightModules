import {test, expect} from '@playwright/test';

test('Assertion Test',async({page}) => {

    await page.goto("https://demo.nopcommerce.com/register");

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

    await expect(page).not.toHaveURL("https://demo.nopcommerce.com/register");
    await expect(page).toHaveTitle("nopCommerce demo store. Register");

    await expect(page.locator("//*[@class='header-logo']")).toBeVisible();

    const searchbox=await page.locator("#small-searchterms");

    await expect(searchbox).toBeEnabled();

    const maleCheckbox= await page.locator("#gender-male");

    await  maleCheckbox.click();

    await expect(maleCheckbox).toBeChecked();

    const newsletter= await page.locator("#Newsletter");
    await expect(newsletter).toBeChecked();

    const email= await page.locator("#Email");
    await expect(email).toHaveAttribute('data-val-email','Wrong email');

    await expect(await page.locator("//*[@class='button-1 search-box-button']")).toHaveText("Search");

    await expect(await page.locator("//*[@class='button-1 search-box-button']")).toContainText("Sea");

    await email.fill('felixelson@abc.com');

    await expect(email).toHaveValue('felixelson@abc.com');

    const dayValue= await page.locator("//*[@name='DateOfBirthDay']/option");

    await expect(dayValue).toHaveCount(32);
})