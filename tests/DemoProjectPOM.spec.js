import { test, expect } from '@playwright/test'
test("sauce demo", async ({ page }) => {
    await page.goto("https://www.saucedemo.com")
    
    await username.fill("standard_user")
    
    await passwrd.fill("password")
    
    await loginBtn.click()
    const errorMessage = await page.locator(".error-message-container.error").textContent()
    console.log("Error message displayed is :" + errorMessage)
    await expect(page.locator(".error-message-container.error")).toHaveText(errorMessage)
    await expect(page.locator(".error-message-container.error")).toBeVisible()


    //login scenario with empty username and empty password

    await username.fill("")
    await passwrd.fill("")
    await loginBtn.click()
    const errorMessage2 = await page.locator(".error-message-container.error").textContent()
    console.log("Error message displayed is :" + errorMessage2)
    await expect(page.locator(".error-message-container.error")).toHaveText(errorMessage2)
    await expect(page.locator(".error-message-container.error")).toBeVisible()

    //login with valid credentials
    await username.fill("standard_user")
    await passwrd.fill("secret_sauce")
    await loginBtn.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    console.log(await page.title())
    await expect(page).toHaveTitle("Swag Labs")

    //Getting product title and number of products, printing list of items

   
    await productTitle.first().waitFor({ state: "visible" })
    const productCount = await productTitle.count()
    console.log("Product count is : " + productCount)
    const productList = await productTitle.allTextContents()
    console.log("List of items :", productList)

    //sorting A to Z
    
    await filterDropdown.selectOption("az")
    const sortAtoZ = [...productList].sort()
    await expect(productList).toEqual(sortAtoZ)

    //sorting Z to A
    await filterDropdown.selectOption("za")
    const productList2 = await productTitle.allTextContents()
    const sortZtoA = [...productList2].sort().reverse()
    await expect(productList2).toEqual(sortZtoA)

    //sorting based on price low to high
    await filterDropdown.selectOption("lohi")
    const priceArray=await priceList.allTextContents()
    console.log(priceArray)
    const actualPrice=priceArray.map(price=>parseFloat(price.replace("$"," ")))
    console.log(actualPrice)
    const sortLtoH=[...actualPrice].sort((a,b)=>a-b)
    await expect(actualPrice).toEqual(sortLtoH)

    //sorting from high to low
     await filterDropdown.selectOption("hilo")
     const priceArray2=await priceList.allTextContents()
     console.log(priceArray2)
     const actualPrice2=priceArray2.map(price=>parseFloat(price.replace("$"," ")))
     console.log(actualPrice2)
     const sortHtoL=[...actualPrice2].sort((a,b)=>b-a)
    await expect(actualPrice2).toEqual(sortHtoL)

    
    const myProduct = "Sauce Labs Fleece Jacket"
    for (let i = 0; i < productCount; i++) {
        const currentProduct = await productTitle.nth(i).textContent()
        if (currentProduct == myProduct) {
            const addtoCart = await page.locator(".btn.btn_primary.btn_small.btn_inventory").nth(i)
            await addtoCart.click()
            console.log("Product in cart is :" + myProduct)
            break;

        }
    }
    
    await cartLink.click()
    await expect (page).toHaveURL("https://www.saucedemo.com/cart.html")
    const productName=await page.locator(".inventory_item_name").allTextContents()
    console.log("Produce added in cart is :" + productName)
    await expect(productName).toContain(myProduct)
    
    await checkOutBtn.click()
    
    await firstName.fill("Arathy")
    
    await lastName.fill("C R")
    
    await zip.fill("695017")
    
    await continueBtn.click()
    
    await finishBtn.click()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    const finalText=await page.locator(".checkout_complete_container").locator(".complete-header").textContent()
    console.log("Final text after order is completed : " + finalText)
    await expect (finalText).toContain("Thank you")





    await page.waitForTimeout(3000)
})




