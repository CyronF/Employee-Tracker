const connection = require("./connection");

class DB {

    constructor(connection){
        this.connection = connection;
    }
    
    findAllEmployees(){
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee. last_name, role.title, department.name AS department"
        );
    }

    findAllPossibleManagers(employeeID){
        return this.connection.query(
            "SELECT id, first _name, last_name FROM employee WHERE id !=?"
        )
    }
}

module.exports = new DB(connection);