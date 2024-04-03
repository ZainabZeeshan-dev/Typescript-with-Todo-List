#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];
let condition = true;

console.log(chalk.blue("/n /t Welcome to Todo List Application/n"));

while(condition){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new Task :"

        }
]);
todolist.push(addTask.task);
console.log(chalk.green`${addTask.task} Task added in Todo list successfully`);

let addMoreTask = await inquirer.prompt([
    {
        name: "addmore",
        type: "confirm",  //answer confirm true or false
        message: "Do you want to add more task ?",
        default: "False",

    }
]);
  condition = addMoreTask.addmore
}
console.log("Your updated Todo-list:" , todolist);

