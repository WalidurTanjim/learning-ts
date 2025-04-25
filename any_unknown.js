"use strict";
// ANY VS UNKNOWN Types in TypeScript
// *** ANY Type: The ANY type is the most flexible type in TS. It essentially turns off all type checking for the veriable or expressions it is applied to.
//** Use cases of ANY type in TS:
// 1: Working with dynamic data: When dealing with data from dynamic sources like user inputs, network responses or deserialized JSON objects, the any type can be useful.
// 2: Migration from JavaScript: When migrating an existing JS codebase to TS. */
let myFavNum = 5;
myFavNum = "Walid";
myFavNum = false;
// *** UNKNOWN Types in TypeScript
// *** UNKNOWN Type: The unknown type is a safer alternative to any because it still enforces type checking and type safety.
// Variables of type unknown can hold values of any type but you must perform type checks or type assertions before using them in specific ways.
// let myFavNum1 = 55;
// myFavNum1 = true;
// myFavNum1.map(() => {})
let num2;
num2 = 5;
num2 = "Walid";
num2 = true;
if (typeof num2 === "number") {
    // console.log(num2 + 5)
}
else if (typeof num2 === "boolean") {
    // console.log(num2)
}
else {
    // console.log(num2)
}
