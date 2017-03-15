// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************


// Dependencies
// =============================================================
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var moment=require("moment");

var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

var connection = require("./config/connection.js");
// require("./config/orm.js")(app);


var routes = require("./controllers/crave_controller.js");

app.use("/", routes);
app.use("/:id", routes);
app.use("/create", routes);

// var tableName = "food_list";
// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM " + tableName, function(err, data) {
//         if (err) {
//             throw err;
//         }
//         res.render("index", { dish: data });
//     });
   

// });

// app.post("/", function(req, res) {
// 	console.log(req.body);
//     let query = "INSERT INTO " + tableName + "(dish_name,devoured,date_created) VALUES (?,?,?)";
//     connection.query(query, [req.body.dish, false, moment().format("YYYY-MM-DD HH:mm:ss")], function(err, data) {
//        if (err) throw err;
//         res.redirect("/");
//     });
    
// });

// app.put("/:id", function(req, res) {

// 	let query="UPDATE " + tableName + " SET ? WHERE ?";

//   connection.query(query, [{devoured:true},{id:req.params.id}], function(err, data){
//   	console.log(data);  	
//     if (err) {
//       throw err;
//     }
//    	res.redirect("/");
//   });
// });

app.listen(PORT);
