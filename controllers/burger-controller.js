var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");


//ROUTES
router.get("/", function(req, res) {
    res.redirect("/burger");
});

router.get("/burger", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/burger/add", function(req, res) {
    burger.insertOne("burger_name", req.body.burger_name, function() {
        res.redirect("/burger");
    });
});

router.put("/burger/devour/:id", function(req, res) {
    var burgerCondition = "id = " + req.params.id;
    burger.updateOne({devoured: req.body.devoured }, burgerCondition, function() {
        res.redirect("/burger");
    });
});

// Export routes for server.js to use.
module.exports = router;
