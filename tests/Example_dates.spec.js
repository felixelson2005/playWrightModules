import {test, expect} from '@playwright/test';

test('Date Picker',async({page})=>{

    const monthact='January';
    const yearact=2027;
    const dateact=5;

    await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/')

    const datePicker=await page.locator('#id-textbox-1');

    await page.locator("[class='fa fa-calendar-alt fa-2x']").click();

    const nextYear=await page.locator('.next-year');

    const nextMonth=await page.locator('.next-month');

    const prevYear=await page.locator('.prev-year');

    let year=getyear(page);
    let month=getmonth(page);

    //Selecting <Month>
    while(true){
        if(month==monthact){
            console.log('It is the same month so select the data');
                break;
        }else{
                await nextMonth.click();
                month=await getmonth(page);  
        }
    }


    //Selecting Year
    while(true){
        if(year==yearact){
            console.log('It is same year so select the Month');
             break;
        }else{
            if(year>yearact){
                await prevYear.click();
                year=await getyear(page);
               
            }else{
                await nextYear.click(); 
                year=await getyear(page);
            }    
        }
    }

    await page.locator(`//*[text()='${dateact}']`).click();

    await page.waitForTimeout(5000);


})

async function getyear(page){
    let monthYear= await page.locator('#id-grid-label').textContent();
    let year=monthYear.split(' ')[1];   
    console.log('The given actual year is ',year);
    return year;
}

async function getmonth(page){
    const monthYear= await page.locator('#id-grid-label').textContent();
    const month=monthYear.split(' ')[0]; 
    console.log('The given actual month is ',month);
    return month;
}

