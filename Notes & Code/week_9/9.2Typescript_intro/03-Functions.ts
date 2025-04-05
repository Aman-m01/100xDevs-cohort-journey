// Functions in TypeScript allow you to encapsulate logic and reuse it across your code. TypeScript enhances JavaScript functions by adding static type checking, optional parameters, default values, overloading, and more.

// Function declarations
function greet(name: string): string {
  return `hello ${name}!`;
}
console.log(greet("Aman"));

const add = function (x: number, y: number): number {
  return x + y;
};
console.log(add(12, 1));

// arrow functions
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(2, 3));

// optional and default params
function greet1(name: string, age?: number): string {
  return age ? `Hello ${name}, you are ${age} years old. ` : `Hello ${name}.`;
}

// Default params
function greetUsers(name: string, greeting: string = "HEllo") {
  console.log(`${greeting}, ${name}!`);
}
greetUsers("Alice");
greetUsers("Bob", "Hi");

// Function Overloading
function combine(a: string, b: string): string; // Overload #1
function combine(a: number, b: number): number; // Overload #2
function combine(a: any, b: any): any {
  // Implementation
  return a + b;
}

console.log(combine(10, 20)); // ✅ 30
console.log(combine("Hello", "World")); // ✅ HelloWorld
