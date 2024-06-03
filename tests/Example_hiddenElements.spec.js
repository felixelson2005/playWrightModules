const {test,expect} = require('@playwright/test');

test('hidden Elements',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill("//*[@name='username']",'Admin');

    await page.fill("//*[@name='password']",'admin123');

    await page.locator("[type='submit']").click();

    await page.locator("//span[text()='PIM']").click();

    await page.waitForSelector("//h5[@class='oxd-text oxd-text--h5 oxd-table-filter-title']");

    await page.locator("(//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow'])[1]").click();

    await page.waitForSelector("//*[@class='oxd-select-dropdown --positon-bottom']");

    const empStatus= await page.$$("//*[@class='oxd-select-dropdown --positon-bottom']/div/span");
    console.log(empStatus.length);

    for(let stats of empStatus){
        let textvalue= await stats.textContent();
        console.log(textvalue);
        if(textvalue.includes('Probation')){
        await stats.click();
        break;
    }

    }

    await page.waitForTimeout(8000);
})