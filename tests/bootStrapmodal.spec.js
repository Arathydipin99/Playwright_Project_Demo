import {test, exxpect} from '@playwright/test'
test("boot strap modal", async ({page})=>{
    await page.goto("https://selenium.qabible.in/bootstrap-modal.php")
    const launchbtn=page.getByRole("button",{name:"Launch modal"})
    await launchbtn.first().click()
    const modal=page.locator("#exampleModalCenter")
    const closebtn=modal.locator(".btn.btn-secondary")
    await closebtn.click()
    await page.waitForTimeout(3000)

})