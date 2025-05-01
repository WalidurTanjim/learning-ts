"use strict";
// Tuples in TS
const Person_01 = ["Walid", 24, true];
const Person_02 = ['Tanjim', 25, false];
const displayPersonInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    return hasDrivingLicense ? `${name} can drive my car` : `${name} can't drive my car`;
};
const Product_01 = ["Laptop", 45000, 4, 'China', true];
const Product_02 = ["Mobile", 27000, 42, 'Bangladesh', false];
const displayProductInfo = (product) => {
    const [name, price, quantity, manufacture, isAvailable] = product;
    return `${name} is ${isAvailable ? 'available now' : 'not available now'}`;
};
const Student_01 = [
    ["Maht", 3.75],
    ["English", 3.88],
    ["Scient", 3.79]
];
const calculateAverage = (student) => {
    let gradeSum = 0;
    for (const [name, grade] of student) {
        gradeSum = gradeSum + grade;
    }
    // console.log(gradeSum);
    const averageGrade = gradeSum / student.length;
    return averageGrade;
};
const Weather_01 = [
    ['Dhaka', 40.00, 'Hot'],
    ['Tangail', 25.75, 'Medium']
];
const displayWeather = (weather) => {
    for (const [name, temp] of weather) {
        console.log(`${name} temp:: ${temp}`);
    }
};
// displayWeather(Weather_01);
