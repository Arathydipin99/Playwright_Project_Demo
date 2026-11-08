import {test, expect} from'@playwright/test'
test("prompt alert", async({page})=>{
    await page.goto("https://selenium.qabible.in/javascript-alert.php")
    const redbutton=page.locator(".btn.btn-danger")
    page.on("dialog",async(dialog)=>{
          await page.waitForTimeout(2000)
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        console.log(dialog.type())
     
        await dialog.accept("Arathy")
        await new Promise(resolve=>(setTimeout(resolve,3000)))
        //await page.pause()

    })
    await redbutton.click()

    await page.waitForTimeout(3000)
    

})