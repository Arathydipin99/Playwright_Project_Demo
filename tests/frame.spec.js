import {test, expect} from '@playwright/test'
test("frames", async ({page})=>{
    await page.goto("https://demoqa.com/frames")
    const frame=await page.frameLocator("#frame1")
    const frameheading=await frame.locator("#sampleHeading").textContent()
    console.log("Frame heading is : " + frameheading)
    await page.waitForTimeout(3000)
})