import { test, expect } from '@playwright/test';

const creds = [{username: "Admin11", password: "admin1234"}, {username: "Admin1", password: "admin123"}, {username: "Admin", password: "admin1234"}]

creds.forEach(Element => {
test('Login with invalid credentials OHRM - ' + Element.username, async ({ page }) => {

    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(Element.username)
    await page.locator('//input[@name="password"]').fill(Element.password)
    await page.locator('//button[@type="submit"]').click()
    
})
})