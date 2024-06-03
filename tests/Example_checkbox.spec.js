import {test,expect} from '@playwright/test';

test('Handle Checkbox',async({page})=>{

    //handling single checkbox

    await page.goto("https://www.ironspider.ca/forms/checkradio.htm");

    // const checkbox= await page.locator("//*[@type='checkbox' and @id='Newsletter']");

    // await expect(checkbox.isChecked()).toBeTruthy();

    // await checkbox.uncheck();


    // await page.waitForTimeout(5000);

    // expect(await checkbox.isChecked()).toBeFalsy();

    // await checkbox.check();

    // await expect(checkbox.isChecked()).toBeTruthy();

    const checkboxes=["//*[@type='checkbox' and @value='red']","//*[@type='checkbox' and @value='yellow']","//*[@type='checkbox' and @value='blue']","//*[@type='checkbox' and @value='orange']","//*[@type='checkbox' and @value='green']"];

    for(const locatorf of checkboxes){
        await page.locator(locatorf).check();
    }



    for(const locatorf of checkboxes){
        if(await page.locator(locatorf).isChecked()){

            page.locator(locatorf).uncheck()
            
      
        }

    }





})