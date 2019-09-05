//Set up Dependencies
// All of our router gets, posts, and puts are in this file
// Controllers act as an interface between Model and View components to process all the business logic and incoming requests, manipulate data using the Model component and interact with the Views to render the final output. For example, the Customer controller will handle all the interactions and inputs from the Customer View and update the database using the Customer Model. The same controller will be used to view the Customer data.
var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
    //Pass the burger data into the function
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name"
    ], [
            req.body.burger_name
        ], function (result) {
            // console.log(result)
            // Send back the ID of the new burger
            res.redirect('/');
            // res.json({ id: result.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    // console.log("condition", condition);
    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
        // if (result.changedRows == 0) {
        //     // If no rows were changed, then the ID must not exist, so 404
        //     return res.status(404).end();
        // } else {
        //     res.status(200).end();
        // }
    });
});

// router.deleteOne("/api/burgers/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     burger.deleteOne(condition, function (result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;