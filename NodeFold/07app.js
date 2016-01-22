var http = require("http");

//create some students
var student1 = {
	name: "Mark",
	gpa: 3.0,
	grades: [100, 88, 80]
};

var student2 = {
	name: "Laura",
	gpa: 4.0,
	grades: [100, 98, 90]
};

var student3 = {
	name: "Buddy",
	gpa: 3.4,
	grades: [90, 98, 80]
};

var student4 = {
	name: "Patrick",
	gpa: 3.6,
	grades: [89, 98, 94]
};

//add the students to an array
students = [student1, student2, student3, student4];

//function to find students who have a gpa >= 3.5
function getHonorRollStudent() {
	
	//the array filter function passes each elements in the
	//array to a function and returns a new array with the 
	//elements that satsify the condition
	var honorRoll = students.filter(function(student){
		return student.gpa >= 3.5;
	});
	
	return honorRoll;
}

//create a web server and tell it what to do when it gets a request
var server = http.createServer(function(req, res){
	
	//check the url to see if it is a request for students
	if(req.url === "/students") {

		//send back all the students
		res.writeHead(200, {"Content-Type": "text/json"});
		res.end(JSON.stringify(students));

	} else if (req.url === "/honorroll") { //requesting honor roll students
		
		//send back just the honor roll students
		res.writeHead(200, {"Content-Type": "text/json"});
		res.end(JSON.stringify(getHonorRollStudent()));
		
	} else { //error
		
		//send an error message
		res.writeHead(404, {"Content-Type": "text/plain"});
		res.end("Data not found");
	}
});


//start the web server listening on port 3000
server.listen(3000);

//log a message that the server is running
console.log("Server running on port 3000");