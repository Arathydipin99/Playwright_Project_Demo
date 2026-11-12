import { test, expect } from '@playwright/test'
test("child window", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://selenium.qabible.in/window-popup.php")
    const facebookbtn = page.locator(".btn.btn-primary.windowSingle")
    console.log("parent page title is " + await page.title())

    const [newpage] = await Promise.all([
        context.waitForEvent("page"),
        facebookbtn.click()])
        await newpage.waitForLoadState()
        console.log("child page title is " + await newpage.title())

        await page.waitForTimeout(3000)
})