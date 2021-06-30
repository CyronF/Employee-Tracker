const store = require("./Main/db/Store");
const inquirer = require("inquirer")
const questions = require("./Main/db/utils/questions");



async function userMenu() {
const { choice } = await inquirer.prompt(questions.menu);

const formattedChoices = choice.toLowerCase().trim;
switch (formattedChoices){
    case "search by employee name": return querySearchByName()
    case "add employee": return addEmployee()
}
}

async function addEmployee(){
    //get departments
    try{ 
        const departments = await store.getDepartments()
        const { name } = await inquirer.prompt(questions.addEmployee)
    }
    catch(e) {
        console.log(e)
    }

    userMenu();

async function querySearchByName() {
    const { name } = await inquirer.prompt(questions.querySearchByName)
    
}
    userMenu();
}

//start
userMenu()


// const { prompt } = require ("inquirer");
// const logo = require ("asciiart-logo");
// const db = require("./Main/db/connection");
// const { inherits } = require("utils");
// const cTable = require("console.table");
// const mysql = require("mysql");

// init();

// function init() {
//     const logoText = logo({name: "Employee Manager"}).render();

//     console.log(logoText); 

//     loadMainPrompts();
// }

// async function loadMainPrompts() {
//     const { choice } = await prompt([
//         {
//             type: "list",
//             name: "choice", 
//             message: "What would you like to do?", 
//             choices: [
//                 {
//                     name: "View All Employees", 
//                     value: "VIEW_EMPLOYEES"
//                 },
//                 {
//                     name: "View All Employees By Department", 
//                     value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
//                 },
//                 {
//                     name: "Add Role",
//                     value: "ADD_ROLE"
//                 },
//                 {
//                     name: "Remove Role",
//                     value: "REMOVE_ROLE"
//                 }, 
//                 {
//                     name: "View All Departments",
//                     value: "VIEW_DEPARTMENTS"
//                 }, 
//                 {
//                     name: "Add Department", 
//                     value: "ADD_DEPARTMENT"

//                 },
//                 {
//                     name: "Remove Department", 
//                     value: "REMOVE_DEPARTMENT"
//                 },
//                 {
//                     name: "Quit", 
//                     value: "QUIT"
//                 }
//             ]        
//         }
//     ])
// }


