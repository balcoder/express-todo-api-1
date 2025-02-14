const config = require("../config.js");
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(`mongodb+srv://${config.mongodb.userName}:${config.mongodb.password}@cluster0.pxzfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`)

module.exports.Todo = require('./todo')