 /*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
 * Author: Valarie Situ 
 * Created: 22 May
 * License: Public Domain
 */

function sortingHat(str) {
    let length = str.length;
    let mod = length % 4;
    let house;
    if (mod == 0) {
        house = "Chicken Tenders";
    } else if (mod == 1) {
        house = "Chicken Fries";
    } else if (mod == 2) {
        house = "Chicken Nuggets";
    } else if (mod == 3) {
        house = "Fried Chicken";
    }
    return house;
}

// Event listener
$("#button").click(function() {
    let name = $("#input").val();
    let house = sortingHat(name);
    $("#output").html("<p>The restraurant would like to recommend you: <strong>" + house + "</strong>!</p>");
});
