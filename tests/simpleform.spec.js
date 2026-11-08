import test from '@playwright/test'
test("simple form", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/form-submit.php")
    await page.getByRole("link", {name: "Simple Form demo"}).click()
    await page.locator("#single-input-field").nth(0).fill("Hello, World!")
    await page.getByRole("button", {name:"Show Message"}).click()
    await page.locator("[placeholder='Enter Value']").nth(0).fill("5")
    await page.locator("#value-b").fill("10")
    await page.getByRole("button" , {name:"Get Total"}).click()
    await page.waitForTimeout(3000)

    
})