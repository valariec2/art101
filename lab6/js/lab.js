// Author: Valarie Situ <vsitu@ucsc.edu>
// Created: 28 April

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();

// Define Variables
myTransport = ["Honda Leo", "bus", "car", "train"];

// create an object for my main ride
let myMainRide = {
  make: "Honda",
  model: "Leo",
  color: "Purple",
  year: 2025,
  age: function() {
      return 2026 - this.year;
  }
};

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
// this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");