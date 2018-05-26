var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

var VerifyToken = require(__root + "auth/VerifyToken");

router.use(bodyParser.urlencoded({ extended: true }));
var Menu = require("./Menu");

// RETURNS ALL THE MenuS IN THE DATABASE
router.get("/", VerifyToken, function(req, res) {
  Menu.find({}, function(err, menu) {
    if (err)
      return res.status(500).send("There was a problem finding the Menus.");
    res.status(200).send(menu);
  });
});

module.exports = router;
