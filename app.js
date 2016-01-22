//import the functionality in the 'express' package that we downloaded
//using npm
var express = require("express");

//use the express() to make an express application object.
//the application object will listen for requests, send them
//through the middleware, and eventually the defined routes
//will handle the request and generate a response
var app = express();

//middleware- a series of functions that each get the request object, 
//the response object, and a reference to the next middleware function
//called next:
//(req, res) -> mw1 -> mw2 -> mw3 -> mw4 -> defined routes 
//each piece of middleware gets a chance to do something with the
//request and response objects
//
//app.use() adds another function to the list of middleware functions

//this middleware will log the method and url for each request 
app.use(function(req, res, next){
	//log the request object's method (GET, POST, etc) and URL
	console.log("Method: " + req.method + " URL: " + req.url);
	
	//give permission for the next middleware in the pipe to use
	//the request and response objects
	next();
});

//tell the app to use express's static file server to serve any files
//in the project directory's 'public' directory. If a requested file
//is found it is served and the middleware chain is stopped
app.use(express.static("./public"));

//define a route to handle all get request to /students
// GET /students HTTP/1.1
app.get("/students", function(req, res){
	
	//express response objects are more powerful than http
	//there is a json function that stringifies the json,
	//sets the content type, and sets the response body
	res.json(students);

});

//define a route to handle all get requests to /honorroll
app.get("/honorroll", function(req, res){
	
	//call the function to get honor roll students
	res.json(getHonorRollStudent());
});

//start the server on port 3000
app.listen(3000);

console.log("Server listening on port 3000");

//create some students
var student1 = {
	id: 1,
    name: "Mark",
	gpa: 3.0,
	grades: [100, 88, 80]
};

var student2 = {
	id: 2,
    name: "Laura",
	gpa: 4.0,
	grades: [100, 98, 90]
};

var student3 = {
	id: 3,
    name: "Buddy",
	gpa: 3.4,
	grades: [90, 98, 80]
};

var student4 = {
	id: 4,
    name: "Patrick",
	gpa: 3.6,
	grades: [89, 98, 94]
};

//add the students to an array
students = [student1, student2, student3, student4];

//function to find students who have a gpa >= 3.5
function getHonorRollStudent() {
	//holds the ids of all the honor roll students
    var honorRollIds = [];
    
    //go through each student
    for(var i = 0;i < students.length;i++) {
        
        //if they have a high gpa
        if(students[i].gpa >= 3.5) {
            
            //add their id to the list of honor roll students
            honorRollIds.push(students[i].id);
        }
    }
    
	return honorRollIds
}
