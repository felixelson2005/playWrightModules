const{test,expect} =require('@playwright/test');

test('Xactly LoginTest',async({page})=> {

   const url='https://ociqaintx.talarianweb.com/iam/login';

   await page.goto(url);

   const title=page.title();
   const Curl=page.url();

   console.log('The current url is ',Curl);
   console.log('The current title is',title);

   await expect(page).toHaveTitle('Xactly Login');
   await expect(page).toHaveURL(url);
   await page.close();

})