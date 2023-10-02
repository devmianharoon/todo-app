import inquirer from "inquirer";
let todos = [];
do {
    let answer = await inquirer.prompt({
        type: 'list',
        name: 'select',
        message: 'Select an operation',
        choices: ["Add", "Update", "View", 'Delete']
    });
    // console.log(answer);
    if (answer.select == "Add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            name: 'todos',
            message: 'Add New Todo:'
        });
        todos.push(addTodo.todos);
        console.log(todos);
    }
    if (answer.select == "Update") {
        let upDateTodo = await inquirer.prompt({
            type: 'list',
            name: 'todo',
            message: 'Select item to update',
            choices: todos.map(items => items)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            name: 'todo',
            message: 'Add New Todo:'
        });
        let newTodo = todos.filter(val => val !== upDateTodo.todo);
        todos = [...newTodo, addTodo.todo];
        console.log(todos);
    }
    if (answer.select == "View") {
        console.log(todos);
    }
    if (answer.select == "Delete") {
        let DeleteTodo = await inquirer.prompt({
            type: 'list',
            name: 'todo',
            message: 'Select item to update',
            choices: todos.map(items => items)
        });
        let newTodo = todos.filter(val => val !== DeleteTodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
} while (true);
