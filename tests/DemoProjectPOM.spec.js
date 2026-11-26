import { test, expect } from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { ProductPage } from '../Pages/ProductPage'
import { CheckoutPage } from '../Pages/CheckoutPage'
import { CartPage } from '../Pages/CartPage'
import { AfterCheckout, FinalPage } from '../Pages/AfterCheckout'
import { LogOut } from '../Pages/LogOut'
test("sauce demo", async ({ page }) => {

const uName="standard_user"
const pWord="secret_sauce"
const invalidUname="test"
const invalidpswrd="password"
 const myProduct = "Sauce Labs Fleece Jacket"
 const FName="Arathy"
 const LName="C R"
 const zip="695017"
const lp=new LoginPage(page)
await lp.navigatePage()
await lp.validateWrongPswrd(uName,invalidpswrd)
await lp.emptyCredentials()
await lp.validCredentials(uName,pWord)

const pp=new ProductPage(page)
await pp.productpagenavigation()
await pp.sortAtoZ()
await pp.sortZtoA()
await pp.lowtohigh()
await pp.hightolow()
await pp.addCart(myProduct)

//cart page
const cc=new CartPage(page)
await cc.cartpageNavigation(myProduct)


//checkout page
const cp=new CheckoutPage(page)
await cp.checkOut(FName,LName,zip)

//finalpage after checkout
const ac=new AfterCheckout(page)
await ac.FinalText()

 
//logging out
const lg=new LogOut(page)
await lg.Loggingout()
    
   

    
    
    

    
    

    
    

   
    

 
   
    
    
    
    





    await page.waitForTimeout(3000)
})




