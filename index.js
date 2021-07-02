const { prompt } = require ("inquirer");
const logo = require ("asciiart-logo");
const db = require("./db/connection");
const { inherits } = require("util");
const mysql = require("mysql");
const store = require("./db/Store");
const { allowedNodeEnvironmentFlags } = require("process");
const inquirer = require("inquirer");


init();

function init() {
    const logoText = logo({name: "Employee Manager"}).render();

    console.log(logoText); 

    loadMainPrompts();
}

async function loadMainPrompts() {

    const formattedChoices = choice.toLowerCase().trim;
switch (formattedChoices){
    case "search by employee name": return querySearchByName()
    case "add employee": return addEmployee()
    //case view all employees
    //case add role
    case "add role": return addRole()
    //case remove role
    //case view all depts
    //cae add dept
    //case remove dept
    //case quit

 }
}

async function addEmployee(){
    //get departments
    try{ 
        const departments = await store.getDepartments()
        //get roles
        const roles = await store.getRoles()
        //map data to role nmes
        const roleNames = roles.map (role => role.title)                       
        
        const employeeAnswers = await inquirer.prompt([
            ...questions.addEmployee, 
            //which dept
            {
                name: "department_id", 
                type: "list",
                message: "Employee of which department",
                choices: departments                
            },

            //which role
            {
                name: "role_id", 
                type: "list",
                message: "What is this employees role?",
                choices: roleNames                
            },      
    ])
    const department_id = departments.filter(department => department.title === employeeAnswers.department_id)[0].id

    //create new employee
    }
    catch(e) {
        console.log(e)
    }

    userMenu();
}
async function querySearchByName() {
    const { name } = await inquirer.prompt(questions.querySearchByName)
    

    userMenu();
}

//async function to view all employees
async function viewAllEmployees() {

}
console.table()
//async funtion to view by dept

//async function to add role
async function addRole() {
  const newRole = await inquirer.prompt([{
      type: "input", 
      name: "roleTitle", 
      message: "role title?"
   },
   {
      type: "input",
      name: "roleSalary", 
      message: "role salary?"
   }, 
   {
      type: "list", 
      name: "departmentId",
      message: "department?", 
      choices: [
          {id:1, name: "Sales"}, 
          {id:2, name: "Engineering"}, 
          {id:3, name: "HR"}, 
          {id:4, name: "Finance"}
        ]
    }
    ])
}   


//async function to remove role

//async function to view all depts

//async function to add dept

//async function to remove dept

//connection close

//start

userMenu()