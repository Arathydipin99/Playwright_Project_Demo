import test from '@playwright/test'
test("First test",async({browser})=>{
const context = await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.flipkart.com/")
})

test("Second test",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.amazon.in/")

})