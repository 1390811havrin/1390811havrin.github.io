//import the object that will allow this app to make
//http requests to other web sites (like github)
var http = require("http");

//an option object that the http library needs to know
//what to send to the server
var options = {
	
	//url of the server to connect to
	hostname: "markm208.github.io",
	
	//port to send to on the server
	port: 80,
	
	//path to a file on the server
	path: "/index.html",
	
	//type of request (GET and POST are the most common)
	method: "GET"
};


console.log("Before sending request");

//call the http object's request() method to request some data 
//from another server (the data is a web page)
//https://nodejs.org/api/http.html#http_http_request_options_callback

//the params are the options object and a function to be
//called when the response is returned to the node app

//it may take a while for the response to come back,
//let's not wait, let's handle it in a callback...
var req = http.request(options, function (res){
	//the flow of control will only get here when the
	//response has been returned and now it will be handled
	//by the app
	
	console.log("Received a response from GitHub");
	
	//the res (response) object holds the response from
	//the server
	
	//all data comes back in binary, this will turn it
	//into readable text when we print it on the screen
	res.setEncoding("UTF-8");
	
	//the data comes back in chunks, this is setting an
	//event handler to handle each chunk when it arrives
	res.on("data", function(chunk) {
		console.log(chunk);
	});
	
	//this is setting an event handler for when all of the 
	//data has been received
	res.on("end", function(){
		console.log("File download complete");
	});
});

//this sets an event handler if there is a problem with the request
req.on("error", function(err){
	console.log("Problem with the request: " + err.message)
});

//this says we are done with the request and we will not be 
//adding any mopre event handlers- this is required
req.end();

console.log("After sending request");
