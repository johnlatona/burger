var connection = require("../config/connection.js");

var orm = {
    //retrieves all items from the table
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err,result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    //creates an entry into the table
    create: function(table, column, value, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += column + ", devoured";
        queryString += ") ";
        queryString += "VALUES(?, 0)";

        console.log(queryString);

        connection.query(queryString, value, function(err, result){
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    //updates an existing entry in the table
    update: function(table, col, val, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += col + " = " + val;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    //deletes an entry from the table
    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;

        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;