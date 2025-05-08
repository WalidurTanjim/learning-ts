"use strict";
const inputValue = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === "string") {
        return `Product ${value}`;
    }
    else {
        throw new Error("Invalid input");
    }
};
const personDetails = {
    name: 'Walid',
    age: 24
};
const employee = {
    name: 'Walid',
    age: 24,
    emp_id: 111,
    department: "Web Developer"
};
const userDls = {
    name: "Tanjim",
    age: 24
};
const userLcn = {
    city: "Tangail",
    district: "tangail",
    country: "bangladesh"
};
const createUserProfile = (User, MyLocation) => {
    return `User name is: ${User?.name} from ${MyLocation?.city}`;
};
const accountHolder = {
    name: "WalidurTanjim",
    email: "walidur.tanjim@gmail.com"
};
const accountDetails = {
    accountId: 1234567890,
    accountType: "Savings",
    balance: 50000
};
const combineUserAndAccount = (accountHolder, accountDetails) => {
    return { ...accountHolder, ...accountDetails };
};
const myCompleteInfo = combineUserAndAccount(accountHolder, accountDetails);
// console.log(myCompleteInfo)
