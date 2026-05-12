//task1
console.log(typeof("10" + 5)) //output:"105" //datatype: string
console.log(typeof(10 + true)) //output:11 //datatype: number
console.log(typeof(false + null)) //output:0 //datatype: number
console.log(typeof("Hello" + undefined)) //output:"Helloundefined" //datatype: string
console.log(typeof([1,2] + 5)) //output:"1,25" //datatype: string

//task2

console.log(typeof("2"+5)); //string
console.log(typeof(true+3)); //number
console.log(typeof([1,2,3]+"3")); //string
console.log(typeof({k:5}+"3")); //string
console.log(typeof(null+3)); //number

//task3

console.log(Number("500")); //500
console.log(Number(true)); // 1
console.log(Number(false)); //1
console.log(Number(null)); //0
console.log(Number("abc")); //NaN
console.log(Number([100])); //100

//task4

console.log(Boolean("")); //false
console.log(Boolean("javacript")); //ture
console.log(Boolean(0)); // false
console.log(Boolean(1)); // ture
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // ture
console.log(Boolean({})); // ture

//task5

let mark = 45
if(mark>=35){
    console.log("Pass");
    
}else{
console.log("Fail");

}
//output:pass

//task6


let age = 20
if (age>=18) {

    console.log("Eligible");
    
}else{
    console.log("Not Eligible");
    
}
// output: Eligible 

//task7

let a = 50;
let b = 80;
let c = 30;

if (a > b && a > c) {
    console.log("A is greatest");
} else if (b > a && b > c) {
    console.log("B is greatest");
} else {
    console.log("C is greatest");
}
//output: B is greatest

//task8

let trafficlight = "green"
switch (trafficlight) {
    case "red":console.log("stop");
    
        
        break;
         case "yellow":console.log("ready");
    
        
        break;
         case "green":console.log("go");
    
        
        break;

    default:
        break;
}
//output: go

//task9

let username = "admin";
let password = "1234";

if (username == "admin") {
    if (password == "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Login");
    }
} else {
    console.log("Invalid Login");
}
//output: Login success


//task10

let hour = 14

if(hour>=1 && hour<=12){
    console.log("Good Morning");

}else if (hour>=13 && hour<=15) {
    console.log("Good Afternoon");
    
}else if (hour>=16 && hour<=19) {
    console.log("Good Evening");
    
}else if (hour>=20 && hour<=24) {
    console.log("Good Night");    
    
}
//output: Good Afternoon

console.log(true + true)        // 2
console.log("5" - 2)            // 3
console.log("5" + 2)            // "52"
console.log(null + 1)           // 1
console.log(undefined + 1)      // NaN
console.log(Boolean(" "))       // true
console.log(Number(true))       // 1


