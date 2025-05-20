 /*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
 * Author: Valarie Situ 
 * Created: 19 May
 * License: Public Domain
 */

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){
  const userName = $("#user-name").val();

  userNameSorted = sortString(userName);


$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

  // let's get this party started
  main();