import {test,expect} from '@playwright/test'

test("radio button", async ({page})=>{
    await page.goto ("https://selenium.qabible.in/index.php")
    const inputform=page.getByRole("link", {name:'Input Form'})
    await inputform.click()
    const radiobtn=page.getByRole("link", {name:"Radio Buttons Demo"})
    await radiobtn.click()
    const femaleradiobtn=page.getByRole("radio", {name:"Female",exact:true})
    await femaleradiobtn.first().click()
    const showvaluebtn=page.getByRole("button",{name:'Show Selected Value'})
    const radiovalue=page.getByText("Radio button 'Female' is checked")
    await expect(radiovalue).not.toBeVisible()
   
    await showvaluebtn.click()
    await expect(radiovalue).toBeVisible()
    const messagevalue=await radiovalue.textContent()
    console.log("Message is : " + messagevalue)
    await expect(radiovalue).toHaveText(messagevalue)
    await expect(messagevalue).toContain("Female")
   
    await page.waitForTimeout(3000)
})

test("radio button demo", async({page})=>{
    await page.goto ("https://selenium.qabible.in/index.php")
    const inputform=page.getByRole("link", {name:'Input Form'})
    await inputform.click()
    const radiobtn=page.getByRole("link", {name:"Radio Buttons Demo"})
    await radiobtn.click()
    const radiofemale=page.getByText("Female",{exact:true})
    await radiofemale.nth(0).click()
    await page.waitForTimeout(3000)

})