import {test,expect} from '@playwright/test';

test('Exerice for Tables',async ({page})=>{

    await page.goto('https://ninjatables.com/examples-of-data-table-design-on-website/');
    await page.waitForTimeout(2000);

    const table= await page.locator('#footable_4697');

    const rows= await table.locator('tbody tr');

    console.log('The total rows of table is ', await rows.count());

    const columns= await table.locator('tbody tr td');

    console.log('The total rows of table is ', await columns.count());


    // //filter specific row which has name from the table
    // const specificrow=rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Yuri Berry'
        
    // })
    // await specificrow.locator('[class="footable-toggle fooicon fooicon-plus"]').click()

    //Using function with above steps
    // await clickbyTabletext(rows,page,'Unity Butler');
    // await clickbyTabletext(rows,page,'Tiger Nixon');

    //Using looping and retriev the info from table
    // for(let i=0;i<await rows.count();i++){

    //     const rowvalue=await rows.nth(i);
    //     const columvalue=await rowvalue.locator('td');
    //     for(let j=0;j<await columvalue.count();j++){

    //         const singlecolumn=await columvalue.nth(j);
    //         console.log(await singlecolumn.textContent());
    //     }
    // }

    //Using looping for all pages

    const pages= await page.locator('.pagination li a');

    console.log('The number of pages are'+await pages.count());

    for(let p=0;p<await pages.count();p++){

        if(p>0){
            await pages.nth(p).click();
        }

            // Using looping and retriev the info from table
                for(let i=0;i<await rows.count();i++){

                    const rowvalue=await rows.nth(i);
                    const columvalue=await rowvalue.locator('td');
                    for(let j=0;j<await columvalue.count();j++){

                        const singlecolumn=await columvalue.nth(j);
                        console.log(await singlecolumn.textContent());
                    }
                }
    }
    

    await page.waitForTimeout(5000);
})

async function clickbyTabletext(rows,page,text){


       //filter specific row which has name from the table
    const specificrow=rows.filter({
        has: page.locator('td'),
        hasText: text
        
    })
    await specificrow.locator('[class="footable-toggle fooicon fooicon-plus"]').click()


}