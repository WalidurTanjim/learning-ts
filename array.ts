// Day-01:
// In TS, we can create & init arrays using various approaches.

// 01: Using square brackets
// 02: Using array constructors
// 03: Using theArray.of method

// Ex-01:
const numsArray: number[] = [1,2,3,4,5];

// Ex-02:
const numsArray1: number[] = new Array(1, 2, 3, 4, 5);

// Ex-03:
const namesArray: string[] = Array.of('Walid', 'Tanjim');

// console.log(numsArray, numsArray1, namesArray[1]);

// Ex-04:
const fruits: string[] = ["apple", "orange", "banana", "mango", "lichi"];
const newFruit = fruits.push("Water melon");
// console.log(newFruit);
// console.log(fruits);
const lastDataRemove = fruits.pop()
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
const doubleNumbers: number[] = numsArray.map((currentNumber: number) => currentNumber * 2);
// console.log(doubleNumbers);

// Ex-(2):
// const convertStringToNumber: string[] = numsArray.map((currentNumber: number) => `${currentNumber}`);
const convertStringToNumber: string[] = numsArray.map((currentNumber: number) => currentNumber.toString());
// console.log(convertStringToNumber);


//** 02: filter method:
// (1) filtering even numbers
// (2) filtering numbers greather than 3 */


// Ex-(1):
const filterEvenNumbers: number[] = numsArray.filter((currentNumber: number) => currentNumber % 2 === 0);
// console.log("Filter even numbers:", filterEvenNumbers);

// Ex-(2):
const numberBiggerThenThree: number[] = numsArray.filter((currentNumber: number) => currentNumber > 3);
// console.log("Number is bigger then three:", numberBiggerThenThree);

