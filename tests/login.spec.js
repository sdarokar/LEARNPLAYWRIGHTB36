import { test, expect } from "@playwright/test"
import { loginpage } from "../Pages/loginpage.po.js"

test("Verify login with valid credentials", async ({ page }) => {
    const login = new loginpage(page)
    await login.launchApp()
    await login.islogodiplayed()
    await login.loginwithcreds("Admin", "admin123")
    await login.loginSuccess()
})