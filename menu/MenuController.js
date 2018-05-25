var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require(__root + 'auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Menu = require('./Menu');

// CREATES A NEW Menu
router.post('/', function (req, res) {
    Menu.create({
            name : req.body.name,
            login : req.body.login,
            password : req.body.password
        },
        function (err, Menu) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(Menu);
        });
});

// RETURNS ALL THE MenuS IN THE DATABASE
router.get('/', function (req, res) {
    Menu.find({}, function (err, menu) {
        if (err) return res.status(500).send("There was a problem finding the Menus.");
        res.status(200).send(menu);
    });
});

// GETS A SINGLE Menu FROM THE DATABASE
router.get('/:id', function (req, res) {
    Menu.findById(req.params.id, function (err, Menu) {
        if (err) return res.status(500).send("There was a problem finding the Menu.");
        if (!Menu) return res.status(404).send("No Menu found.");
        res.status(200).send(Menu);
    });
});

// DELETES A Menu FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Menu.findByIdAndRemove(req.params.id, function (err, Menu) {
        if (err) return res.status(500).send("There was a problem deleting the Menu.");
        res.status(200).send("Menu: "+ Menu.name +" was deleted.");
    });
});

// UPDATES A SINGLE Menu IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated Menu can put to this route
router.put('/:id', /* VerifyToken, */ function (req, res) {
    Menu.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, Menu) {
        if (err) return res.status(500).send("There was a problem updating the Menu.");
        res.status(200).send(Menu);
    });
});


module.exports = router;