/*
> Type annotation in TypeScript is a way to explicitly declare the type of a variable, function parameter, return value, or object property. It helps TypeScript enforce type safety by catching errors at compile time.

> Type inference is a feature in TypeScript where the compiler automatically determines the type of a variable without explicit type annotations. TypeScript analyzes the assigned value and infers the type accordingly. it also uses the contextual typing to infer types of variables based on the locations of the variables. 

> Basic Types 
- TS supports basics javascript types such as string, number, boolean, null, undefined, and symbol.
*/
let userName: string = "Aman Maurya";
let age: number = 18;
let isLoggedIn: boolean = true;
let isAvaiable: boolean | string = false;

/*

> Array ___________________________________________________________________________________________________________________
- Arrays in TypeScript allow storing multiple values of the same type in a single variable. TypeScript enhances arrays with strong type checking, ensuring type safety at compile time.

*/

let numbers: number[] = [12, 23, 34, 53];
let members: string[] = ["Aman", "Raushan", "Rahul"];
let users: Array<string> = ["RJ", "Raj"];

let colors: readonly string[] = ["red", "green", "orange", "black"]; // it you don't want to array to be modified, use readonly.

// Array of objects -> we can store objects inside an array
interface User {
  id: number;
  name: string;
}
let Users: User[] = [
  { id: 1, name: "Aman" },
  { id: 2, name: "raj" },
];
console.log(Users);

// 2D array
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]);

// Union types Array -> If a array holds multiple types use a union type (|)
let mixedArray: (string | number | boolean)[] = [1, "HEllo", "World", true];
console.log(mixedArray);

// any[] -> if the array can hold any use any[], but it disabling type safety
let randomArray: any[] = [1, "text", true, { key: "value" }];
console.log(randomArray);

/*
> Tuple _____________________________________________________________________________________________________________
- A tuple in TypeScript is a special type of array that allows storing a fixed number of elements with specific types at each position. Unlike regular arrays, tuples enforce strict ordering and type constraints.
- A tuple is defined using square brackets [] with types specified for each element.

*/

let person: [string, number] = ["Aman", 12]; //  Here, the first element must be a string, and the second must be a number.

let Employee: [string, number, boolean?] = ["Rj", 12]; // optional element in a tuple using ?

let coordinates: readonly [number, number] = [10, 20]; // To prevent modifying tuple elements, use readonly.

/*
> Tuple vs Array 
-  A tuple is a fixed-length collection where each element has a predefined type, meaning the order and data types of elements are strictly enforced. 
- An Array is a flexible collection where elements typically share the same type, and its length can vary dynamically
*/

/*
> Type alias ______________________________________________________________________________________________
- A Type Alias is a way to create a custom name for a type. It allows you to define complex types in a more readable and reusable way.
- Type aliases cannot be re-opened (extended) like interfaces.

- syntax 
    type AliasName = existingType;

*/
type ID = string | number;

let userID: ID;
userID = 123;
userID = "Aman1212";

// type alias for objects
type User1 = {
  name: string;
  age: number;
};

const user: User1 = {
  name: "Alice",
  age: 25,
};

// for functions signature
type Add = (x: number, y: number) => number;

const add: Add = (a, b) => a + b;
console.log(add(5, 10)); // 15

// _______________________________________________________________________________________________
/*
> Special types 

1. any 
  - Represents any type—completely disables TypeScript’s type checking. Use it only when you don’t know the type in advance (but avoid using it if possible).

2. unknown 
 - Similar to any, but with stricter type rules, You cannot directly assign an unknown value to a variable of a known type without type checking. 

3. void (no return value)
 - used for functions that do not return a value. 

4. Null 
 - Represents a deliberate absence of value. In strict mode (strictNullChecks: true), null is only assignable to null or any. Useful when you want to explicitly clear a variable.

5. undefined (Value Not Assigned)
 - Represents an uninitialized or missing value. A variable that is declared but not assigned a value has undefined by default.  

*/
