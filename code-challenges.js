// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly!
// If you get stuck, please leave comments to help us understand your thought process.

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 42
// var temp = 350
// var temp = 212
// var temp = -460
// var temp = "fish"

// if (temp === 212) {
//     console.log("212 is at boiling point")}
// else if(temp < -459.67) {
//     console.log("Impossible, value is below absolute zero")}
// else if (temp < 212) {
//     console.log(`${temp} is below boiling point`)}
// else if (temp > 212) {
//     console.log(`${temp} is above boiling point`)} 
// else {
//     console.log("Invalid, please input a number datatype")}

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 42, 9, 13]

// // Method 1:
// console.log((myNumbers1.concat(myNumbers2)).length)

// // Method 2:
// let newArray = myNumbers1
// for(let i = 0; i < myNumbers2.length; i++){
//     newArray.push(myNumbers2[i])
// }
// console.log(newArray.length)

// // Method 3:
// let newArray2 = myNumbers2
// for(let i = (myNumbers1.length - 1); i >= 0; i--){
//     newArray2.unshift(myNumbers1[i])
// }
// console.log(newArray2.length);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ohcE"

var currentCohort = "Echo 2021"

// // Method 1:
// let testing1 = currentCohort.split("")
// testing1.reverse()
// testing1 = testing1.join("")
// console.log(testing1)

// // Method 2:
// let testing2 = []
// for (let i = (currentCohort.length - 1); i >= 0; i--){
//     testing2.push(currentCohort[i])
// }
// testing2 = testing2.join("")
// console.log(testing2)

// // Note: May be able to use recursion for this as well, but I hate recursion...

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

var myArray = [13, 34, 5, 10, 27, 42]

// for(let i = 0; i < myArray.length; i++){
//     if(myArray[i] % 2 === 1 || myArray[i] % 2 === -1){
//         console.log("odd")
//     }
//     else if(myArray[i] % 2 === 0){
//         console.log("even")
//     }
//     else {
//         console.log(`Invalid datatype at index ${i}`)
//     }
// }


// --------------------5) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 42, 3

var number1 = 58
var number2 = 100

// var number1 = 27
// var number2 = 24

// var number1 = 30
// var number2 = 30

// var number1 = "big ole pupper"
// var number2 = "smol doggo"

// if(number1 > number2){
//     console.log(number1 - number2)
// } 
// else if (number1 < number2){
//     console.log(number2 - number1)
// }
// else if (number1 === number2){
//     console.log("These numbers are equal")
// }
// else{
//     console.log("One or more values are invalid datatypes")
// }