// In TS, object are used to represent data with key-value pairs. Each key in the object is a string (or a symbol in ES6) that maps to a value;

const person: {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        post: string;
        city: string;
        district: string;
        country: string
    },
    siblings: string[]
} = {
    name: 'Walid',
    age: 24,
    isStudent: true,
    address: {
        post: 'Daskin Khan',
        city: 'Dhaka',
        district: 'Dhaka', 
        country: 'Bangladesh'
    },
    siblings: ['Walid', "Rahman", 'Tanjim']
}


// Homework-01:
const products: {
    name: string,
    price: number,
    quantity: number
} = {
    name: 'ASUS Laptop',
    price: 45000,
    quantity: 3
}