var express = require("express");
var bodyParser = require ("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var PORT = process.env.PORT || 8080;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function (){
    console.log("Server listening on: http://localhost" + PORT);
});

