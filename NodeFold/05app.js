var http = require("http");

//create a web server and tell it what to do when it gets a request
var server = http.createServer(function(req, res) {
	
	//the callback gets a request and response object
	//the request has info about the request from the browser
	console.log("Request Method: " + req.method);
	console.log("Requested URL: " + req.url);
	
	//the response is empty and it is our job to fill it
	//set the header and body of the response
	res.writeHead(200, {"Content-Type": "text/html"});
	
	//the end() function will add some data to the response
	//and end it. Then it will be sent back to the browser
	res.end("<html><body>Hello World!!!</body></html>");
});

//start the web server listening on port 3000
server.listen(3000);

//log a message that the server is running
console.log("Server running on port 3000");