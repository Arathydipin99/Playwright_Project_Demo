import { expect } from '@playwright/test'
export class CheckoutPage {
    constructor(page) {
        
        this.checkOutBtn = page.locator("#checkout")
        this.firstName = page.locator("#first-name")
        this.lastName = page.locator("#last-name")
        this.zip = page.locator("#postal-code")
        this.continueBtn = page.locator(".submit-button.btn.btn_primary.cart_button.btn_action")
        this.page=page
       
    }


    async checkOut(FirstName,LastName,zip) {
     
        await this.checkOutBtn.click()
        await this.firstName.fill(FirstName)
        await this.lastName.fill(LastName)
        await this.zip.fill(zip)
        await this.continueBtn.click()
        
    }

    
}