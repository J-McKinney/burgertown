// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Set Handlebars.
var exphbs = require("express-handlebars");
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
// Set up Express
var app = express();
var PORT = process.env.PORT || 8080;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(routes);
app.use(methodOverride('_method'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("App listening on PORT: " + PORT);
});
console.log('node process: ' + process.env.NODE_ENV)