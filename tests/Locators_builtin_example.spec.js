const{test,expect} =require('@playwright/test');

test('Builtin-Locator', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logo= await page.getByAltText('company-branding');

   await expect(logo).toBeVisible();

   const username= await page.getByPlaceholder('Username');
   const password=await page.getByPlaceholder('Password');

   await username.fill('Admin');
   await password.fill('admin123');
   await page.getByRole('button',{type:'submit'}).click();
   const txt=await page.locator("//*[@class='oxd-userdropdown-name']").textContent();
   console.log('The text of the element is',txt)
   await expect(page.getByText(txt)).toBeVisible();

   await page.getByAltText('client brand banner').click();

   await expect(page.getByText('Peace of mind is just a few clicks away!')).toBeVisible();









})