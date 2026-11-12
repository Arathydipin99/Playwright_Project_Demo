import { test, expect } from '@playwright/test'
test("calendar", async ({ page }) => {
    await page.goto("https://selenium.qabible.in/date-picker.php")
    const dateinput = page.locator(".form-control.datepicker")
    await dateinput.click()
    //locator chaining
    const yearmonth = await page.locator(".datepicker-days").locator("th.datepicker-switch")
    await yearmonth.click()
    const monthrange = await page.locator(".datepicker-months").locator("th.datepicker-switch")
    await monthrange.click()
    const year = 2025
    const month = 11
    const date = 2
    while (true) {
        const range = await page.locator(".datepicker-years").locator("th.datepicker-switch").textContent()
        console.log("Year range is :" + range)
        const yeararray = range.split("-")
        const startyear = parseInt(yeararray[0])
        const endyear = parseInt(yeararray[1])
        console.log("Start year is :" + startyear)
        console.log("End year is :" + endyear)
        if (year >= startyear && year <= endyear) {
            break;

        }
        else if (year < startyear) {
            const prevbtn = page.locator(".datepicker-years").locator("th.prev")
            await prevbtn.click()
        }
        else {
            const nextbtn = page.locator(".datepicker-years").locator("th.next")
            await nextbtn.click()
        }
    }
    await page.locator(".datepicker-years").locator(".year",{hasText:year.toString()}).click()
    await page.locator(".datepicker-months").locator(".month").nth(month-1).click()
    await page.locator(".datepicker-days").locator(".day:not(.new)",{hasText:new RegExp(`^${date}$`)}).click()
    await page.waitForTimeout(3000)
})