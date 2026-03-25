import { test, expect } from '@playwright/test';
import logindata from "../testdata/OHRMlogin.json"

test('Login to Orange HRM', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(logindata.username)
    await page.locator('//input[@name="password"]').fill(logindata.password)
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})