import test from "@playwright/test";
test("locator test",async ({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.locator("#validationCustom01").fill("Arathy")
    await page.locator(".form-control").nth(1).fill("CR")
    await page.locator("[placeholder='Username']").fill("arathy123")
    await page.locator("//input[@placeholder='City']").fill("Trivandrum")
    await page.locator("//*[@placeholder='State']").fill("Kerala")
    await page.getByPlaceholder("Zip").fill("695017")
    await page.getByLabel("Agree to terms and conditions").check()
    await page.getByRole("buttonawait page.waitForTimeout(3000)", {name:"Submit form"}).click()
    
})