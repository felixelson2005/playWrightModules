exports.loginPage=

class loginPage {

    constructor (page){

        this.page=page;
        this.loginLink='#login2';
        this.usernameInput='#loginusername';
        this.usernamepassword='#loginpassword';
        this.loginbtn="//button[text()='Log in']";

    }

    async gotoLoginPage(){

        await this.page.goto('https://demoblaze.com/index.html');
    }

    async userlogin(username,password){

        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.usernamepassword).fill(password);
        await this.page.locator(this.loginbtn).click();
    }

}