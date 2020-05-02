The Odin Project's project: Rock Paper Scissors.

const selections = ["rock", "paper", "scissors"];

Choosed to use an array with the options (rock, paper, scissors), as it makes the syntax on playRound() and computerPlay() a little cleaner.

The score is also stored in a global array, it's updated on the playRound function.

In game() there's a loop that checks for valid input and applies .toLowerCase() before calling playRound().