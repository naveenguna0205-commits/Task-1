// ==========================================
// 5 Real-Time JavaScript Questions
// Topic : Array + Object + HOF + Spread
// ==========================================


// 1. Student Attendance System

let presentStudents = ["Arun", "Kumar", "Priya"];
let absentStudents = ["Rahul", "Sneha"];

let allStudents = [...presentStudents, ...absentStudents, "Vijay"];

console.log("1. Final Students Array:");
console.log(allStudents);


// Output:
// 1. Final Students Array:
// [ 'Arun', 'Kumar', 'Priya', 'Rahul', 'Sneha', 'Vijay' ]



// 2. E-Commerce Cart

let mobile = {
    brand: "Samsung",
    price: 25000
};

let charger = {
    type: "Fast Charger",
    warranty: "1 Year"
};

let cartDetails = {
    ...mobile,
    ...charger,
    deliveryDate: "20-May-2026"
};

console.log("\n2. Final Cart Object:");
console.log(cartDetails);


// Output:
// 2. Final Cart Object:
// {
//   brand: 'Samsung',
//   price: 25000,
//   type: 'Fast Charger',
//   warranty: '1 Year',
//   deliveryDate: '20-May-2026'
// }



// 3. Food Delivery App

function orderFood(...items) {

    console.log("\n3. Food Order Details:");
    console.log("Total items ordered:", items.length);
    console.log("First item:", items[0]);
    console.log("Last item:", items[items.length - 1]);
}

orderFood("Pizza", "Burger", "Pasta", "Ice Cream");


// Output:
// 3. Food Order Details:
// Total items ordered: 4
// First item: Pizza
// Last item: Ice Cream



// 4. Employee Salary Filter

let employees = [
    { name: "Ravi", salary: 45000 },
    { name: "Meena", salary: 60000 },
    { name: "Ajay", salary: 75000 },
    { name: "Divya", salary: 40000 }
];

let highSalaryEmployees = employees.filter(emp => emp.salary > 50000);

console.log("\n4. Employees with Salary Above 50000:");
console.log(highSalaryEmployees);


// Output:
// 4. Employees with Salary Above 50000:
// [
//   { name: 'Meena', salary: 60000 },
//   { name: 'Ajay', salary: 75000 }
// ]



// 5. Online Game Score Board

let scores = [100, 200, 150, 300, 250];

let totalScore = scores.reduce((total, score) => total + score, 0);

console.log("\n5. Total Score of All Players:");
console.log(totalScore);


// Output:
// 5. Total Score of All Players:
// 1000
