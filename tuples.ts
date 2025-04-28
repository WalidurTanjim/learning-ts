// Tuples in TS

// Practice task 01:
type Person_type = readonly [string, number, boolean];

const Person_01:Person_type = ["Walid", 24, true];
const Person_02:Person_type = ['Tanjim', 25, false];

const displayPersonInfo = (person:Person_type) => {
    const [name, age, hasDrivingLicense] = person;

    return hasDrivingLicense ? `${name} can drive my car` : `${name} can't drive my car`;
}

// console.log(displayPersonInfo(Person_01));
// console.log(displayPersonInfo(Person_02));



// Homework task 01:
type ProductInfo = readonly [string, number, number, string, boolean];

const Product_01:ProductInfo = ["Laptop", 45000, 4, 'China', true];
const Product_02:ProductInfo = ["Mobile", 27000, 42, 'Bangladesh', false];

const displayProductInfo = (product:ProductInfo) => {
    const [name, price, quantity, manufacture, isAvailable] = product;
    return `${name} is ${isAvailable ? 'available now' : 'not available now'}`
}

// console.log(displayProductInfo(Product_01))
// console.log(displayProductInfo(Product_02))


// Homework task 02:
type SubjectGrade = readonly [string, number];

const Student_01:SubjectGrade[] = [
    ["Maht", 3.75],
    ["English", 3.88],
    ["Scient", 3.79]
];

const calculateAverage = (student:SubjectGrade[]) => {
    let gradeSum = 0;
    for(const [name, grade] of student){
        gradeSum = gradeSum + grade;
    }
    // console.log(gradeSum);
    const averageGrade = gradeSum / student.length;
    return averageGrade;
}

// console.log(calculateAverage(Student_01));

// Homework task 03:
type WeatherData = readonly [string, number, string];

const Weather_01:WeatherData[] = [
    ['Dhaka', 40.00, 'Hot'],
    ['Tangail', 25.75, 'Medium']
];

const displayWeather = (weather:WeatherData[]) => {
    for(const [name, temp] of weather){
        console.log(`${name} temp:: ${temp}`)
    }
}

// displayWeather(Weather_01);