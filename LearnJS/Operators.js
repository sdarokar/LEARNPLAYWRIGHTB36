const { ADDRCONFIG } = require("node:dns");

x = 5;
y= 10;
z= 3;
console.log(x, y, z);
console.log(x + y + z);
console.log(x + y + "z");
console.log(x + y + z +undefined);  // NaN is not  a number
console.log(x + y + z + null);  // null is treated as 0
console.log(20-24);
console.log(20*24);
console.log(20/24);
console.log(80%24);
i = 6;
i++
console.log(i);

// == loss equality operator
console.log(5 == 5);
console.log(5 == "5");  // true because of type coercion

// === strict equality operator
console.log(5 === 5);
console.log(5 === "5");  // false because of type coercion is not applied   
console.log(5 === 5.0);  // true because of type coercion is not applied
console.log("Sat"=="sat");  // false because of case sensitivity


//* Operator*//

console.log(5 > 3);  // true
console.log(5 < 3);  // false
console.log(5 >= 5);        // true
console.log(5 <= 5);        // true
console.log(5 != 3);  // true
console.log(5 != 5);  // false
console.log(5 !== 5);  // false because of type coercion is not applied
console.log(5 !== "5");  // true because of type coercion is not applied    

AND
OR
NOT

AND
console.log(true && true);  // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false);  // false      

OR
console.log(true || true);  // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false);  // false      

NOT
console.log(!true);  // false       
console.log(!false);  // true   


//------------------conditional operator/ ternery opertor--------------------


//x = 3

//y = 5

//z = 5

// condition = false

//condition ? value1 : value2

student1 = "SAT"
student2 = "MAT"

finalstu = 4===4 ? student1 : student2
console.log(finalstu)