var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

//Import Routes

var routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(port, function(){
    console.log("Listening on PORT " + port);
});