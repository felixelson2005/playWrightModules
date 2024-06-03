const {test,expect} =require('@playwright/test');

test.skip('Dialog Tests',async({page})=>{


    await page.goto("https://demoqa.com/alerts");

    //Enabling the Alert Handler
    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('You clicked a button');
        await dialog.accept();

    })
    await page.waitForTimeout(5000);
    await page.locator("#alertButton").click();
    await page.waitForTimeout(2000);
});

test.skip('Dialog Confirmation',async({page})=>{


    await page.goto("https://demoqa.com/alerts");

           //Enabling the Alert Handler
    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Do you confirm action?');
        await dialog.dismiss();

    })

    await page.locator('#confirmButton').click();  

     expect(await page.locator("//*[@id='confirmResult']").textContent()).toContain('You selected Cancel');

    });

test('Dialog Prompt',async({page})=>{


        await page.goto("https://demoqa.com/alerts");
    
               //Enabling the Alert Handler
        page.on('dialog',async dialog=>{
    
            expect(dialog.type()).toContain('prompt');
            expect(dialog.message()).toContain('Please enter your name');
            await dialog.accept('John');

        })
    
        await page.locator('#promtButton').click();  
    
         expect(await page.locator("//*[@id='promptResult']").textContent()).toContain('You entered John');
        await page.waitForTimeout(3000);
        });

test('Dialog Prompt2',async({page})=>{


    await page.goto("https://demoqa.com/alerts");

            //Enabling the Alert Handler
    page.on('dialog',async dialog=>{

        expect(dialog.type).toContain('prompt')
        expect(dialog.message).toContain('hell')
        dialog.dismiss();
    })

    await page.locator('#promtButton').click();  

        expect(await page.locator("//*[@id='promptResult']").textContent()).toContain('You entered John');
    await page.waitForTimeout(3000);
    });       
        
