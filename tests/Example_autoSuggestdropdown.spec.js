import {test,expect} from '@playwright/test';

test('AutoSuggest dropdown',async({page})=>{

    await page.goto("https://www.redbus.in/");

    await page.fill('#src','Delhi');

    await page.waitForSelector("//*[contains(@class,'sc-dnqmqq')]")

    const optionvalues= await page.$$("//li/div/text[@class='placeHolderMainText']");

    for(let city of optionvalues){

         const textvalue=await city.textContent();
         if(textvalue.includes('RK Ashram')){
            city.click();
         }

    }

    await page.waitForTimeout(5000);
})