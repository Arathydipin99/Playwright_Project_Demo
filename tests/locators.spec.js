import test from "@playwright/test";
test("locator test",async ({page})=>{
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.waitForTimeout(3000)
})