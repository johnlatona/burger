var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create("burger_name", req.body.burger_name, function(result){
        console.log(req.body.burger_name);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition: " + condition);

    burger.update("devoured", req.body.devoured, condition, function(result){
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition: " + condition);

    burger.delete(condition, function(result){
        if(result.affectedRows == 0) {
            return res.status(404).end()
        }
        else {
            return res.status(200).end();
        }
    });
});

module.exports = router;