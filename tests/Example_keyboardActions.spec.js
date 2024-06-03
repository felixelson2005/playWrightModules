import {test,expect} from '@playwright/test';

test('Keyboard Actions',async({page})=>{

    await page.goto('https://gotranscript.com/text-compare');

    // await page.locator("[name='text1']").fill('Welcome to Automation');

    await page.fill("[name='text1']",'Welcome to automation');

    //ctrl+A

    await page.keyboard.press('Meta+A');

    //Ctrl+C

    await page.keyboard.press('Meta+C');

    //Tab
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');
    //Ctrl+V

    await page.keyboard.press('Meta+V');

    await page.waitForTimeout(5000);

})