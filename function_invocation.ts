// Function Invocation: To execute a function, you simply invoke it by using it's name followed by parentheses.
// User can provide arguments (actual value) for the parameters defined in the function declaration.

const greet = (name: string, age: number): string => `Welcome, ${name} & your age is ${age}`
// console.log(greet("Walid", 24));

// Practice 01:
const isPalindrome = (palin: string): boolean => {
    let myPlain = palin?.split('').reverse().join('');
    if(myPlain === palin){
        return true
    }else{
        return false
    }
}

// console.log(isPalindrome("123210"));


// Homework 01:
const calculativeAverage = (myArr: number[]): number => {
    let sum = 0;
    for(const num of myArr){
        sum = sum + num;
    }
    return sum / myArr.length
}
// console.log(calculativeAverage([1, 2, 3, 4, 5]));


// Homework 02:
const findMaxValue = (numArray: number[]): number => {
    let maxVal: number = 0;
    for(const num of numArray) {
        if(maxVal < num){
            maxVal = num;
        }
    }
    return maxVal;
}

// console.log(findMaxValue([2, 55, 1, 8, 4, 9, 0]));