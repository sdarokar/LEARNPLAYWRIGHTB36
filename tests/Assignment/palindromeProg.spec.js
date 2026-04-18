
str = "madam"
function palindromeornot(str) {
reversestr = str.split("").reverse().join("")
if (str == reversestr) {
    console.log("it is a palindrome")
} else {
    console.log("it is not a palindrome")       
}}
palindromeornot(str)