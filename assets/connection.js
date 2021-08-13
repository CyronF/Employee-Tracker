require("dotenv").config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER, 
  password:process.env.DB_PASS, 
  database: "employeedb"
});

connection.connect((err)=> {
  if (err) throw err;
});


module.exports = connection;