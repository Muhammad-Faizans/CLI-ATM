#!/usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number  & show result
const randomNumber = Math.floor(Math.random() * 10 + 1 );

const answers= await inquirer.prompt([ 
    {
        name:"userGuessedNumber",
        type:"number",
        messsage:" please guess a number b/w 1-06:  ",
    },
]);

if( answers.userGuessedNumber === randomNumber ){
        console.log("CONGRATULATIONS") 
}else {
    console.log("YOU GUESSED WRONG NUMBER");
}
