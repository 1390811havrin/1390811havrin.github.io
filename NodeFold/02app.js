//every node app knows the file name and directory where it is hosted
//using the global variables __filename and __dirname
console.log("This file is:\n" + __filename);
console.log("\n");
console.log("This directory is:\n" + __dirname);
console.log("\n");


//we can use all of the built in js code that we have been learning
var name = "Mark Mahoney";
console.log("Welcome Dr. " + name.slice(5));


//create a couple of student objects
var student1 = {
	name: "Mark",
	gpa: 3.8,
	grades: [90, 78, 84]
};

var student2 = {
	name: "Laura",
	gpa: 4.0,
	grades: [100, 99, 98]
};

//call a print function for each student
printStudent(student1);
printStudent(student2);

function printStudent(student) {
	console.log("Name: " + student.name);
	console.log("GPA: " + student.gpa);
	console.log("Grades: " + student.grades.join(", "));
	console.log("\n");
}
