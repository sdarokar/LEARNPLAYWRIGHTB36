

str1 = "Hello World"
str2 = "Good Morning"
str3 = str1.concat(" " + str2)
console.log(str3)


//Covert string to uppercase

str = "hello world".toUpperCase()
console.log(str)

//Covert string to lowercase

str4 = "HELLO WORLD".toLowerCase()
console.log(str4)

//Find thefirst 4 letters of the string
str5 = "Hello World".substring(0, 4)
console.log(str5)

str7 = "javascript"
//Check if the string contains "java" and "python"
str7.includes("java") //true
str7.includes("python") //false 
console.log(str7.includes("java")) //true
console.log(str7.includes("python")) //false  


//Enter in multiple lines
console.log("1. requirement analysys\n2. test case creation\n3. test plan\n4. test execution\n5. Bug reporting")