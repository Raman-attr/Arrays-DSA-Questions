//7
// let age = prompt("Enter the age..");
// if(age===null){
//     console.error("you've canceled it..");
// }else{
//     if(age.trim()===""){
//         console.error("Please enter the age..");
//     }else{
//         age = Number(age);
//         if(isNaN(age)){
//             console.log()
//         }
//     }
// }

//8
// for(let i = 1 ; i<11 ; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

//9
// let counter = 0;
// for(let i = 1 ; i<16 ; i++){
//     if(i>8){
//         console.log(i);
//         counter++;
//     }
// }
// console.log(`Total no of count is : ${counter}`);

//10
// let user = "raman";
// let password = prompt("Enter the password");

// if(password===null){
//     console.error("you've canceled it..");
// }else{
//     if(password.trim()===""){
//         console.error("Please enter the password");
//     }else{
//         if(password!==user){
//             console.log("Not matched");
//         }else{
//             console.log("Correct password");
//         }
//     }
// }

//11
// let attempt = 0;
// let pass = "ramanQwerty";
// let password = prompt("Enter the password");
// attempt++;
// while(attempt<3 && password!==pass){
//     password = prompt("Enter the password");
//     attempt++;
// }
// if(attempt===3 && password!==pass){
//     console.error("Acount locked");
// }else{
//     console.log("Acount opened");
// }

// 12
// let counter = 0;
// let user = prompt("Enter the word..");
// while(user!=="stop"){
//     if(user==="yes") counter++;
//     user = prompt("Enter the word");
// }
// console.log(`Total number of YES is ${counter}`);

// 13
// for(let i = 1 ; i<51 ; i++){
//     if(i%7===0){
//         console.log(i);
//     }
// }

// 14
// let sum = 0;
// for(let i = 1 ; i<31 ; i++){
//     if(i%2 !==0){
//         console.log(i);
//         sum+=i;
//     }
// }
// console.log(`The final sum is : ${sum}`);

// 15
// let number = +prompt("Enter the number..");
// while(number%2!==0){
//     number = +prompt("Enter the number");
//     if(number%2===0){
//         console.log(number);
//         break;
//     }
// }

// 16
// let start = +prompt("Enter the first number..");
// let end = +prompt("Enter the second number..");
// for(let i = start ; i<end+1 ; i++){
//     console.log(i);
// }

//17
// let counter = 0;
// for(let i = 1 ; i<21 ; i++){
//     if(counter===3) break;
//     if(i%2 !==0){
//         console.log(i);
//         counter++;
//     }
// }

//18
// let count = 0;
// for(let i = 1 ;i<6 ; i++){
//     let num = prompt("Enter the number");
//     if(num>=0){
//         count++;
//     }
// }
// console.log(`The total no of +ve is : ${count}`);

//19
// let balance = 1000;
// let counter = 0;
// let flag = false;
// while(balance>0 && counter !==3){
//     let withdraw = +prompt("Enter the withdrawl amount");
//     counter++;
//     if(withdraw<=balance){
//         balance-=withdraw;
//     }else{
//         flag = true;
//         break;
//     }
// }
// if(flag===true){
//     console.log("Insufficient balance");
// }else{
//     console.log(`The balance amount is : ${balance}`);
// }

// Functions -> function declarations , function expression , fat arrow function

// function declarations
// function abcd(){

// }

// function expression
// let fnc = function(){

// }

// fat arrow function

// let abcds = ()=>{

// }

// Parameters and arguments

// function add(v1 , v2){ // This are my parameters
//     console.log(v1+v2);
// }
// add(11,22); // This are my arguments

// Parameters are placeholders or variables defined in a function declaration.
// They act as input variables that the function expects to receive.
// in example v1 and v2 -> parameters of the function (add).

//Arguments are the actual values you pass to the function when calling it.
// They  replace the parameters during execution.

// in example 11,22 are arguments.

// 11 replaces v1 and 22 replaces v2.


// Default , rest and spread parameters.

// Default parameters -> Default parameters in js are values that are automatically assigned to function parameters if no arguments is provided (or if the argumnent is undefined) when the function is called.

// Rest parameters -> Rest parameters (...) in js allow a function to accept any number of arguments as an array.
// They are useful when you don't know beforehand how many argumnets will be passed to a function



// Return value and early returns
//First class functions->
// In js , functions are fist-class citizens (or first-class functions) -- meaning functions are treated like any other variable.
// This is one of the most powerful features of js

// A language is said to have first-class fucntions if functions can be:
// "Stored in variables"
// "Passed as arguments to other functions"
// "Returned from other functions"


// High order functions
// A high order function (HOF) in javaScript is a function that either:
//1. Takes another function as an argument, or
//2. Returns a function as its result.

// It's possible javascript functions are first class citizens (they can be passed around like values.)

// A high-order function is a function that operates on other function -- either by taking them as parameters or by returning them.


// Pure vs impure functions
// In js , functions are often categorized as pure or impure, depending on how they behave and whether they affect the outside world.

// 1. Pure functions
// A pur functions is one that:
// Always returns the same output for the same input.
// Does not cause any side effects (doesn't modify anything outside the function).

//2. Impure functions
// Produces different results even with the same inputs ,or
// Has side effects , such as modifying variables , DOM, Files, logs, or , making API calls.



// Closures -> ek function jo return kare ek aur function aur return hone waala function humesha use kregaa parent fnc ka koi varialbe

// function abcd(){
//     let a = 12;
//     return function(){
//         console.log(a);
//     }
// }


// Lexical scoping
// Lexical scoping in js means a variable is accessible based on where it is written in the code, not from where it is called.

// JS decided which variables you can use by looking at the physical location of your code (its lexical position)


// Functions in javascript
//1-> classic function -- 
//2-> Nested Function
//3-> Scope chain function



// Understanding Immediately Invoked Function Expression(IIFE)

// An IIFE is a JavaScript function that executes immediately a soon as it is defined, used to create a private scope and avoid global variable pollution
// (function(){

//})();


// let arr = [66,4,7,33,45,9,0];
// let newarr = arr.sort(function(a,b){
//     return a-b;
// });

// let dec = arr.sort(function(a,b){
//     return b-a;
// });




//Practice Questions

//Ques 1 - Write a function sayHello() that prints "Hello JavaScript"
// function sayHello(){
//     console.log("Hello JavaScript");
// }
// sayHello();


//Ques 2 - Create a function add(a,b) that returns their sum and log the result
// function add(a,b){
//     console.log(`The sum of a and b is ${a+b}`);
// }
// add(4,6);

//Ques 3 - Write a function with a default parameter name = "Guest" that prints "Hi <name>".
function greeting(guest = "Guest"){
    console.log(`Hii ${guest}`);
}
greeting("Raman");

//Ques 4 - Use rest parameters to make a function that adds unlimited numbers.

function addUnlimited(...nums){
    let sum = 0;
nums.forEach(function(val){
   sum+=val;
});
console.log(sum);
}
addUnlimited(1,2,3);

function add(...num){
    let ans = num.reduce(function(acc,val){
        return acc+val;
    },0);
    console.log(ans);
}
add(1,2,3);

//Ques 5 - Create an IIFE that printts "I run instantly!".