 /*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
 * Author: Valarie Situ 
 * Created: 26 May
 * License: Public Domain
 */

function fizzBuzzBoom() {
  let outputStr = ""; 

  for (let num = 1; num <= 200; num++) {
    let result = "";

    if (num % 3 === 0) result += "Fizz";
    if (num % 5 === 0) result += "Buzz";
    if (num % 7 === 0) result += "Boom";

    if (result === "") {
      result = num;
    }

    outputStr += result + "<br>";
  }

  $("#output").html(outputStr);
}

fizzBuzzBoom();

