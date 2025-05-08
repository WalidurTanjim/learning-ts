const inputValue = (value: string | number): string | number => {
    if(typeof value === 'number'){
        return value * 2
    }else if(typeof value === "string"){
        return `Product ${value}`
    }else{
        throw new Error("Invalid input")
    }
}

// console.log(inputValue(10));
// console.log(inputValue("Car"));

// Homework task 01:



// Practice task 01:
type Person = {
    name: string;
    age: number
}
type Employee = {
    emp_id: number;
    department: string
}

// union operator
type EmployeeDetails = Person | Employee;

const personDetails: EmployeeDetails = {
    name: 'Walid',
    age: 24
}

// intersection operator
type EmployeeDetailsInt = Person & Employee;

const employee: EmployeeDetailsInt = {
    name: 'Walid',
    age: 24,
    emp_id: 111,
    department: "Web Developer"
}


// Practice task 02:
type User = {
    name: string;
    age: number
}
type MyLocation = {
    city: string;
    district: string;
    country: string
}

const userDls: User = {
    name: "Tanjim",
    age: 24
}

const userLcn: MyLocation = {
    city: "Tangail",
    district: "tangail",
    country: "bangladesh"
}

const createUserProfile = (User: User, MyLocation: MyLocation): string => {
    return `User name is: ${User?.name} from ${MyLocation?.city}`
}


// console.log(createUserProfile(userDls, userLcn))



// Homework task 01:
type UserType = {
    name: string;
    email: string
}
type AccountType = {
    accountId: number;
    accountType: string;
    balance: number
}

const accountHolder: UserType = {
    name: "WalidurTanjim",
    email: "walidur.tanjim@gmail.com"
};
const accountDetails: AccountType = {
    accountId: 1234567890,
    accountType: "Savings",
    balance: 50000
}

const combineUserAndAccount = (accountHolder: UserType, accountDetails: AccountType) => {
    return {...accountHolder, ...accountDetails}
}

const myCompleteInfo: UserType | AccountType = combineUserAndAccount(accountHolder, accountDetails);
// console.log(myCompleteInfo)