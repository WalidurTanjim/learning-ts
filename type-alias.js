"use strict";
// In TS, type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse & refer to the same type in different parts of your code. Type alias provide better readablity, organization & abstraction of complex types.
const personInfo = {
    name: 'Walid',
    age: 24,
    isStudent: true,
    address: {
        post: 'Daskin Khan',
        city: 'Dhaka',
        district: 'Dhaka',
        country: 'Bangladesh'
    },
    siblings: ['Walid', "Rahman", 'Tanjim'],
};
const productDetails = {
    name: 'Laptop',
    price: 45000,
    isAvailable: true,
    quantity: 4
};
// Practice task-01:
const calculateTotalPrice = (productDetails) => {
    return `${productDetails.name} total cost: ${productDetails.price * productDetails.quantity}`;
};
// console.log(calculateTotalPrice(productDetails));
