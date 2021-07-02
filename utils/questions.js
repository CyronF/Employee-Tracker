module.exports = {
    menu: { 
        name: "choice",
        type: "list",  
        message: "Next Step?",
        choices: ["Search by employee name", "Add Employee", "exit"]           
    },

    searchByName: { 
       name: "name",
       message: "Employee name?"
    },

    addEmployee: [
       {
       name: "first_name",
       message: "What is the employees first name?"
       },
       { 
       name: "last_name",
       message: "What is the employees last name?"
       }    
    ]
    
}