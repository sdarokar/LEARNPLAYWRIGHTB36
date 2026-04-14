import { test, expect } from '@playwright/test';

test('To check if galery is not visible then click on portfolio', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/disappearing_elements")

    //await page.reload({ timeout: 3000 });
    if(await page.locator("//a[normalize-space(text())='Gallery']").isVisible()){
        await page.locator("//a[normalize-space(text())='Gallery']").click();
    

    }else{
        await page.locator("//a[normalize-space(text())='Portfolio']").click()
    }

})