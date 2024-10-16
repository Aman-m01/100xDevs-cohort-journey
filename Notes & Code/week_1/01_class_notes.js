/*
>> Why languages? 
--  Language are used to write applications 
-- Developers write high level code in this language 
-- Every language has a compiler which converts the developers code into machine understandable code(0's and 1's)
-- Compiler converts high level code into 0's and 1's.  


>> Compiled vs Interpreted language 
-- Interpreted language are executed line by line by an Interpreter. the source code is translated into machine code at runtime. It can run partially if the error comes later.
   ex- Javascript, Python, Ruby

-- Compile language are translated into machine code by a compiler before executions. the entire source code is converted into executable file. It first need to compile then need to run, it usually don't compile if there is an error in code.
    ex- C, C++, java, Rust, Golang   

note: js is an interpreted language & C++ is a compiled language. Interpreted Language go line by line while executing, can partially run until an error comes.    

>> Single threaded nature of JS 
-- The single-threaded nature of JavaScript means that it executes one command at a time, in a sequential manner, using a single call stack. This is different from multi-threaded languages where multiple operations can be performed concurrently in different threads. this is why it is considered bad language for scalable systems.
*/


console.log("hello world") // console.log() just log the value on the screen

// array
const ages = [23, 21, 22, 56, 18]
const numberOfPeople = ages.length

for (let i = 0; i < numberOfPeople; i++) {
    if (ages[i] % 2 == 0) {
        console.log(ages[i])
    }
}

//array 
const personArray = ["Aman", "Rohan", "Sohan", "Raunak"]
const genderArray = ["male", "male", "male", "female"]
const numberOfUsers = personArray.length
for (let i = 0; i < numberOfUsers; i++) {
    if (genderArray[i] == "male") {
        console.log(personArray[i])
    }
}

// arrayOfObjects
const allUsers = [{
    firstName: "Aman",
    gender: "male"
}, {
    firstName: "Rohan",
    gender: "male"
},
{
    firstName: "Priya",
    gender: "female"
}]

for (i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"])
    }
}


/*
>> Functions 
1. Abstract out logic in your program
2. Take arguments as an input
3. Return a value as an output
4. You can think of them as an independent program that is supposed to do something given an input
5. Functions CAN take other functions as input 
6. callbacks -> passing the functions as an arguments
*/
function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}
function displayResult(data) {
    console.log("result of sum is: " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is: " + data);
}

const ans1 = sum(1, 2)
displayResult(ans1)


// setTimeout and setInterval
function greet() {
    console.log("Hello World")
}
// setTimeout(greet, 1100);
// setInterval(greet, 1000)


/*
>> Synchronous and Asynchronous 
-- Synchronous code are running lne by line. here code are executed in synchronous manner.
-- Asynchronous functions in programming are those that allow a program to start a potentially long running operations and continue executing other task without waiting for that operation to complete. This is particularly important to envorment like web browser or nodeJS, where waiting for a operations to finish(like fetching data from the server or reading a large file) could make the application unresponsive.
*/

// Class Assignments 
// 1. Write the program to greet a person given their first and last name
function greet(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName}`)
}
greet("Aman", "Maurya")

// 2. Write a program that greets a person based on their gender. (If else
function greetPerson(name, gender) {
    if (gender.toLowerCase() === 'male') {
        console.log("Hello Mr. " + name + "!");
    } else if (gender.toLowerCase() === 'female') {
        console.log("Hello Ms. " + name + "!");
    } else {
        console.log("Hello " + name + "! Welcome!");
    }
}
greetPerson("Aman", "male");

// 3. Write a program that counts from 0 - 1000 and prints (for loop)
for (i = 0; i <= 1000; i++) {
    console.log(i)
}

// Array & Objects
// 1. Write a program prints all the even numbers in an array
const numbers = [23, 232, 343, 4654, 64575, 564]
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}

// 2. Write a program to print the biggest number in an array
let num = [34, 72, 19, 8235, 56, 101, 48];
let biggest = num[0];

for (let i = 1; i < num.length; i++) {
    if (num[i] > biggest) {
        biggest = num[i];
    }
}
console.log("The biggest number is:", biggest);


// 3. Write a program that reverses all the elements of an array
let num2 = [34, 72, 19, 85, 56, 101, 48];
let reversedArray = [];
for (let i = num2.length - 1; i >= 0; i--) {
    reversedArray.push(num2[i]);
}

console.log("Reversed array:", reversedArray);


// functions 
// 1. Write a function that finds the sum of two numbers
function sum(a, b) {
    return a + b
}
const value = sum(23, 12)
console.log(value)

//2. Write another function that displays this result in a pretty format
function sum1(a, b) {
    console.log(`sum is: ${a + b}`)
}
sum1(23, 23)

// 3. Write another function that takes this sum and prints it in passive tense
function calculateSum(a, b) {
    return a + b;
}
function printSumInPassive(a, b) {
    const sum = calculateSum(a, b);
    console.log(`${sum} is the sum of ${a} and ${b}.`);
}
printSumInPassive(5, 10);


// loops, functions and callbacks (revision)
// Calculate sum from 0 to 100
let ans = 0
for (let i = 1; i <= 100; i++) {
    ans = ans + i;
}
console.log(ans)

/*
>> Function 
-- A function in javascript is a set of statement that performs a task or calculates a value.
-- it should takes some input and return an output where there is some obvious relationship between the input and the output.
 */

function findSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans = ans + i;
    }
    return ans
}
const answer = findSum(100)
console.log(answer)

// callback functions 
// find the square of the inputs 
function square(n) {
    return n * n
}

// find the sum of square of the inputs 
function sumOfSquare(a, b) {
    const val1 = square(a)
    const val2 = square(b)

    return val1 + val2;
}
console.log(sumOfSquare(4, 5));


//week- 1.5 -> Async function vs sync function, js browser architecture, promises , Async await
/*
> synchronous --> means things are happens in a sequential manner, only one thing happen a time.
> Asynchronous --> multiple things are context switching with each other.

> some common async functions 
- setTimeout  
- fs.readfile -> To read a file from your file system. 
- Fetch -> To fetch some data from API endpoint.
 
 */
//setTimeout
function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans;
}
function findSumTill100() {
    return findSum(100);
}
setTimeout(findSumTill100, 1000);
console.log("hello world");

// fs.readFile
// const fs = require('fs') //filesystem module
// fs.readFile('a.txt', 'utf-8', (err, data)=>{
//     console.log(data)
// } )

/* promises are the syntactical sugar that makes the code slightly more readable. 
> promise has three state 
- Pending: The initial state, neither fulfilled nor rejected.
- Fulfilled: The operation completed successfully, and the promise now holds a value.
- Rejected: The operation failed, and the promise holds an error.

*/
const fs = require("fs");

function kiratReadFile() {
    console.log("inside kiratReadFile");
    return new Promise(function (resolved) {
        console.log("Inside Promise");
        fs.readFile("a.txt", "utf-8", (err, data) => {
            console.log("Before Resolved");
            console.log(data);
        });
    });
}

//callback function to call
function onDone(data) {
    console.log(data);
}

var a = kiratReadFile();
console.log(a);
a.then(onDone);


/**
 >> js architecture for async code 
 1. Call Stack
-- The call stack is a data structure that keeps track of the function calls in your program. It operates in a "Last In, First Out" (LIFO) manner, meaning the last function that was called is the first one to be executed and removed from the stack.
-- When a function is called, it gets pushed onto the call stack. When the function completes, it's popped off the stack.

2. Web APIs
-- Web APIs are provided by the browser (or the Node.js runtime) and allow you to perform tasks that are outside the scope of the JavaScript language itself, such as making network requests, setting timers, or handling DOM events

3. Callback Queue 
-- The callback queue is a list of tasks (callbacks) that are waiting to be executed once the call stack is empty. These tasks are added to the queue by Web APIs after they have completed their operation.

4. Event loop
-- The event loop constantly checks if the call stack is empty. If it is, and there are callbacks in the callback queue, it will push the first callback from the queue onto the call stack for execution.
 */

/*
>> I/O heavy operations
-- I/O (Input/Output) heavy operations refer to tasks in a computer program that involve a lot of data transfer between the program and external systems or devices. These operations usually require waiting for data to be read from or written to sources like disks, networks, databases, or other external devices, which can be time-consuming compared to in-memory computations.
ex-
       Reading a file
       Starting a clock
       HTTP Requests

>> CPU bound tasks
-- CPU-bound tasks are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning that the performance bottleneck is the CPU itself.

>> I/O bound tasks
-- I/O-bound tasks are operations that are limited by the system’s input/output capabilities, such as disk I/O, network I/O, or any other form of data transfer. These tasks spend most of their time waiting for I/O operations to complete.
 */

