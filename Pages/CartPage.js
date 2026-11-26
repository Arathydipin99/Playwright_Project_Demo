import { expect } from '@playwright/test'
export class CartPage {
    constructor(page) {
        this.productTitle = page.locator(".inventory_item_name")
        this.cartLink = page.locator(".shopping_cart_link")
        this.page = page
    }



async cartpageNavigation(myProduct){
await this.cartLink.click()
await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html")
const productName = await this.page.locator(".inventory_item_name").allTextContents()
console.log("Product added in cart is :" + productName)
await expect(productName).toContain(myProduct)

}

}