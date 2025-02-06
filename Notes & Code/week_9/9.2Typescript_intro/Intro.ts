/*
> Typescript 
 - TypeScript is a programming language developed and maintained by Microsoft. 
 - Typescript is a superset of javascript, meaning that any valid javascript code is also a typescript code. 
 - Typescript adds additional features like static typing, which helps developers catch errors during developement rather than at runtime. 
- Even if you dont explicitely define a type, typescript can often infer it based on the value assigned. 
- we know that our browsers can only understands js, typescript compiles down to the plain js, which means it can run on any browser or javascript runtime. It also provides better developers tools compare to the plain js code.

> UseCase
 - Typescript catches type related errors durnig deveopement, reducing runtime bugs. with static typing our code becomes more predictable and easier to maintain.

1. Types
- Typescript allows us to specify the type of data a variable can hold. this helps prevent unexpected behaviour and makes the code more predictable. 
>> Primitive types: string, number, boolean, null, undefined, symbol
>> Specia; types: any, unknown, void, never

*/

/*
Q. how does typescript code runs? 
- Typescript code never runs in your browser, your browser can only understand javascript. JS is the runtime language. 
- Typescript is something that compiles down to the javascript. when typescritp compiles down to the js, you get the type checking, if there is an error the conversion to the JS fails. 
- tsc is the official typescript compiler that you can use to convert Typescript code into Javascript

*/
let userName: string = "Aman Maurya";
let age: number = 18;
let isLoggedIn: boolean = true;

function user(fn: () => void) {}
const user1 = (fn: () => void) => {};

// Write a function that greets a user given their first name.
function greet(firstName: string) {
  console.log(`Hello ${firstName}`);
}
greet("Aman");

//Write a function that calculates the sum of two functions

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

// Return true or false based on if a user is 18+
function isAboveThan18(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isAboveThan18(2));

// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("hi there");
});

// interfaces
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; //optionally (if i dont pass the email then no any compilations errors occurs)
}

function isLegal1(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function greetUser(user: User) {
  console.log("hello " + user.firstName);
}

isLegal1({
  firstName: "Aman",
  lastName: "Maurya",
  age: 18,
});

// Impelmetnting Interfaces > terfaces have another special property. You can implement interfaces as a class.
interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}
class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}


// Types > very similar to interfaces, it lets you aggregate data together.
  type User1 = {
    firstName: string;
    lastName: string;
  age: number;
};


// Unions 
type greetArg = number | string | boolean

function hello(id : greetArg){
}
hello(1)
hello("1")

// Intersections
type Employee1 = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee1 & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
