// //if-else
const age = 12
if (age >= 18) {
    console.log("eligible for voting")
} else {
    console.log("not eligible for voting")

}

// // shorthand 
let balance = 1500
if (balance <= 2000) (console.log("legal"));

const temprature = 42
if (temprature <= 50) {
    console.log("less than 50")
} else {
    console.log("greater than 50")
}

// // if-else if-else
let marks = 30
if (marks >= 90) {
    console.log("Grade A")
}
else if (marks >= 75) {
    console.log("Grade B")
}
else if (marks >= 60) {
    console.log("Grade C")
}
else {
    console.log("Grade D")

}

// Switch case statements 
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }

//code 
const day = 3
switch (day) {
    case 1:
        console.log("Sunday")
        break;

    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thrusday")
        break;
    case 6:
        console.log("Friday")
        break;

    case 7:
        console.log("Suturday")
        break;
    default:
        console.log("enter a valid day no")
        break;
}
