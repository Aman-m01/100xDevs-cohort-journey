/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestElement = numbers[0];
    numbers.forEach((number) => {
        if (number > largestElement) {
            largestElement = number;
        }
    });
    return largestElement;
}

module.exports = findLargestElement;