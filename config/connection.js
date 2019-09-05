require('dotenv').config({path: '../.env'});
// require("dotenv").config();
// Set up MySQL connection.
var mysql = require("mysql");
// For jawsDB
var connection;
//If deploying to Heroku, make sure you set up the JAWSDB add-on.
if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.PASSWORD,
        database: "burgers_db"
    });
}
// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;