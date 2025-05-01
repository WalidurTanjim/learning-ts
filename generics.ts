// Generics:
// In Ts, Generics allows you to create a reusable components or functions that can work with multiple data type.

// Practice task 01:
const logAndReturn = <W>(value:W):W => {
    return value;
}

const stringValue = logAndReturn<string>("I'm Walidur Rahman Tanjim");
const numberValue = logAndReturn<number>(24);
const booleanValue = logAndReturn<boolean>(true);
// console.log(stringValue);
// console.log(numberValue);
// console.log(booleanValue);


// Homework task 01:
