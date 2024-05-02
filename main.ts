#! /usr/bin/env node
import inquirer from "inquirer";
import { exit } from "process";

//inquirer     done
// array       done
//function     done
// operators   done


let todos : string[] = ["Shama","Huda","Rahim","Mona"];

async function createTodo(todos:string[]){
    do{ let ans = await inquirer.prompt({
        type: "list",
        message: "select an operation",
        name: "select",
        choices: ["Add","update","view","delete"],
    })

    if (ans.select == "Add"){
      let addTodo = await inquirer.prompt({
        type: "input",
        message:"Add item in the list",
        name:"todo",
      });
        todos.push(addTodo.todo);
        todos.forEach(todo => console.log(todo));
    }

    if (ans.select == "update"){
        let updateTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name: "todo",
        choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type: "input",
            message:"Add item in the list",
            name:"todo",
          });
          let newTodo = todos.filter(val =>val !== updateTodo.todo);
          todos = [...newTodo,addTodo.todo];
        
          todos.forEach(todo => console.log(todo));
}

if (ans.select == "view"){
    console.log("*** TO DO LIST ***");
    todos.forEach(todo => console.log(todo));
    console.log("*******************");

}
if (ans.select == "delete"){
    let deleteTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name: "todo",
        choices: todos.map(item => item)
        });
     let newTodo = todos.filter(val =>val !== deleteTodo.todo);
          todos = [...newTodo];
          todos.forEach(todo => console.log(todo));
}

} while(true)

}
createTodo(todos);