 /*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
 * Author: Valarie Situ 
 * Created: 12 May
 * License: Public Domain
 */

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
  
// add a click listener to the challenge button
$("#button-challenge").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenge").toggleClass("special");
});

$(document).ready(function(){
  $("#button-challenge").click(function(){
    $(".minor-section").first().toggleClass("special");

    $("#output").html("<p>You've clicked the button! This is now special.</p>");
  });
});

  // let's get this party started
  main();