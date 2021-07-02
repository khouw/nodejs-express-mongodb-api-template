const dbConfig = require("../config/database.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

//Put your tables/collections here
db.users = require("./userModel.js")(mongoose);

module.exports = db;