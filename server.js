var express = require("express");
var bodyParser = require ("body-parser");
var path = require ("path");

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;


app.listen(PORT, function (){
    console.log("Server listening on: http://localhost" + PORT);
});

