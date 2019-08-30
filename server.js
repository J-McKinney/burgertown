var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var routes = ("./controllers/burgers_controller.js");
var app = express();
var mysql = require("mysql");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "_db"
});
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});