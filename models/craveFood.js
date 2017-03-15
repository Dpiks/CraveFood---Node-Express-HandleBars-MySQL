// Dependencies
// =============================================================
var orm=require("../config/orm.js");


var craveFood = {
	selectAll : function(callback){
		orm.selectAll(function(response){
			callback(response);
		})
	},
	createOne : function(dish_name, callback){
		orm.insertOne(dish_name, function(response){
			callback(response);
		});
	},
	updateOne : function(id, callback){
		orm.updateOne(id, function(response){
			callback(response);
		});
	}	
}


module.exports = craveFood;