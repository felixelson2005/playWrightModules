import {test,expect} from '@playwright/test';

test('multi Selects',async({page})=>{

    await page.goto("https://demoqa.com/select-menu");

    await page.selectOption('#cars',['Volvo','Saab','Audi'])

    //Check number of options in multiselect

    const optionvalue = await page.locator('#cars option');

    await expect(optionvalue).toHaveCount(4);

        //Check number of options in multiselect using java script array option

        const options= await page.$$('#cars option');

        const count=options.length;

        expect(count).toBe(4);

        //3 Presence of values in dropdown

        const content= await page.locator('#cars').textContent();

        await expect(content.includes('Volvo')).toBeTruthy();

        await expect(content.includes('asdas')).toBeFalsy();

    await page.waitForTimeout(5000);

})