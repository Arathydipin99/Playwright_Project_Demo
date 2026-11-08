import {test} from '@playwright/test'
test("javascript alert", async ({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
const buttonyellow=page.locator(".btn.btn-warning")
page.on("dialog", async (dialog)=>{
    await page.waitForTimeout(2000)
    console.log(dialog.message())
    //await dialog.accept()
    await dialog.dismiss()
})
await buttonyellow.click()

await page.waitForTimeout(3000)


})