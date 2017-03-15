
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
