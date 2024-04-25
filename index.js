#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("\n\t\t Welcome to Zubair - Word counter"));
console.log("=".repeat(60));
// promt the user to enter a sentece
let answer = await inquirer.prompt([
    {
        name: "sentece",
        type: "input",
        message: "enter a sentece",
    }
]);
// trimming the aeentece and spliting into the words based on spaces
let words = answer.sentece.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.yellow(words.length)}`));
console.log("=".repeat(60));
