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