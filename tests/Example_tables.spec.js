const{test,expect}=require('@playwright/test');

////To test the selection of columns in the table
test.skip('Tables Test',async ({page})=>{

    await page.goto('https://demo.guru99.com/test/web-table-element.php');

    const table= await page.locator("[class='dataTable']");


    const columns= await table.locator('tbody tr td');

    console.log('The number of columns ',await columns.count());

    const rows=await table.locator('tbody tr')

    console.log('The number of rows ',await rows.count());

    const matchedrow=await rows.filter({

        has: page.locator('td'),
        hasText: 'DCB Bank'

    })

    await matchedrow.locator("//*[@href='http://demo.guru99.com/']").click();

    await page.waitForTimeout(5000);
});

//To test the multi selection of columns in the table
test.skip('Tables MultiSelection',async ({page})=>{

    await page.goto('https://ninjatables.com/examples-of-data-table-design-on-website/');

    const table= await page.locator("#footable_4697");


    const columns= await table.locator('tbody tr td');

    console.log('The number of columns ',await columns.count());

    const rows=await table.locator('tbody tr');

    console.log('The number of rows ',await rows.count());

    await selectTablevalue(rows,page,'Timothy Mooney')
    await selectTablevalue(rows,page,'Unity Butler')
    await selectTablevalue(rows,page,'Yuri Berry')
 
     await page.waitForTimeout(6000);
})

//Print all table data using looping functions
test('Table Looping', async({page})=>{

    await page.goto('https://ninjatables.com/examples-of-data-table-design-on-website/');

    await page.waitForTimeout(1000);

    // const table= await page.locator('#footable_4697');

    // const rows= await table.locator('tbody tr');

    // for(let i=0;i<await rows.count();i++){
        
    //     const row=await rows.nth(i);
    //     const tds=await row.locator('td');

    //     for(let j=0;j<await tds.count();j++){
    //         console.log(await tds.nth(j).textContent());
    //     }
    //         console.log('\n');
    // }

    const pagination= await page.locator('.pagination li a');

    console.log('The number of pages in table ',await pagination.count())

    for(let p=0;p<await pagination.count();p++){

        if(p>0){

            await pagination.nth(p).click();
        }

            const table= await page.locator('#footable_4697');

    const rows= await table.locator('tbody tr');
    console.log('This is the results from page number '+p)    
    for(let i=0;i<await rows.count();i++){
        
        const row=await rows.nth(i);
        const tds=await row.locator('td');

        for(let j=0;j<await tds.count();j++){
            console.log(await tds.nth(j).textContent());
        }
            console.log('\n');
    }
    }

})

async function selectTablevalue(rows,page,name){
    const matchedrow= await rows.filter({

        has: page.locator('td'),
        hasText: name

    })

    await matchedrow.locator("[class='footable-toggle fooicon fooicon-plus']").click();

}