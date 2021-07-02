const connection = require("./connection");
const { promisify } = require('util')

class Store{
    constructor(connection){
        this.connection = connection;
    }

    read() {
        return this.connection.query("SELECT * FROM employee;");
    }
    searchByName(name){
        return this.connection.query("SELECT * FROM employee WHERE =? name");
    }
    getDepartments(){
        return this.connection.query("SELECT * FROM department");
    }
    
    getRoles(){
        return this.connection.query("SELECT * FROM role");
    }
    addRole(){
        return this.connection.query("INSERT INTO role SET ?");
    }    
}

connection.query = promisify(connection.query) 
module.exports = new Store(connection)   
