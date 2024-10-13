// let, const, var
/* 
1. var
> Scope: var is function-scoped, meaning it's accessible within the function where it's declared. If declared outside a function, it's globally scoped.
> Hoisting: var variables are hoisted to the top of their scope, meaning they can be accessed before they are declared, but their value will be undefined until the declaration is reached.
> Re-declaration: You can re-declare a var variable within the same scope without causing an error.
*/
function example() {
    console.log(x); // undefined (due to hoisting)
    var x = 10;
    console.log(x); // 10
  }
  example();

/* 
2. let
> Scope: let is block-scoped, meaning it's only accessible within the block (enclosed by {}) where it's declared.
> Hoisting: let is also hoisted but is not initialized. Accessing it before declaration results in a ReferenceError.
> Re-declaration: You cannot re-declare a let variable within the same scope.
*/
console.log(x); // ReferenceError : Cannot access 'x' before initialization
function example1() {
    let x = 10;
    console.log(x); // 10
  }
  example1();


/* 
3. const
> Scope: const is also block-scoped like let.
> Hoisting: Similar to let, const is hoisted but not initialized.
> Re-declaration: You cannot re-declare a const variable within the same scope.
> Assignment: Variables declared with const cannot be reassigned. However, if the const variable is an object or array, you can still modify the contents of the object or array.
> we mostly used const unless we don't need to reassign the variables    
*/
const x = 10;
x = 20; // TypeError: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed: Modifying the array
console.log(arr); // [1, 2, 3, 4]

  