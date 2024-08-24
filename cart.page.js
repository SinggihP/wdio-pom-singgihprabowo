import Page from "./page.js";

class CartPage extends Page {
    open(path) {
        return super.open("cart.html")
    }
}

export default new CartPage();