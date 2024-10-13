// for loop -> The for loop allows you to run a block of code a specific number of times.
for(i = 0 ; i<= 100; i++){
    console.log(i)
}

// while loop -> The while loop continues to execute a block of code as long as the specified condition is true.
// let i = 0;
// while (i < 5) {
//     console.log(i); 
//     i++;
// }

// do..while loop -> he do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once.
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// for..of loop -> The for...of loop iterates over iterable objects (like arrays and strings) and returns the values of the elements.
// const array = [10, 20, 30];
// for (const value of array) {
//     console.log(value); 
// }

// for..in loop -> const object = { a: 1, b: 2, c: 3 };
// for (const key in object) {
//     console.log(`${key}: ${object[key]}`); 
// }


// Array.forEach() Method -> The forEach() method executes a provided function once for each array element.
const array = [1, 2, 3];
array.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`); 
});


