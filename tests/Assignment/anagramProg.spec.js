// str1 = "mary"
// str2 = "army"

// function anagramornot(str1, str2) {
//     const sortedStr1 = str1.split("").sort().join("")
//     const sortedStr2 = str2.split("").sort().join("")
//     if (sortedStr1 === sortedStr2) {
//         console.log("It is an anagram")
//     } else {
//         console.log("It is not an anagram")
//     }
      
// }
// anagramornot(str1, str2)


// find the first element in the array which is greater than 25
let arr = [10, 20, 30, 40];

let result = arr.find( x => x > 25);  // defines a function that takes a single parameter name.
console.log(result);

//find the index of the first element in the array which is equal to 40
let arr1 = [10, 20, 30, 40];
let result1 = arr1.findIndex(x => x === 40);

console.log(result1)

