// In TS, type alias is a way to give a name to a specific type or combination of types. It allows you to create a custom name for a type, making it easier to reuse & refer to the same type in different parts of your code. Type alias provide better readablity, organization & abstraction of complex types.

type PersonType =  {
    name: string;
    age: number;
    isStudent: boolean;
    address: {
        post: string;
        city: string;
        district: string;
        country: string
    },
    siblings: string[], 
    phone?: string
}

const personInfo: PersonType = {
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
}


// Homework-01:
type ProductType = {
    name: string,
    price: number,
    isAvailable: boolean,
    location?: string,
    quantity: number
}

const productDetails: ProductType = {
    name: 'Laptop',
    price: 45000,
    isAvailable: true,
    quantity: 4
}


// Practice task-01:
const calculateTotalPrice = (productDetails: ProductType):string => {
    return `${productDetails.name} total cost: ${productDetails.price * productDetails.quantity}`
}

// console.log(calculateTotalPrice(productDetails));