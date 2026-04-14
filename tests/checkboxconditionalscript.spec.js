import { test, expect } from '@playwright/test';

test('Check the checkbox conditionally', async ({ page }) => {
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');


const statusofcheckbox = await page.locator('#checkBoxOption1').isChecked();

console.log(statusofcheckbox)
if(!statusofcheckbox){
    await page.locator('#checkBoxOption1').check()

}

})

