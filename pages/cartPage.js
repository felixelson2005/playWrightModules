exports.cartPage=

class cartPage{

    constructor(page){
        this.page=page;
        this.cartLink='#cartur'
        this.allproducts="//*[@id='tbodyid']/tr/td[2]";
        }

      
     async gotoCart(){
        await this.page.locator(this.cartLink).click();
     }   


      async checkProductinCart(productName){
        const allproductvalues=await  this.page.locator(this.allproducts).all();
        for(const prod of allproductvalues){
            const prodtxt=await prod.textContent();
            console.log('product values is',prodtxt);
            if(prodtxt===productName){
            console.log('Product is matched');
          }
        }
      }  



}