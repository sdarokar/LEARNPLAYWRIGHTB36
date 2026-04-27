import { expect } from "@playwright/test"

export class loginpage{


    constructor(page){
        this.page = page
        this.logo = page.locator('//img[@alt="company-branding"]')
        this.username = page.locator('//input[@name="username"]')
        this.password = page.locator('//input[@name="password"]')
        this.loginbtn = page.locator('//button[@type="submit"]')
        this.loginErrorMessage = page.locator('//p[text()="Invalid credentials"]')

    }
async launchApp(){

    await this.page.goto('/web/index.php/auth/login')
}

async islogodiplayed(){

    await expect(this.logo).toBeVisible()
}

async loginwithcreds(username,password){

    await this.username.fill(username)
    await this.password.fill(password)
    await this.loginbtn.click()

}
async loginSuccess(){
    await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
}

async loginfailure(){
    await expect(this.loginErrorMessage).toBeVisible()
}
}