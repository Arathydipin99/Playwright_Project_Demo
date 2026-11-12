import {test, expect} from '@playwright/test'
test("alert message", async({page})=>{
await page.goto ("https://selenium.qabible.in/javascript-alert.php")
const greenbtn=page.locator(".btn.btn-success")

page.on("dialog", async (dialog)=>{
    await page.waitForTimeout(2000)
    console.log(dialog.message())
    await dialog.accept()

})
await greenbtn.click()
await page.waitForTimeout(3000)

})