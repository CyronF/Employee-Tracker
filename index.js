const { prompt } = require ("inquirer");
const logo = require ("asciiart-logo");
const db = require("./Main/db/connection");
const { inherits } = require("util");
//require("console.table");

init();

function init() {
    const logoText = logo({name: "Employee Manager"}).render();

    console.log(logoText); 

    loadMainPrompts();
}

async function loadMainPrompts() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice", 
            message: "wat would you like to do?", 
            choices: [
                {
                    name: "View All Employees", 
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department", 
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                }, 
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                }, 
                {
                    name: "Add Department", 
                    value: "ADD_DEPARTMENT"

                },
                {
                    name: "Remove Department", 
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "Quit", 
                    value: "QUIT"
                }
            ]        
        }
    ])
}