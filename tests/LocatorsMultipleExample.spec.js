import {test,expect} from '@playwright/test';

test('LocateMutipleElements',async({page}) =>{

    await page.goto('https://demoblaze.com/index.html');

    const links = await page.$$('a');

    await page.waitForSelector("//*[@class='hrefch']");
    // for(const link of links)
    const labelsName= await page.$$("//*[@class='hrefch']")

    // for(const link of links)
    // {

    //     const linktext=await link.textContent();
    //     console.log(linktext);
    //     if(linktext=='Contact'){
    //         link.click();
    //         const modal=await page.locator('id=exampleModalLabel');
    //         await expect(modal).toBeVisible();
    //         break;
    //     }

    // }
    console.log('The products are');
    for(const labelName of labelsName){

        const text= await labelName.textContent();

        console.log(text);
      
    }

    page.close();
})