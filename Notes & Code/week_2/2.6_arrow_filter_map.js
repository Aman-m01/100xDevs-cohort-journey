/*
> map, filter amd arrow functions

>> map 
-- The map() method is used to iterate over an array and create a new array with the results of calling a provided function on every element in the array. The original array is not modified. map() allows you to apply a function to every element in an array and returns a new array with the results.
-- syntax 
       array.map(callback(currentValue, index, array), thisArg);
       
>> filter 
-- The filter() method creates a new array with all elements that pass the test implemented by the provided function. The test function should return true or false. Elements for which the function returns true are included in the new array.
-- syntax  
       array.filter(callback(element, index, array), thisArg);

>> Arrow functions
-- Arrow functions are a shorthand way of writing functions in JavaScript. They were introduced in ES6 and allow you to write functions with a more concise syntax.
-- syntax  
       (param1, param2, ..., paramN) => expression

 */
function Sum(a,b){
    return a+b
}

const sum = (a,b)=>{   //arrow functions 
    return a+b
}
let result = sum(2,1)
console.log(result)

/*
> given an array , give me back a new array in which every value is multiplied by 2
[1, 2,3, 4, 5, 6, 7]
[2,4,6,8,10,12,14]
 */
let arr = [1,2,3,4,5,6,7]

// normal way
let newArray =[]
for(let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]*2)
}
console.log(newArray)

//by using map 
const ans = arr.map((i)=>i*2)
console.log(ans)


// given an input array, give me back all the even values from it 
let array = [22,242,244,2,555,65776,76]

//normal way 
const newArr = []
for(let i =0 ; i<array.length; i++){

    if(array[i]%2==0){
        newArr.push(array[i])
    }
}
console.log(newArr)

// by using filter functions
function filtering(n){
    if(n%2==0){
return true
    }
    else{
        return false;
    }
} 
const ans1 = array.filter(filtering)
console.log(ans1)


// short syntax - filter function
const filteredArray = array.filter((i)=>i%2==0)
console.log(filteredArray)