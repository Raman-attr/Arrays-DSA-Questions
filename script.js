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
let balance = 1000;
let counter = 0;
let flag = false;
while(balance>0 && counter !==3){
    let withdraw = +prompt("Enter the withdrawl amount");
    counter++;
    if(withdraw<=balance){
        balance-=withdraw;
    }else{
        flag = true;
        break;
    }
}
if(flag===true){
    console.log("Insufficient balance");
}else{
    console.log(`The balance amount is : ${balance}`);
}
