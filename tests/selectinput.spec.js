import {test, expect} from '@playwright/test'
test("select input",async ({page})=>{
    await page.goto ("https://selenium.qabible.in/form-submit.php")
    const formlink=page.getByRole("link",{name:'Select Input'})
    await formlink.click()
    const dropdown=page.locator("#single-input-field")
    await dropdown.selectOption("Red")
    const selectedcolour=await page.locator("#message-one").first().textContent()
    await expect(selectedcolour).toContain("Red")

    await page.waitForTimeout(3000)

})

test.only("multiple locators", async({page})=>{
    await page.goto ("https://selenium.qabible.in/form-submit.php")
    const formlink=page.getByRole("link",{name:'Select Input'})
    await formlink.click()
    const multi=page.locator("#multi-select-field")
    await multi.selectOption(["Red", "Yellow"])
    const button2=page.getByRole("button",{name: 'Get All Selected'})
    await button2.click()
    const message2=await page.locator("#message-two").textContent()
    console.log("Message is : " + message2)
    await page.waitForTimeout(2000)
    await multi.selectOption(["Green"])
    const button1=page.getByRole("button",{name:'Get First Selected'})
    await button1.click()
    const message1=await page.locator("#message-two").textContent()
    console.log("Message is : " + message1)

    await page.waitForTimeout(3000)


})