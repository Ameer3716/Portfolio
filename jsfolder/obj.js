let person = {
    name: "Ameer",
    age: 22,
    isStudent: true,
    displayname: function () {
        console.log(this.name);
    }
};

// Using Object Constructor (not recommended)
let person1 = new Object();
person1.name = "Ameer"; // Bad Practice
console.log(person1["name"]); // Good Practice
person1.isStudent = false;
console.log(person1.isStudent);

// Using Object.create()
let person2 = Object.create(null);
person2.name = "Yourself";
console.log(person2.name);

let keyName = "name";
console.log(person2[keyName]);

// Adding new properties using bracket notation
person1["city"] = "Mars";
console.log(person1);

// Nested Object Example
let university = {
    name: "Fast",
    Since: "2004",
    isfuzool: true,
    registeredcourses: {
        Course1: {
            title: "AI",
            creditHours: 3,
            semester: 6,
            isPassed: true,
            displayname: function () {
                console.log(this.title);
            }
        }
    }
};

// Adding new courses using bracket notation
university["registeredcourses"]["Course2"] = { title: "OOP" };
university["registeredcourses"]["Course3"] = { title: "OS" };
university["registeredcourses"]["Course4"] = { title: "CN" };

console.log(university["registeredcourses"]);

// Correct usage of Object.keys and Object.values
console.log(Object.keys(university)); // Get keys of university object
console.log(Object.values(university)); // Get values of university object

// Object Destructuring (Fixed)
let { name: uniName, isfuzool } = university;
console.log(uniName, isfuzool);

// Copying an Object Using Spread Operator
let currentStudent = { ...person1 };

// Constructor Function
function createPerson(name, isStudent) {
    this.name = name;
    this.isStudent = isStudent;
}

// Adding method to prototype
createPerson.prototype.greet = function () {
    return `Hello, ${this.name}`;
};

// Creating an instance and testing
let person3 = new createPerson("Ali", true);
console.log(person3.greet()); // Output: Hello, Ali
