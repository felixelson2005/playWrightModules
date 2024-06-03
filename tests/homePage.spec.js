const {test,expect}=require('@playwright/test');

test('Home Page',async ({page})=>{

   const Url='https://demoblaze.com/'; 
   await page.goto(Url);

   const pageName=page.title();
   const PageURL=page.url();
   await expect(page).toHaveURL(Url);
   await expect(page).toHaveTitle('STORE');
   console.log(`The page URL is : ${PageURL}`);
   console.log(`The page title is :${pageName}`);
   await page.close();

})