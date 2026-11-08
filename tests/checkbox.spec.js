import {test,expect} from '@playwright/test'
test("check box", async ({ page }) => {
    await page.goto ("https://selenium.qabible.in/index.php")
    const inputform=page.getByRole("link", {name:'Input Form'})
    await inputform.click()
    const checkboxdemo=page.getByRole("link",{name:"Checkbox Demo"})
    await checkboxdemo.click()
    const singlecheckboxdemo=page.getByRole("checkbox",{name:'Click on this check box'})
    await singlecheckboxdemo.check()
    await expect (singlecheckboxdemo).toBeChecked()
    const checkvalue=await singlecheckboxdemo.isChecked()
    console.log("Checkbox value is " + checkvalue)
    await expect (checkvalue).toBeTruthy()

    await singlecheckboxdemo.uncheck()
    const value2=await singlecheckboxdemo.isChecked()
    console.log("Checkbox value is " + value2)
    await expect (value2).toBeFalsy()
    await page.waitForTimeout(3000)

})