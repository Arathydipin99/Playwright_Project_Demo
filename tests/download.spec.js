import {test, expect} from '@playwright/test'
test("downloadtest", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const downloadbtn=await page.locator("#downloadButton")
    
    const [downloadFile]=await Promise.all([
        page.waitForEvent('download'),
        await downloadbtn.click()
    ])
    await downloadFile.saveAs('D:\\download file\\file.jpeg')

    await page.waitForTimeout(3000)

})

test.only("uploadtest", async({page})=>{
    await page.goto("https://demoqa.com/upload-download")
    const uploadFile=page.locator("#uploadFile")
    await uploadFile.setInputFiles("D:\\download file\\file.jpeg")
    await page.waitForTimeout(3000)

})