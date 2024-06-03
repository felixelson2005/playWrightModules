import {test,expect,chromium} from '@playwright/test';

test.skip('windowsHandling',async ()=>{

    const browser=await chromium.launch();
    
    const context=await browser.newContext();

    const page1= await context.newPage();
    const page2=await context.newPage();

    const allPage=context.pages();

    console.log('the number of pages created are ',allPage.length)

    await page1.goto('https://demoblaze.com/index.html');
    await expect(page1).toHaveTitle("STORE");

    await page2.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page2).toHaveTitle("OrangeHRM");
    

})

test('handleMultiplePages',async ()=>{

    const browser=await chromium.launch();
    
    const context=await browser.newContext();

    const page1= await context.newPage();

    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page1).toHaveTitle("OrangeHRM");
    
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();

    const pageProm=await context.waitForEvent('page');

 

    const page2=await pageProm;

    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');

    await page1.waitForTimeout(3000);
    await page2.waitForTimeout(3000);

    browser.close();


})