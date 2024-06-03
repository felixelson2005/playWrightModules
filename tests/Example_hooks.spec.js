import{test,expect} from '@playwright/test';
let page;
test.beforeEach(async({browser})=>{

    page= await browser.newPage();
    
    await page.goto('https://demoblaze.com/');

    await page.locator('#login2').click();

    await page.waitForSelector('#logInModalLabel');

    await page.locator('#loginusername').fill('admin');

    await page.locator('#loginpassword').fill('admin');

    await page.locator("//button[text()='Log in']").click();

    await page.waitForSelector('.hrefch');


})

test('First Home Page',async()=>{

   
    await page.waitForSelector('.hrefch');


    const products=await page.$$('.hrefch');


    expect (await products).toHaveLength(9);

  })

test('Second Home Page',async()=>{

    await page.waitForSelector('.hrefch');


    await page.locator('.hrefch').filter({hasText:'Samsung galaxy s6'}).click();


    await page.waitForTimeout(5000);

    await page.locator("//a[text()='Add to cart']").click();

     page.on('dialog',async dialog=>{

        expect (await dialog.message()).toContain('Product added.');

        await dialog.accept();

    })

})

test.afterEach(async({})=>{

    await page.locator('#logout2').click();

       
})