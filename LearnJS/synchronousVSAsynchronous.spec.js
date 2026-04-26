

// console.log("Raju")

// setTimeout(() => 
//     console.log("SAT"), 4000)

//     console.log("MAT")



// to make the above code to run in asynchronous way we can use setTimeout function

//callback function

// By using promises Asynchronous way

console.log("Raju")

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve("Data fetched successfully");
        }, 2000);
    });
}       
fetchData()
    .then((data) => {
        console.log(data);      

    })
    console.log("MAT")