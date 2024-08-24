describe('Test Saucedemo', () => {
    it('Test 1 - Login Successfully', async () => {
        await browser.url("https://www.saucedemo.com/")

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@type="submit"]')
        const cartIcon = await browser.$("#shopping_cart_container")

        await usernameTextbox.addValue("standard_user")
        await passwordTextbox.addValue("secret_sauce")
        await loginButton.click()

        await browser.pause(5000)
        await expect(cartIcon).toBeDisplayed()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(browser).toHaveTitle('Swag Labs')

    });
    it('Successful login using visual-user', async () => {
        await browser.url('https://www.saucedemo.com/')

        const usernameTextbox = await browser.$("#user-name")
        const passwordTextbox = await browser.$("#password")
        const loginButton = await browser.$('//input[@value="Login"]')

        
        const cartIcon = await browser.$("#shopping_cart_container")


        await usernameTextbox.waitForDisplayed({ timeout: 3000 })
        await usernameTextbox.setValue("visual_user")
        await passwordTextbox.setValue("secret_sauce")
        await loginButton.click()

        await expect(cartIcon).toBeDisplayed()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')  
    });
});