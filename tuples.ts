// Tuples in TS

// Practice task 01:
type Person_type = readonly [string, number, boolean];

const Person_01:Person_type = ["Walid", 24, true];
const Person_02:Person_type = ['Tanjim', 25, false];

const displayPersonInfo = (person:Person_type) => {
    const [name, age, hasDrivingLicense] = person;

    return hasDrivingLicense ? `${name} can drive my car` : `${name} can't drive my car`;
}

console.log(displayPersonInfo(Person_01));
console.log(displayPersonInfo(Person_02));