import { expect } from '@playwright/test'
export class ProductPage {
    productCount=0
    productList = []
    productList = []
    constructor(page) {
        this.productTitle = page.locator(".inventory_item_name")
        this.filterDropdown = page.locator(".product_sort_container")
        this.priceList = page.locator(".inventory_item_price")
        this.addtoCart = page.locator(".btn.btn_primary.btn_small.btn_inventory")
        this.page = page
        //this.productCount=productCount


    }
    async productpagenavigation() {
        await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
        console.log(await this.page.title())
        await expect(this.page).toHaveTitle("Swag Labs")
        await this.productTitle.first().waitFor({ state: "visible" })
        this.productCount = await this.productTitle.count()
        console.log("Product count is : " + this.productCount)
        this.productList = await this.productTitle.allTextContents()
        console.log("List of items :", this.productList)
    }
    //sorting A to Z
    async sortAtoZ() {
        await this.filterDropdown.selectOption("az")
        const sortAtoZ = [...this.productList].sort()
        await expect(this.productList).toEqual(sortAtoZ)
    }

    //sorting Z to A
    async sortZtoA() {
        await this.filterDropdown.selectOption("za")
        this.productList2 = await this.productTitle.allTextContents()
        const sortZtoA = [...this.productList2].sort().reverse()
        await expect(this.productList2).toEqual(sortZtoA)
    }

    //sorting based on price low to high
    async lowtohigh() {
        await this.filterDropdown.selectOption("lohi")
        const priceArray = await this.priceList.allTextContents()
        console.log(priceArray)
        const actualPrice = priceArray.map(price => parseFloat(price.replace("$", " ")))
        console.log(actualPrice)
        const sortLtoH = [...actualPrice].sort((a, b) => a - b)
        await expect(actualPrice).toEqual(sortLtoH)
    }

     //sorting from high to low
    async hightolow() {
        await this.filterDropdown.selectOption("hilo")
        const priceArray2 = await this.priceList.allTextContents()
        console.log(priceArray2)
        const actualPrice2 = priceArray2.map(price => parseFloat(price.replace("$", " ")))
        console.log(actualPrice2)
        const sortHtoL = [...actualPrice2].sort((a, b) => b - a)
        await expect(actualPrice2).toEqual(sortHtoL)

    }
    async addCart(myProduct) {
       this.productCount = await this.productTitle.count()
        for (let i = 0; i < this.productCount; i++) {
            const currentProduct = await this.productTitle.nth(i).textContent()
            if (currentProduct == myProduct) {
                await this.addtoCart.nth(i).click()
                console.log("Product in cart is :" + myProduct)
                break;

            }
        }
    }
}

