import {test,expect} from '@playwright/test';
import {loginPage} from '../pages/loginPage';
import {homePage} from '../pages/homePage';
import {cartPage} from '../pages/cartPage';



test.skip('loginTest',async ({page})=>{

    const login= new loginPage(page);
    const home=  new homePage(page);
    //Login
   await login.gotoLoginPage();
   await login.userlogin('admin','admin');
   await page.waitForTimeout(2000);
   await home.clickAddtoCart();

})

test('loginTest with select mobile',async ({page})=>{

    const login= new loginPage(page);
    const home=  new homePage(page);
    const cart=  new cartPage(page);
    //Login
   await login.gotoLoginPage();
   await login.userlogin('admin','admin');
   await page.waitForTimeout(2000);
   await home.selectGivenProduct('Nexus 6');
   await home.clickAddtoCart();
   await home.verifyandacceptdialog();
   await cart.gotoCart();
   await page.waitForTimeout(2000);
   await cart.checkProductinCart('Nexus 6');
})