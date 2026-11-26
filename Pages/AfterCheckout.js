import { expect } from '@playwright/test'
export class AfterCheckout{
    constructor(page){
        this.finishBtn=page.locator("#finish")
        this.page=page

    }
    async FinalText(){
    await this.finishBtn.click()
    await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    const finalText=await this.page.locator(".checkout_complete_container").locator(".complete-header").textContent()
    console.log("Final text after order is completed : " + finalText)
    await expect (finalText).toContain("Thank you")
    
    }
}