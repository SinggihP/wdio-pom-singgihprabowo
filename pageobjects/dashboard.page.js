import Page from "./page.js";

class DashboardPage extends Page {
    open(path) {
        return super.open("inventory.html")
    }

    get cartIcon() {
        return $("#shopping_cart_container");
    }

    async validateOnPage() {
        this.cartIcon.waitForDisplayed({ timeout: 10000 })
        expect(this.cartIcon).toBeDisplayed()
        
        browser.pause(5000)
    }
}

export default new DashboardPage();