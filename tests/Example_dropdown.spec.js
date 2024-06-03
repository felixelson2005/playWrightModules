const {test,expect} =require('@playwright/test');

test('Handling Dropdown',async({page})=>{

    await page.goto("https://demoqa.com/select-menu");

    // await page.locator("#oldSelectMenu").selectOption({label:'Red'});//passing label or visible text


    // await page.locator("#oldSelectMenu").selectOption("Blue");//visible text directly


    // await page.locator("#oldSelectMenu").selectOption({value:'8'});//Select by value of dropdown

    // await page.locator("#oldSelectMenu").selectOption({index:4});//Select by value of dropdown

    // await page.selectOption("#oldSelectMenu",'Blue');//select by text but with page

    //1)Checkk number of options in dropdown
    // const optionsvars= await page.locator('#oldSelectMenu option'); 

    // console.log('the count option count is ',optionsvars)
     
    // await expect(optionsvars).toHaveCount(11);

    // //2) cehck number of options in dropdown- Array format

    // const optionarr= await page.$$('#oldSelectMenu option');

    // console.log("Number of option",optionarr.length);

    // await expect(optionarr.length).toBe(11);

    // console.log('The values are:');

    // //3)Check the text of options in dropdown
    // const content=await page.locator('#oldSelectMenu').textContent();

    // await expect(content.includes('Blue')).toBeTruthy();
    
    // //4) check the presence of values

    // const multiOption=await page.$$('#oldSelectMenu option');

    // let status=false;

    // for(const opt of multiOption){
    //     const value=await opt.textContent();
    //     if(value.includes('Black')){
    //         status=true;
    //         break;
    //     }
    // }
    // expect(status).toBeTruthy();


 

})