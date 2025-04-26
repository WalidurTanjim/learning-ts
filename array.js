"use strict";
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
