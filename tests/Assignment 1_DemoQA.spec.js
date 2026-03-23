import { test, expect } from '@playwright/test'

import data from "../testdata/textbox.json"

test('Verify the text box', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box')

    await page.locator("//input[@placeholder='Full Name']").fill(data.fullname)

    await page.locator("//input[@class='mr-sm-2 form-control']").fill(data.emailaddress)

    await page.locator("//textarea[@placeholder='Current Address']").fill(data.currentaddress)

    await page.locator("(//textarea[@class='form-control'])[2]").fill(data.parmanentaddress)

    await page.locator("//button[@class='btn btn-primary']").click()

    await page.locator("(//a[@data-discover='true'])[3]").click()

    await page.locator("(//input[@type='radio'])[1]").click()

    await expect(page.locator("//p[contains(.,'You have selected Yes')]")).toBeVisible()

    await page.close()
})