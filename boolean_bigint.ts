// Boolean & Bigint
// 1: Boolean Type: In TS, the boolean type represents a value that can be either ture or false. It is one of ths basic primitive types in the language.

const isEven = (num: number): boolean => {
    if(num % 2 === 0){
        return true
    }else{
        return false;
    }
}
// console.log(isEven(90));

const isDivisibleBy4And8 = (num: number): boolean => {
    if(num % 4 === 0 || num % 8 === 0){
        return true
    }else{
        return false;
    }
}
// console.log(isDivisibleBy4And8(88))




// 2: Bigint Type: It is a built-in tpe that allows your to work with numbers that are larget than the range supported by the retular number type.
// ? Bigint literals are written by appending the n suffix to an integer literal.
// ? In JS we can't read the whole number beyond 2 raise to power 53

// Practice 01:
let maxNumber: bigint = 90071992549999999999999n;
// console.log(maxNumber);

// Practice 02:
let anotherBigNumber = BigInt("9007199254740995")
// console.log(anotherBigNumber)


// Homework 01:
let sumOfBigInt: bigint = maxNumber + anotherBigNumber;
// console.log(sumOfBigInt);

// Homework 02:
let different: bigint = maxNumber - anotherBigNumber;
// console.log(different)

// Homework 03:
let bigMultiplicaiton: bigint = maxNumber * anotherBigNumber;
// console.log(bigMultiplicaiton);

// Homework 04:
let division: bigint = maxNumber / anotherBigNumber;
// console.log(division);