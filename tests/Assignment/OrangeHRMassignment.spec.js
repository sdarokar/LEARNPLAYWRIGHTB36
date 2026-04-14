import { test, expect } from '@playwright/test';
//import logindata from "../testdata/OHRMlogin.json"

test('To check the paygrade', async ({ page }) => {
    // Using testdata
    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator("//span[text()='Admin']").click()
    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()
    await page.locator("(//a[@role='menuitem'])[2]").click()
    await page.locator("//button[contains(.,'Add')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Johnson12")
    await page.locator('(//button[@type="submit"])').click()
    await expect(page.locator("//h6[text()='Edit Pay Grade']")).toBeVisible()
    await page.close()
})

test('To check the employment status', async ({ page }) => {
    // Using testdata
    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator("//span[text()='Admin']").click()
    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()
    await page.locator("(//a[@role='menuitem'])[3]").click()
    await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Active21")
    await page.locator('(//button[@type="submit"])').click()
    await expect(page.locator("//h6[text()='Employment Status']")).toBeVisible()
    await page.close()

})

test('To check the Job Categories', async ({ page }) => {
    // Using testdata
    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator("//span[text()='Admin']").click()
    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()
    await page.locator("//a[normalize-space(text())='Job Categories']").click()
    await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("ITSupport")
    await page.locator('(//button[@type="submit"])').click()
    await expect(page.locator("//h6[text()='Job Categories']")).toBeVisible()
    await page.close()

})

test('To check the Work Shifts', async ({ page }) => {
    // Using testdata
    await page.goto("/web/index.php/auth/login")
    await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('//button[@type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator("//span[text()='Admin']").click()
    await page.locator("(//i[@class='oxd-icon bi-chevron-down'])[2]").click()
    await page.locator("//a[normalize-space(text())='Work Shifts']").click()
    await page.locator("//button[contains(.,'Add')]").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Morning Shift12")
    await page.locator("//button[@type='submit']").click()
    await expect(page.locator("//h6[text()='Work Shifts']")).toBeVisible()
    await page.close()
})