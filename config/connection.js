var mysql = require("mysql");

var connection;
//if the server is Heroku's server, it connects to the JAWSDB database 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
//if its a local connection, it sets the port to 3306
else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "",
        database: "burgers_db"
    });
}
//logs either the error thrown or the thread id of the connection
connection.connect(function(err){
    if(err) {
        return console.log("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;