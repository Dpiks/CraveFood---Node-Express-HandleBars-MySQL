


var express = require("express");

var router = express.Router();
var craveFood = require("../models/craveFood.js");



router.get("/", function(req, res) {
  
 craveFood.selectAll(function(data) {
   
   res.render("index", {dish:data});
 });
});

// post route -> back to index
router.post("/", function(req, res) {
 // takes the request object using it as input for buger.addBurger
 craveFood.createOne(req.body.dish, function(result) {
   // wrapper for orm.js that using MySQL insert callback will return a log to console,
   // render back to index with handle
   console.log(result);
   res.redirect("/");
 });
});

// put route -> back to index
router.put("/:id", function(req, res) {
 craveFood.updateOne(req.params.id, function(result) {
   // wrapper for orm.js that using MySQL update callback will return a log to console,
   // render back to index with handle
   console.log(result);
   res.redirect("/");
 });
});

module.exports = router;



