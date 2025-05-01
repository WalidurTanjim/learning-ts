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
const createUserProfile = (User, MyLocation) => {
    return `User name is: ${User?.name} from ${MyLocation?.city}`;
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
console.log(createUserProfile(userDls, userLcn));
