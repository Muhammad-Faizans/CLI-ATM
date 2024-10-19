#! /usr/bin/env node

console.log("Welcome to Currency Converter");

// import inquirer
import inquirer from "inquirer";

let while_condition:boolean=true 
    
while (while_condition === true){
let currency_value: {[ key : string]:number}={
    "USD":3.24,
    "EUR":3.04,
    "PKR":902.00,
    "OMR":1.25,
    "INR":270.65,
    "JPY":499.64,
    "KWD":1,
}

let answer = await inquirer.prompt([{
    type: "list", 
    name: "from",
    message: "Select your currency",
    choices: ["USD", "EUR", "PKR", "OMR","INR","JPY","KWD"],
},
{
    type: "list",
    name: "to",
    message: "Select your currency",
    choices: ["USD", "EUR", "PKR", "OMR","INR","JPY","KWD"],
},
{
    type: "number",
    name: "amount",
    message: "Enter your amount",
 }])

// formula to convert currrency : currency_value[answer.to]/ currency_value[answer.from]*answer.amount

console.log(currency_value[answer.to]/ currency_value[answer.from]*answer.amount);
Math.round(currency_value[answer.to]/ currency_value[answer.from]*answer.amount);

let user_answer=await inquirer.prompt([{
    type:"confirm",
    name:"selection",
    message:"do you want to continue?",
    default:true    
    ,
   }])
   if (user_answer.selection === false){
       while_condition = false;
   }
 };

