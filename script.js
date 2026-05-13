// ===============================
// Task 1 — Basic Function
// ===============================

function welcomeUser(name) {
    console.log("Welcome " + name);
}

welcomeUser("Naveen");


// ===============================
// Task 2 — Parameter + Return
// ===============================

function squareNumber(num) {
    return num * num;
}

console.log(squareNumber(5));


// ===============================
// Task 3 — Object Function
// ===============================

const employee = {
    name: "Rahul",
    salary: 50000,

    employeeBonus: function(bonus) {
        console.log(this.name);
        console.log(this.salary + bonus);
    }
};

employee.employeeBonus(5000);


// ===============================
// Task 4 — Scope Checking
// ===============================

function checkScope() {

    if (true) {
        var a = "VAR";
        let b = "LET";
        const c = "CONST";
    }

    console.log(a); // Works

    // console.log(b); // Error
    // console.log(c); // Error
}

checkScope();


// ===============================
// Task 5 — Arrow Function
// ===============================

const add = (a, b) => {
    console.log(a + b);
};

add(5, 3);


// ===============================
// Task 6 — Callback Function
// ===============================

function multiply(a, b) {
    return a * b;
}

function calculator(callback, x, y) {
    console.log(callback(x, y));
}

calculator(multiply, 5, 2);


// ===============================
// Task 7 — Generator Function
// ===============================

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


// ===============================
// Task 8 — Default Parameter
// ===============================

function student(name, course = "JavaScript") {
    console.log(name);
    console.log(course);
}

student("Arun");
student("Vijay", "React");


// ===============================
// Task 9 — Currying
// ===============================

function multi(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));


// ===============================
// Task 10 — Spread Operator
// ===============================

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];

console.log(mergedArray);


// ===============================
// Task 11 — Object Spread
// ===============================

const obj1 = { name: "Navi" };
const obj2 = { role: "Developer" };

const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);


// ===============================
// Task 12 — Rest Operator
// ===============================

function numbers(...num) {
    console.log(num);

    let sum = 0;

    for (let n of num) {
        sum += n;
    }

    console.log(sum);
}

numbers(1, 2, 3, 4);


// ===============================
// Mini Challenge 🔥
// Student Management System
// ===============================

const students = [];

// Add Student
function addStudent(name, marks) {

    const student = {
        name,
        marks
    };

    students.push(student);

    console.log(name + " added successfully");
}

// Print Students
function printStudents() {

    console.log("Student List");

    students.forEach((stu, index) => {
        console.log(
            index + 1,
            stu.name,
            stu.marks
        );
    });
}

// Callback Function
function calculateMarks(mark) {
    return mark + 10;
}

// Add Bonus Marks
function bonusMarks(callback) {

    const updatedStudents = students.map(student => {
        return {
            ...student,
            marks: callback(student.marks)
        };
    });

    console.log("Updated Marks");

    updatedStudents.forEach(student => {
        console.log(student.name, student.marks);
    });
}

// Rest Operator Example
function totalMarks(...marks) {

    let total = marks.reduce((a, b) => a + b, 0);

    console.log("Total Marks:", total);
}


// Function Calls
addStudent("Naveen", 80);
addStudent("Yuganika", 90);

printStudents();

bonusMarks(calculateMarks);

totalMarks(80, 90, 70, 60);