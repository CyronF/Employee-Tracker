const connection = require("./connection");

class Store{
    constructor(connection){
        this.connection = connection;
    }

    read() {
        return this.connection.query("SELECT * FROM employee")
    };
    searchByName(name){
        return this.connection.query("SELECT * FROM")
    };
    getDepartments(){
        return this.connection.query("SELECT * FROM department")
    }
}
connection.query = promisify(connection.query) 
module.exports = new Store(connection)   
