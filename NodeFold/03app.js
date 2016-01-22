//import the 'path' module to work with file names and paths 
//the path library comes with node (some other modules we
//will have to install)

//this returns an object from the library that we can use 
//to do file path related things
path = require('path');

//use the path object to get just file name
console.log("File Name: " + path.basename(__filename));
