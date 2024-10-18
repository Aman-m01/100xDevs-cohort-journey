// Revision of Async js 
//callbacks 
function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}
function quad(n) {
    return n * n * n * n;
}
function sumOfSomethings(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}
let ans = sumOfSomethings(1, 2, quad)
console.log(ans)


//Async Functions 
// 1.setTimeout()
function onDone() {
    console.log("Hi there")
}
setTimeout(onDone, 1000);
console.log("After setTimeout")

// 2. Reading a file 
// const fs = require('fs')
// fs.readFile('notes.txt', 'utf8', (error, data) => {
//     console.log(data)
// })

/*
 -- promise is a result object that is used to handle asynchronous operations
 -- it can be in one of the three states: pending, fulfilled, or rejected
 -- pending: initial state, where operation has not started yet
 -- fulfilled: successful operation, where promise is resolved
 -- rejected: failed operation, where promise is rejected
 
*/
const promise = new Promise((resolve, reject) => {
    let condition = true;

    if (condition) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }
});

promise
    .then((result) => {
        console.log(result);  // "Success!" if fulfilled
    })
    .catch((error) => {
        console.error(error);  // "Failure!" if rejected
    });

/**
 >> key benefit of promise
 -- Avoid Callback Hell: Promises help prevent deeply nested callbacks, improving the readability and maintainability of code.
-- Better Error Handling: Promises allow error handling with .catch() at the end of the promise chain, which can handle errors from any step of the chain.
 */


// perform file operations 
/*
By using require("fs").promises, we're specifically importing the promise-based version of the file system module. This version allows us to use promises or async/await syntax with file system operations, which often leads to more readable and manageable asynchronous code compared to the traditional callback approach.
*/
const fs = require("fs").promises

//read content from a file 
function readFile(filePath) {
    return fs.readFile(filePath, 'utf8')

        .then((data) => {
            console.log("file Data:", data)
        })
        .catch((err) => {
            console.log("error: ", err)
        })
}

// write content to a file
function writeFile(filePath, content) {
    return fs.writeFile(filePath, content, 'utf8')
        .then(() => {
            console.log("file written successfully")
        })
        .catch((err) => {
            console.log("error: ", err)
            throw err;
        })
}

//append content to a file
function appendToFile(filePath, content) {
    return fs.appendFile(filePath, content, 'utf8')
        .then(() => [
            console.log("content append successfully")
        ])
        .catch((err) => {
            console.log("error: ", err)
            throw err;
        })
}

function main() {
    const filePath = 'notes.txt';

    writeFile(filePath, 'Hello, World!\n')
        .then(() => readFile(filePath))
        .then(() => appendToFile(filePath, 'new content added\n'))
        .then(() => readFile(filePath))
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

// Run the main function
main();

