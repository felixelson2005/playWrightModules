exports.homePage=

class homePage{

    constructor (page){

        this.page=page;
        this.welcometxt="//*[@class='nav-link' and text()='Welcome admin']";
        this.addTocart="//a[text()='Add to cart']";
        this.allproduct="//*[@id='tbodyid']/div/div/div/h4/a";


    }

    async clickAddtoCart(){

        await this.page.waitForSelector(this.welcometxt);
        await this.page.locator(this.addTocart).click();
    }


    async verifyandacceptdialog(){

        await this.page.on('dialog',async dialog=>{

            if(await dialog.message().includes('added')){
                await dialog.accept();
            }
         })
        }

    async selectGivenProduct(productName){

    const allPrd=await this.page.$$(this.allproduct);

         for(const prd of allPrd){

            console.log('product name is',await prd.textContent());

            const prdNameactual=await prd.textContent();
                if(prdNameactual===productName){
                    await prd.hover();
                    await prd.click();
                    break;
            }
        }



    }

    }








