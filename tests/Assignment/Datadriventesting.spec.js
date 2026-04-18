import { test, expect } from '@playwright/test';
//import logindata from "../testdata/OHRMlogin.json"

const addemployees = {

    emp1: { firstname: "SAT1", lastname: "SATL1", employeeid: "123411" },
    emp2: { firstname: "MAT1", lastname: "MATL1", employeeid: "567811" },
    emp3: { firstname: "CAT1", lastname: "CATL1", employeeid: "910111" },

}
for (let i in addemployees) {


    test('verify user can add employees' + i, async ({ page }) => {
        // Using testdata
        await page.goto("/web/index.php/auth/login")
        await page.locator('//input[@name="username"]').fill(process.env.APP_USERNAME)
        await page.locator('//input[@name="password"]').fill(process.env.APP_PASSWORD)
        await page.locator('//button[@type="submit"]').click()
        //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await page.waitForTimeout(5000)
        await page.locator("//span[text()='PIM']").click()
        await page.waitForTimeout(5000)
        await page.locator("//a[normalize-space(text())='Add Employee']").click()

        await page.locator('(//input[contains(@class,"oxd-input oxd-input--active")])[2]').fill(addemployees[i].firstname)

        //await page.locator('//input[@placeholder="Middle Name"]').fill("WebDriver")

        await page.locator('//input[@placeholder="Last Name"]').fill(addemployees[i].lastname)

        await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(addemployees[i].employeeid)
        await page.waitForTimeout(5000)
        await page.locator('//button[@type="submit"]').click()
    });
}