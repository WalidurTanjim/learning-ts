"use strict";
// TS allows you to define optional & default parameters in functions.
// Optional parameters are denoted by appending a (?) symbol after the parameter name.
// Default parameter are specified by providing a default value in the parameter declaration.
// general function in TS
const greet2 = (name, id) => {
    return `Welcome ${name} & your id is ${id}`;
};
const emp = greet2("Walid", 5);
// console.log(emp);
// function with default parameters in TS
const greed3 = (name, id = 1) => {
    return `Welcome ${name} & your id is ${id}`;
};
const emp2 = greed3('Walid');
// console.log(emp2);
// function with optional parameters in TS
const greed4 = (name, id) => {
    if (id)
        return `Welcome ${name} & your id is ${id}`;
    return `Welcome ${name}`;
};
const emp3 = greed4('Walid');
// console.log(emp3);
