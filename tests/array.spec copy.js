// arr = [1, 2, 4, 9, 3, 5]

// //arrange this array in decending order

// arrd = arr.sort().reverse()
// console.log(arrd)
// console.log(arr.length)
// console.log(arr[1])

//Read all menuitem

// import { test, expect } from '@playwright/test';
// //import logindata from "../testdata/OHRMlogin.json"

// test('Login to Orange HRM', async ({ page }) => {
//     // Using testdata
//     await page.goto("/web/index.php/auth/login")
//     await page.locator('//input[@name="username"]').fill("Admin")
//     await page.locator('//input[@name="password"]').fill("admin123")
//     await page.locator('//button[@type="submit"]').click()
//     await page.waitForTimeout(5000)
//     const menuItems = await page.locator('//a[class="oxd-main-menu-item"]').allTextContents()

//     console.log(menuItems)
// });

str = "SATISH"

arr = str.split("")
console.log(arr)

str1 = "thios is java script"

arr1 = str1.split(" ")  
console.log(arr1)


str2 = "thios is java script class"

arr2 = str2.split("a")
console.log(arr2)


arr4 = ["SATISH", "D"]

console.log(arr4.join(""))


// find the first element in the array which is greater than 25
let arr = [10, 20, 30, 40];

let result = arr.find( x => x > 25);  // defines a function that takes a single parameter name.
console.log(result);

//find the index of the first element in the array which is equal to 40
let arr1 = [10, 20, 30, 40];
let result1 = arr1.findIndex(x => x === 40);

console.log(result1)
