// Enum in TS
// Enums in TS are commonly used when your want to represent a set of related values and choose one value from multiple options. Enums provide a convenient way to define a set of named values and associate then with specific meanings.

// In TS, when enum constants are not explicitly assigned numeric values, they are automatically assigned incremental numeric values starting from 0. The default numeric value for the first enum constant is 0 and subsequent enum constants receive values incremented by 1.

// Defile enum
enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?:string;
    email:string;
    password:string;
    role: Roles
}

const loginUserOne:LoginDetails = {
    name: "Walid",
    email: "admin@gmail.com",
    password: "asdf,1234",
    role: Roles.admin
}

const loginUserTwo:LoginDetails = {
    name: "Tanjim",
    email: "user@gmail.com",
    password: "asdf,1234",
    role: Roles.user
}

const isAdmin = ( user:LoginDetails ): string => {
    const { name, email, role } = user;
    return role === "admin" ? `${name} is allow to edit the website` : `${name} is not allow to edit the website`;
}

// console.log(isAdmin(loginUserOne))
// console.log(isAdmin(loginUserTwo))