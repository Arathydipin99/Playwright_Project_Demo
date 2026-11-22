import {test, expect} from '@playwright/test'
test("downloadtest", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const uploadFile=page.locator("#uploadFile")
    await uploadFile.setInputFiles("C:\\Playwright Project\\StudentDetails.xlsx")
    await page.waitForTimeout(6000)

})