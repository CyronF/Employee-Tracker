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

    findAllPossibleManagers(employeeId){
        return this.connection.query(
            "SELECT id, first _name, last_name FROM employee WHERE id !=?", 
            employeeId
        );
    }    

    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }

    removeEmployee(employeeId) {
        return this.connection.query(
          "DELETE FROM employee WHERE id = ?", 
          employeeId
        );
    }

    updateEmployee(employeeId, roleId) {
        return this.connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?", 
            [roleId, employeeId]
        );
    }

}

module.exports = new DB(connection);