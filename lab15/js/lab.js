 /*
    lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.
 * Author: Valarie Situ 
 * Created: 29 May
 * License: Public Domain
 */

// Array of possible moves
const moves = ["rock", "paper", "scissors"];

// Get references to HTML elements
$(document).ready(function () {
  // Add buttons dynamically (optional)
  const buttonArea = $("<div></div>").attr("id", "rps-buttons");
  moves.forEach((move) => {
    const btn = $("<button></button>")
      .text(move.charAt(0).toUpperCase() + move.slice(1))
      .attr("id", move)
      .click(() => playGame(move));
    buttonArea.append(btn);
  });
  $("#output").before(buttonArea);
});

function playGame(playerMove) {
  const computerMove = moves[Math.floor(Math.random() * moves.length)];
  let result = "";

  if (playerMove === computerMove) {
    result = `It's a tie! You both chose ${playerMove}. Try again!`;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = `You win! ${playerMove} beats ${computerMove}.`;
  } else {
    result = `You lose! ${computerMove} beats ${playerMove}.`;
  }

  $("#output").html(`<p>${result}</p>`);
}
