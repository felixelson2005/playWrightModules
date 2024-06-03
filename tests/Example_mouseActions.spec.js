import {test,expect} from '@playwright/test';

test.skip('Mouse Actions',async ({page})=>{

   await page.goto('https://demo.opencart.com/');

   const desktop=await page.locator("//a[text()='Desktops']");
   const macadd=await page.locator("//*[@class='nav-link' and text()='Mac (1)']");

   //mouse hover 

   await desktop.hover()
   await macadd.hover()

    await page.waitForTimeout(5000);



})

test.skip('Right Click',async({page})=>{

   await page.goto('https://demo.guru99.com/test/simple_context_menu.html');


    const rightClick=await page.locator("//*[text()='right click me']");

    await rightClick.click({button: 'right'});

    await page.locator("//*[text()='Edit']").click();

   await page.on('dialog', async dialog=>{

        expect(await dialog.message()).toContain('clicked: edit');
        await dialog.accept();
    })

    await page.waitForTimeout(5000);

})

test('double click',async({page})=>{

   await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

   const doubleClick=await page.locator("//button[contains(text(),'Double-Click')]");

   page.on('dialog', async dialog=>{

   await expect(dialog.message()).toContain('You double clicked me.. Thank You..')
   await dialog.accept();
   })


   await doubleClick.dblclick();

   await page.waitForTimeout(5000);

})