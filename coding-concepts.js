// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: There are 9 characters total in the string stored in variable cohort. cohort.length will return this value, which is printed by console.log.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: l
// b) Verify and explain: The variable greeting contains the string "Hello World". greeting[3] will return the value stored in index 3, which is l. Using console.log will return this value.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The variable languages is an array with four values stored inside it. The variable index is currently equal to 1. languages[index] will return the value stored in a particular index. Since index equals 1, it will return the string Ruby. console.log then prints this value out.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: This did return the array I thought it would. Instead an error was given, saying the above code was not a function. I guess this particular method can only be used on strings, not arrays. You could potentially do some manipulation to get the intended result though. Below is an example:

// weekendDays = weekendDays.join(" ")
// weekendDays = weekendDays.toUpperCase()
// weekendDays = weekendDays.split(" ")
// console.log(weekendDays)

// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: The variable dataTypes is an array. dataTypes.length will return a numerical value. typeof returns a string depending on the datatype used. In this case, since dataTypes.length is a number, it will return a number string. 