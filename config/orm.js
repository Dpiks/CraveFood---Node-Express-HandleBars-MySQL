// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================

var connection=require(".connection.js");

// ORM
// =============================================================
// selectAll()
// insertOne()
// updateOne()

var tableName="food_list";

var orm={

	selectAll:function(callback){
		let query="SELECT * FROM" + tableName;
		connection.query(query,function(err,data){
			if (err) throw err;
			callback(data);
		});
	},
// INSERT INTO Food_List (dish_name,devoured,date_created) VALUES ("Pepper Chicken",false,"2017-03-02 18:19:03");

	insertOne: function(dish,callback){
		let query="INSERT INTO " + tableName + "(dish_name,devoured,date_created) VALUES (?,?,?)";
		connection.query(query,[dish.dish_name,dish.devoured,dish.date_created], function(err,data){
			if(err) throw err;
			callback(data);

		});
	},

	updateOne: function(){
		
	}

};

module.exports=orm;