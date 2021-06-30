module.exports = {
    menu: { 
        name: "choice",
        type: "list",  
        message: "What would you like to do next?",
        choices: [
            "Search by employee name", 
            "Add an Employee"
        ]
},

searchByName: { 
    name: "name",
    message: "Employee name?"
},

addEmployee: [
    {
        name: "first_name",
        message: "What is the employee's first name?"
    },
    { 
        name: "last_name",
        message: "What is the employee's last name?"
    }    
]
}