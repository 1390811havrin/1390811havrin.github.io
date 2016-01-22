var express = require("express");
var Firebase = require("firebase");

//create the express app
var app = express();

//get a reference to our firebase using the unique url (using the root)
var myFirebaseRef = new Firebase("https://mm-students.firebaseio.com/");

//log all the requests
app.use(function(req, res, next){
	console.log("Method: " + req.method + " URL: " + req.url);

	//move to the next middleware function
	next();
});

//make it a file server
app.use(express.static("./public"));

//handle the all students route
app.get("/students", function(req, res){
	
	//one time read of all of the students
	myFirebaseRef.orderByChild("name").once("value", function(snapshot){
		
		//holds student objects
		var students = [];
		
		//for each student object
		snapshot.forEach(function(studentSnapshot) {

			//add the student to the array
			students.push(studentSnapshot.val());

		});

		//return a json object with all of the student
		res.json(students);
		
	});	
});

//define a route to handle all get requests to /honorroll
app.get("/honorroll", function(req, res){
	
	//one time read of all of the students
	myFirebaseRef.once("value", function(snapshot){

		//holds student objects
		var students = [];
		
		//for each student object
		snapshot.forEach(function(studentSnapshot) {

			//add the student to the array
			students.push(studentSnapshot.val());

		});
		
		//return a json object with all of the honor roll student ids
		res.json(getHonorRollStudent(students));
		
	});	
});

app.listen(3000);

console.log("App running on port 3000");

//function to find students who have a gpa >= 3.5
function getHonorRollStudent(allStudents) {
	
	//holds the ids of all the honor roll students
    var honorRollIds = [];
	
    //go through each student
    for(var i = 0;i < allStudents.length;i++) {
        
        //if they have a high gpa
        if(allStudents[i].gpa >= 3.5) {
            
            //add their id to the list of honor roll students
            honorRollIds.push(allStudents[i].id);
        }
    }
    
	return honorRollIds
}
