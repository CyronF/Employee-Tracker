const conection = require("./connection");


class Store {
    constructor(connectonInstance) {
        this.connecton = connectonInstance
    }
    read(){
        return connecton.query("SELECT* FROM employees_db");
    }

        searchByName(name) {
            return this.connecton.query("SELECT * FROM employee WHERE = ?", name)
        }
    }



module.exports = new Store(connecton)