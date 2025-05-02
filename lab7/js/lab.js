 /*
 * Author: Valarie Situ <vsitu@ucsc.edu>
 * Created: 1 May
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
  
  // let's get this party started
  main();

  // sortUserName - a function that takes user input and sorts the letters
  // of their name
  function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    // spilt string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    // Note that I could have done the above lines as a single line:
    //  userName.toLower().spilt("").sort().join("")
    return nameSorted;
  }

  // output
  document.writeln("MUAHAHHA, I've fixed your name: ",
    sortUserName(), "</br>"); 