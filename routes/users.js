var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Example with database connection
const users = require("../controllers/userController.js");

// Create a new User
app.post("/", users.create);

// Retrieve all Users
app.get("/", users.findAll);

// Retrieve a single User with id
app.get("/:id", users.findOne);

// Update a User with id
app.put("/:id", users.update);

// Delete a User with id
app.delete("/:id", users.delete);

// Delete all Users
app.delete("/", users.deleteAll);


module.exports = app;