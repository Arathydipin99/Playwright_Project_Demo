import {expect} from '@playwright/test'
export class LoginPage {
    constructor(page) {
        this.username = page.locator("#user-name")
        this.passwrd = page.locator("#password")
        this.loginBtn = page.getByRole("button", { name: 'Login' })
        this.page = page

    }

    async navigatePage() {
        await this.page.goto("https://www.saucedemo.com")

    }
    async validateWrongPswrd(uName,invalidpswrd) {
        await this.username.fill(uName)
        await this.passwrd.fill(invalidpswrd)
        await this.loginBtn.click()
        const errorMessage = await this.page.locator(".error-message-container.error").textContent()
        console.log("Error message displayed is :" + errorMessage)
        await expect(this.page.locator(".error-message-container.error")).toHaveText(errorMessage)
        await expect(this.page.locator(".error-message-container.error")).toBeVisible()

    }

    //login scenario with empty username and empty password

    async emptyCredentials() {
        await this.username.fill("")
        await this.passwrd.fill("")
        await this.loginBtn.click()
        const errorMessage2 = await this.page.locator(".error-message-container.error").textContent()
        console.log("Error message displayed is :" + errorMessage2)
        await expect(this.page.locator(".error-message-container.error")).toHaveText(errorMessage2)
        await expect(this.page.locator(".error-message-container.error")).toBeVisible()

    }
    
    //login with valid credentials
    async validCredentials(uName,pWord) {
        await this.username.fill(uName)
        await this.passwrd.fill(pWord)
        await this.loginBtn.click()
        

    }

}