class LoginPage {
    constructor() {
        this.username = page.locator("#user-name")
        this.passwrd = page.locator("#password")
        this.loginBtn = page.getByRole("button", { name: 'Login' })
        this.productTitle = page.locator(".inventory_item_name")
        this.filterDropdown = page.locator(".product_sort_container")
        this.priceList= page.locator(".inventory_item_price")
        this.cartLink=page.locator(".shopping_cart_link")
        this.checkOutBtn=page.locator(".btn.btn_action.btn_medium.checkout_button ")
        this.firstName= page.locator("#first-name")
        this.lastName=page.locator("#last-name")
        this.zip=page.locator("#postal-code")
        this.continueBtn=page.locator(".submit-button.btn.btn_primary.cart_button.btn_action")
        this.finishBtn=page.locator("#finish")


    }
}