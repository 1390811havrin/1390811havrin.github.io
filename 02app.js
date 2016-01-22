//import the functionality in the 'express' package that we downloaded
//using npm
var express = require("express");

//use the express() to make an express application object.
//the application object will listen for requests, send them
//through the middleware, and eventually the defined routes
//will handle the request and generate a response
var app = express();

//tell the app to use express's static file server to serve any files
//in the project directory's 'public' directory. If a requested file
//is found it is served and the middleware chain is stopped
app.use(express.static("./public"));

//start the server on port 3000
app.listen(3000);

console.log("Server listening on port 3000");
