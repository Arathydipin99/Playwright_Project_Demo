import {test, expect} from '@playwright/test'
test("multiple window", async({page})=>{
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    const launchbtn=page.getByRole("button",{name:"Launch modal"})
    await launchbtn.nth(1).click()
    const modal=page.locator("#exampleModalCenter1")
    const launchbtn2=modal.getByRole("button",{name:'Launch another modal'})
    await launchbtn2.click()
    const modal2=page.locator(".modal-dialog.modal-dialog-centered")
    const closebtn=modal2.locator(".btn.btn-secondary")
    await closebtn.nth(1).click()
    //const closebtn2=modal.locator("#btn.btn-secondary")
    //await closebtn2.nth(0).click()

    await page.waitForTimeout(3000)

})