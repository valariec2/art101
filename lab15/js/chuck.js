 /*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
 * Author: Valarie Situ 
 * Created: 2nd June
 * License: Public Domain
 */

/*
 * Author: Your Name
 * Created: 2025-06-02
 * Lab 15: AJAX - Chuck Norris API
 */

$("#activate").click(function(){
  console.log("Button clicked!");

  // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the API docs)
    url: "https://api.chucknorris.io/jokes/random",

    // Chuck Norris API doesn't require extra data (no id, api_key, etc.)
    data: {},

    // This is a GET request
    type: "GET",

    // Expecting JSON back
    dataType: "json",

    // Success function
    success: function(data) {
      console.log(data); // Log to console for debugging
      // Put the joke into the #output div
      $("#output").html(`
        <p><strong>Joke:</strong> ${data.value}</p>
        <img src="${data.icon_url}" alt="Chuck Norris Icon">
      `);
    },

    // Error handler
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
      $("#output").html("<p>Oops! Couldn't fetch a joke. Try again later.</p>");
    }
  });
});
