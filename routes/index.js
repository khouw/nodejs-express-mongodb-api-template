var express = require("express");
var app = express();

//Here you can put your routers
//Example:
app.use("/users", require('./users'));

module.exports = app;