"use strict";
// let fName: string = "Walidur";
// let lName: string = "Tanjim";
// let fullName: string = "Walidur Tanjim";
// let age: number = 24;
// let isMarried: boolean = false;
// console.log(fName, lName, fullName, age, isMarried);
// const sumFn = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(sumFn(5, 10));
// TODO: Arithmetic Operations:
// let firstNum:number = 10;
// let secondNum:number = 20;
// let result:number = firstNum + secondNum;
// console.log(result);
// let nanValue: number = NaN;
// console.log(typeof nanValue, nanValue);
// Practice 01:
let myString = "Hello, TypeScript!";
// Practice 02:
let firstName = "Walidur";
let lastName = "Tanjim";
let fullName = firstName.concat(lastName);
// console.log(fullName);
// Practice 03:
let sentence = "Alhamdulillah, I'm a Muslim. I wanna be a pure muslim as Prophet Mohammad (S:) & go to Jannat.";
let sentenceLength = sentence.length;
// console.log(sentenceLength)
// Practice 04:
let myChoice = "Alhamdulillah, I'm a Muslim. I wanna be a pure muslim as Prophet Mohammad (S:) & go to Jannat.";
let uppercaseText = myChoice.toUpperCase();
let lowercaseText = myChoice.toLocaleLowerCase();
// console.log(uppercaseText, lowercaseText);
// Homework 01:
let longText = "Alhamdulillah, I'm a Muslim. I wanna be a pure muslim as Prophet Mohammad (S:) & go to Jannat.";
let shortText = longText.slice(0, 10);
// console.log(shortText);
// Homework 02:
let fName = "Walidur";
let lName = "Tanjim";
let areEqual;
if (fName === lName) {
    areEqual = "true";
}
else {
    areEqual = "false";
}
// console.log(areEqual)
// Homeword 03:
let product = "Laptop";
let price = 45000;
let productInfo = `Product ${product} is priced at ${price} bangladeshi taka`;
console.log(productInfo);
