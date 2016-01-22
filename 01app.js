//import the functionality in the 'express' package that we downloaded
//using npm
var express = require("express");

//use the express() to make an express application object.
var app = express();

//start the server on port 3000
app.listen(3000);

console.log("Server listening on port 3000");
