//array using num 
const myArr1 = [1, 2, 3, 4, 5, 6, 77]
const Friend = ["Aman", "Anshu", "Abhishek"]
console.log(myArr1)
console.log(myArr1[0])
console.log(myArr1[1])
console.log(myArr1[2])
console.log(myArr1[3])
console.log(myArr1[40])

//using for loop show all the element of array 
let newArray = [1, 2, 3, 4, 5, 6, 77]
for (let i = 0; i < newArray.length; i++) {
    const element = newArray[i];
    console.log(newArray[i])
}

// //Array methods 
const myArr2 = [1, 2, 3, 4, 5, 6, 77]
myArr2.push(8999)
myArr2.push(7777)
console.log(myArr2)
console.log(myArr2.pop())
console.log(myArr2)
myArr2.unshift(3)
myArr2.shift()
console.log(myArr2.includes(999900))
console.log(myArr2.indexOf(9))
console.log(myArr2.indexOf(2))
console.log(myArr2)

// //Slice and Splice Array methods 
const myArr = [1, 2, 3, 4, 5, 6, 7]
console.log(myArr.slice(0, 4))
console.log(myArr)

console.log(myArr.splice(0, 4))
console.log(myArr)
