var http = require("http");

//create a web server and tell it what to do when it gets a request
var server = http.createServer(function(req, res) {
	
	var student = {
		name: "Mark",
		gpa: 4.0,
		grades: [100, 98, 90]
	};
	
	//the response is empty and it is our job to fill it
	//set the header and body of the response
	res.writeHead(200, {"Content-Type": "text/json"});
	
	//add the json data and send the response back to the browser
	res.end(JSON.stringify(student));
});

//start the web server listening on port 3000
server.listen(3000);

//log a message that the server is running
console.log("Server running on port 3000");
