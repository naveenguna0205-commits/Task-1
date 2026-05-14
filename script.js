// =====================================
// Task 1 - Student Registration Form
// =====================================

let studentName = prompt("Enter Student Name:");
let department = prompt("Enter Department:");
let age = prompt("Enter Age:");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

/*
Output:
Welcome Naveen
Department: CSE
Age: 20
*/


// =====================================
// Task 2 - ATM Withdrawal System
// =====================================

let balance = 10000;
let amount = Number(prompt("Enter Withdrawal Amount:"));

if (amount >= 100 && amount <= balance) {
    console.log("Transaction Successful");
} else if (amount < 100) {
    console.log("Minimum withdrawal amount is 100");
} else {
    console.log("Insufficient Balance");
}

/*
Output:
Transaction Successful
*/


// =====================================
// Task 3 - Swiggy Discount Checker
// =====================================

let orderAmount = Number(prompt("Enter Order Amount:"));

let result = orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied";

console.log(result);

/*
Output:
Free Delivery Available
*/


// =====================================
// Task 4 - Instagram Login System
// =====================================

let username = prompt("Enter Username:");

if (username === "admin") {

    let password = prompt("Enter Password:");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}

/*
Output:
Login Success
*/


// =====================================
// Task 5 - Traffic Signal System
// =====================================

let signal = prompt("Enter Signal Color:");

switch (signal) {

    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}

/*
Output:
STOP
*/


// =====================================
// Task 6 - Employee Salary Calculator
// =====================================

function salaryCalculation(basicSalary, bonus) {

    let totalSalary = basicSalary + bonus;

    return totalSalary;
}

console.log(salaryCalculation(25000, 5000));

/*
Output:
30000
*/


// =====================================
// Task 7 - E-Commerce Cart Total
// =====================================

let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);

/*
Output:
Total Price: 1000
Average Price: 250
*/


// =====================================
// Task 8 - WhatsApp Contact Book
// =====================================

let contact = {
    name: "Naveen",
    phone: "9876543210",
    status: "Online"
};

for (let key in contact) {
    console.log(key + " : " + contact[key]);
}

/*
Output:
name : Naveen
phone : 9876543210
status : Online
*/


// =====================================
// Task 9 - Movie Ticket Booking
// =====================================

function payment() {
    console.log("Payment Successful");
}

function bookTicket(callback) {

    console.log("Ticket Booking Confirmed");

    callback();
}

bookTicket(payment);

/*
Output:
Ticket Booking Confirmed
Payment Successful
*/


// =====================================
// Task 10 - Food Delivery Time Tracker
// =====================================

function* deliveryTracker() {

    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let order = deliveryTracker();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);

/*
Output:
Order Confirmed
Preparing Food
Out for Delivery
Delivered
*/