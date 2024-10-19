#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgCyan("********** Welcome To TypeScript Quiz*********"));
console.log(chalk.bold.red("\nEach Question is of 10 marks .\n"));

let marks :number = 0;

let userInput = await inquirer.prompt([
    {
    name :"question1",
    type :"list",
    message :"1.What is TypeScript primarily known for?",
    choices :["a.superset of JavaScript.",
              "b.standalone programming language.",
              "c.replacement for HTML.",
              "d.database management system"]
},
//a
{
    name :"question2",
    type :"list",
    message :"2.TypeScript supports which of the following features from ECMAScript 6 (ES6)?",
    choices :["a) Arrow functions","b) Template literals","c) Classes","d) All of the above"]
},//d

{
    name :"question3",
    type :"list",
    message :"3.TypeScript code can be written directly in which kind of file?",
    choices :["a) .ts","b) .js","c) .html","d) .css"]
},
//a
{
    name :"question4",
    type :"list",
    message :"4.What tool is commonly used to compile TypeScript code to JavaScript?",
    choices :["a) TSC (TypeScript Compiler)","b) Babel","c) Webpack","d) Angular CLI"]
},//a

{
    name :"question5",
    type :"list",
    message :"5.Which of the following is true about TypeScript?",
    choices :["a) It supports optional static typing",
              "b) It is a dynamically typed language",
              "c) It does not support classes",
              "d) It does not compile to JavaScript"]
},
//a
{
    name :"question6",
    type :"list",
    message :"6.Which keyword is used to define a variable in TypeScript?",
    choices :["a) var","b) let","c) const","d) all of the above"]
},//d

{
    name :"question7",
    type :"list",
    message :"7.Which keyword is used to define a constant variable in TypeScript?",
    choices :["a) var","b) let","c) const","d) static"]
 }, // const

{
    name :"question8",
    type :"list",
    message :"8.Which of the following is a valid TypeScript interface definition?",
    choices :["a) interface Person { name: string, age: number}",
              "b) interface Person = { name: string, age: number }",
              "c) type Person = { name: string, age: number }",
              "d) All of the above"]
},//a

{
    name :"question9",
    type :"list",
    message :"9.Which symbol is used to denote a type annotation in TypeScript?",
    choices :["a) #","b) $","c) :","d) @"]
},//c

{
    name :"question10",
    type :"list",
    message :"10.What does the 'void' type represent in TypeScript?",
    choices :["a) It represents an empty object",
              "b) It represents any data type",
              "c) It represents no value",
              "d) It represents a boolean value"]
},//c
]);


//This is called destructuring
const {question1 ,question2 ,question3,question4,question5,question6,question7,question8,question9,question10 } = userInput;

let correctOptions = ["a.superset of JavaScript.","d) All of the above","a) .ts","a) TSC (TypeScript Compiler)","a) It supports optional static typing","d) all of the above","c) const","a) interface Person { name: string, age: number}","c) :", "c) It represents no value",];

if(question1 === "a.superset of JavaScript.") marks += 10;
if(question2 === "d) All of the above") marks += 10;
if(question3 === "a) .ts") marks += 10;
if(question4 === "a) TSC (TypeScript Compiler)") marks += 10;
if(question5 === "a) It supports optional static typing") marks += 10;
if(question6 === "d) all of the above") marks += 10;
if(question7 === "c) const") marks += 10;
if(question8 ==="a) interface Person { name: string, age: number}" ) marks += 10;
if(question9 === "c) :") marks += 10;
if(question10 === "c) It represents no value") marks += 10;

console.log(chalk.magenta(`\n***************************************************************\n`));


console.log(chalk.bold.yellowBright(`Your total marks are ${marks}`));


console.log(chalk.magenta(`\n***************************************************************`));

function myAnswers (){
    console.log(`\n Correct options: ` , correctOptions);

    if( marks == 100){
        console.log(`\n Congratulations! You got full ${marks} marks.`);
         }
         else if(marks > 0){
            console.log(`\n You got ${marks} marks!`);
            }
            else{`\n unfortunately! you got ${marks} marks.`};
    
}

myAnswers()