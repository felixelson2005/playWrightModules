const {test,expect} =require('@playwright/test');

test('Handling Dropdown',async({page})=>{

    await page.goto("https://demoqa.com/select-menu");

    //If dropdoown do not have select options
    await page.locator("//*[text()='Select Option']").click();
    const multiDrop=await page.$$("//*[@id='withOptGroup']//*[contains(@class,'-menu')]/div/div");
    let status=true;
    for(let opt of multiDrop){
        let value=await opt.textContent();
        if(value.includes('Another root option')){
            status=true;
            await opt.click();
            break;
        }
    }
    expect(status).toBeTruthy();
    

    //If we don't have select options
    await page.waitForTimeout(3000);


})