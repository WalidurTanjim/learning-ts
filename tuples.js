"use strict";
// Tuples in TS
const Person_01 = ["Walid", 24, true];
const Person_02 = ['Tanjim', 25, false];
const displayPersonInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    return hasDrivingLicense ? `${name} can drive my car` : `${name} can't drive my car`;
};
console.log(displayPersonInfo(Person_01));
console.log(displayPersonInfo(Person_02));
