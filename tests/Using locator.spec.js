
import { test, expect } from '@playwright/test';
//import logindata from "../testdata/OHRMlogin.json"

test('Login to Orange HRM', async ({ page }) => {
    // Using testdata
    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

 //Locator using relative Xpath
   //await page.locator('//span[text()="Leave"]').click()

   //Locator using text
   //await page.locator('//p[text()="Forgot your password? "]').click()


})