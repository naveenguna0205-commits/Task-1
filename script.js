// ======================================================
// 1. API Task - User Names Uppercase
// ======================================================

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {

    const upperCaseUsers = data.map((user) =>
      user.username.toUpperCase()
    );

    console.log("1. User Names Uppercase");
    console.log(upperCaseUsers);

   

  });





// ======================================================
// 2. API Task - Expensive Products
// ======================================================

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {

    const expensiveProducts = products.filter(
      (product) => product.price > 100
    );

    console.log("2. Expensive Products");
    console.log(expensiveProducts);

    

  });





// ======================================================
// 3. Date Concept Task - Digital Clock
// ======================================================

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log("3. Digital Clock");
console.log(hours + " : " + minutes + " : " + seconds);






// ======================================================
// 4. String Concept Task - Username Checker
// ======================================================

let userName = "   Naveen Gunasekaren   ";

let finalName = userName.trim().toUpperCase();

console.log("4. Username Checker");
console.log(finalName);

console.log(finalName.includes("Gunasekaren"));







// ======================================================
// 5. Array Concept Task - Student Rank System
// ======================================================

const marks = [450, 300, 700, 200, 900];

const sortedMarks = marks.sort((a, b) => b - a);

const top3Marks = sortedMarks.slice(0, 3);

console.log("5. Student Rank System");
console.log(top3Marks);

