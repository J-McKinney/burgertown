// // Dependencies
// const dotenv = require('dotenv').config();
// var express = require("express");
// var bodyParser = require("body-parser");
// var methodOverride = require("method-override");
// // Set Handlebars.
// var exphbs = require("express-handlebars");
// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");
// // Set up Express
// var app = express();
// var PORT = process.env.PORT || 8080;
// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
// // parse application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// // parse application/json
// app.use(bodyParser.json());
// app.use(routes);
// app.use(methodOverride('_method'));
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");
// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//     // Log (server-side) when our server has started
//     console.log("App listening on PORT: " + PORT);
// });
// module.exports = dotenv;
///////////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;
const app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");
app.use("/", routes);
app.listen(port);
module.exports = dotenv;