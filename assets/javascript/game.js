window.onload = function () {

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Creating variables to hold the number of wins and losses. They start at 0.
    var wins = 0;
    var losses = 0;
    var numGuesses = 9;
    var guessChoices = [];

    // Create variables that hold references to the places in the HTML where we want to display things.
    var userChoiceText = document.getElementById("userchoice-text");
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessText = document.getElementById("guessleft-text");

    // This function is run whenever the user presses a key.
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var userGuess = event.key;

        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

        // This logic determines the outcome of the game (win/loss), and increments the appropriate number
        if (options.indexOf(userGuess) > -1) {

            if (userGuess === computerGuess) {
                wins++;
                numGuesses = 9;
                guessChoices = [];
                // break;
            }

            if (userGuess != computerGuess) {
                numGuesses--;
                guessChoices.push(userGuess);
            }

            if (numGuesses === 0) {

                numGuesses = 9;
                losses++;
                guessChoices = [];


            }

            // Display the user and computer guesses, and wins/losses.
            winsText.textContent = "wins: " + wins;
            lossesText.textContent = "losses: " + losses;
            guessText.textContent = "Guesses Left: " + numGuesses;
            userChoiceText.textContent = "You chose: " + guessChoices.join(", ");
            console.log(computerGuess)
        }
    }
}


