// To do list
import inquirer from "inquirer"
let condition = true;
let tasks = []
while (condition) {
let addtask = await inquirer.prompt([
    {
        name: "task",
        type: "input",
        message: "Enter your task"
    },
    {
        name:"input2",
        type:"confirm",
        message:"Do you want to add more task",
        default:false

    },
    {
        name: "input3",
        type: "list",
        message: "Do you want to delete task",
        choices: ["yes", "no"],
    },
])
tasks.push(addtask.task)
console.table(tasks);

if (addtask.input2 === true) {
    continue;
} else if (addtask.input3 === "yes") {
    tasks.pop();
    console.log(tasks);
} else {
    condition = false;
}
}



