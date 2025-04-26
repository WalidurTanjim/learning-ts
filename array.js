"use strict";
// Day-01:
// In TS, we can create & init arrays using various approaches.
// 01: Using square brackets
// 02: Using array constructors
// 03: Using theArray.of method
// Ex-01:
const numsArray = [1, 2, 3, 4, 5];
// Ex-02:
const numsArray1 = new Array(1, 2, 3, 4, 5);
// Ex-03:
const namesArray = Array.of('Walid', 'Tanjim');
// console.log(numsArray, numsArray1, namesArray[1]);
// Ex-04:
const fruits = ["apple", "orange", "banana", "mango", "lichi"];
const newFruit = fruits.push("Water melon");
// console.log(newFruit);
// console.log(fruits);
const lastDataRemove = fruits.pop();
// console.log(fruits);
// Day-02: loops in TS array
// for loop
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// for of loop
// for(const fruit of fruits) {
//     console.log(fruit)
// }
// forEach method
// fruits.forEach((currentFruit: string) => console.log(currentFruit));
// Day-03: map(), filter() in TS array
//** 01: map method:
// (1) Doubling each number
// (2) Converting number to string */
// Ex-(1):
const doubleNumbers = numsArray.map((currentNumber) => currentNumber * 2);
// console.log(doubleNumbers);
// Ex-(2):
// const convertStringToNumber: string[] = numsArray.map((currentNumber: number) => `${currentNumber}`);
const convertStringToNumber = numsArray.map((currentNumber) => currentNumber.toString());
// console.log(convertStringToNumber);
//** 02: filter method:
// (1) filtering even numbers
// (2) filtering numbers greather than 3 */
// Ex-(1):
const filterEvenNumbers = numsArray.filter((currentNumber) => currentNumber % 2 === 0);
// console.log("Filter even numbers:", filterEvenNumbers);
// Ex-(2):
const numberBiggerThenThree = numsArray.filter((currentNumber) => currentNumber > 3);
// console.log("Number is bigger then three:", numberBiggerThenThree);
// Homework tasks:
// Homework task for map:
// Task-01:
const upperCaseFruits = fruits.map((currentFruit) => currentFruit.toUpperCase());
// console.log(upperCaseFruits);
// Task-02:
const squareOfEachNumber = numsArray.map((currentNumber) => currentNumber * currentNumber);
// console.log(squareOfEachNumber);
// Hoework task for filter:
// Task-01:
const biggerStringArray = ['I am Walid', 'My name is Walid', "My father's name is Mustafizur rahman", 'I live in dhaka of bd', "You are so good", "We are going to Tangail"];
const biggerThanFifteen = biggerStringArray.filter((currentStr) => currentStr.length > 19);
// console.log(biggerThanFifteen);
// Task-02:
const startsACertainLetter = biggerStringArray.filter((currentStr) => currentStr.startsWith("Y"));
// console.log(startsACertainLetter);
