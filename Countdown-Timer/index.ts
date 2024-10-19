// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// printing a colorful WELCOME message on screen

console.log(chalk.yellow.bold("WELCOME TO THE WORD COUNTER APP"));
console.log(chalk.yellow.bold("======================================================================"));
console.log(chalk.yellow.bold("This app counts the number of words in a sentence"));
console.log(chalk.yellow.bold("======================================================================"));
console.log(chalk.yellow.bold("Let's get started"));    
console.log(chalk.yellow.bold("======================================================================"));

// asking the user to enter a sentence
let answer = await inquirer.prompt([
    {
       name: "sentence",
       type: "input",
       message: "Enter a sentence: ",
    }
]);

// trimming the sentence and splitting it into an array of words
let words = answer.sentence.trim().split(" ");

// printing the number of words
console.log(chalk.yellow.bold(`Number of words: ${words.length}`));

// printing the number of characters
console.log(chalk.yellow.bold(`Number of characters: ${answer.sentence.length}`));
