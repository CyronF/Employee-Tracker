const connection = require("./connection");

class Store {
    constructor(connection) {
        this.connection = connection;
    }
    read() {
        return connection.query("SELECT * FROM employee;");

    }

}
module.exports = new Store(connection)