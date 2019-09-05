// selectAll()
// insertOne()
// updateOne()
// deleteOne()

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  //Select all burgers from database.
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      //This cb is sent into our burgers_controller file
      cb(res);
    });
  },
  //Create function to create/add a burger.
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  //Update function to update burger devoured state.
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  }
  // ,
  // deleteOne: function(condition, cb) {
  //   orm.deleteOne("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;