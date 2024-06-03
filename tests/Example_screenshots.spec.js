import {test,expect} from '@playwright/test';

test.skip('screenshot partial page',async({page})=>{

    await page.goto('https://demo.opencart.com/');

    await page.screenshot({path:'tests/screenshots/'+Date.now()+'Homepage.png'});

})


test.skip('screenshot Full page',async({page})=>{

    await page.goto('https://demo.opencart.com/');

    await page.screenshot({path:'tests/screenshots/'+Date.now()+'HomepageFullpage.png',fullPage:true});

})

test.skip('screenshot Element in page',async({page})=>{

    await page.goto('https://demo.opencart.com/');
    const ele=await page.locator("(//*[@class='product-thumb'])[1]");
    await page.locator("[title='MacBook']").screenshot({path:'tests/screenshots/'+Date.now()+'HomepageElement.png',fullPage:true});

})

test('Default screenshot in page',async({page})=>{

    await page.goto('https://demo.opencart.com/');
})