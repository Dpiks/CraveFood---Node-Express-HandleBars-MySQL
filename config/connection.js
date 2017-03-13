// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql=require("mysql");


// Set up our connection information
var connection = mysql.createConnection({
   host: "localhost",
  user: "root",
  port:'3306',
  password: "abcd12",
  database: "cravefood"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;



