var orm = require("../config/orm.js");

//burger model that defines CRUD operations as it pertains to the burgers table in the database
var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(column, value, cb) {
        orm.create("burgers", column, value, function(res){
            cb(res);
            console.log("sent to ORM");
        });
    },
    update: function(col, val, condition, cb) {
        orm.update("burgers", col, val, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;