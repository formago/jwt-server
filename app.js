var express = require("express");
var morgan = require("morgan");
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
var db = require("./db");
global.__root = __dirname + "/";

app.use(cors());
app.use(morgan("combined"));

app.get("/api", function(req, res) {
  res.status(200).send("API works.");
});

var UserController = require(__root + "user/UserController");
app.use("/api/users", UserController);

var AuthController = require(__root + "auth/AuthController");
app.use("/api/auth", AuthController);

module.exports = app;
