 /*
 * Author: Valarie Situ <vsitu@ucsc.edu>
 * Created: 7 May
 * License: Public Domain
 */

// Constants
let chicken = [1, 2, 3, 4, 5];
let soup = ['a', 'b', 'c', 'd', 'e'];
let word = "Valarie";

// Functions
function yourFunctionName(x){
  var results = x*x; // your operation on x here
  return results;
}

console.log(yourFunctionName(5));
console.log(chicken.map(yourFunctionName));
console.log(word);

chicken.map(function(x){
  var results = x*x;
  return results;
});

var mapResults = chicken.map(yourFunctionName);
console.log("Results:", mapResults);

// this is an example function and this comment tells what it doees and what parameters are passed to it.

function main() {
    console.log("Main function started.");
    // the code that makes everything happen
}
  
  // let's get this party started
main();