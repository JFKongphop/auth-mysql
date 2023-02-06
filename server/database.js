const mysql = require('mysql');

const myDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "social-test"
})

module.exports = myDb;

