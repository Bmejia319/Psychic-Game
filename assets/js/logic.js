//Global Variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//Array containing letter choices
var possibleChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y","z"];


//Computer selects a random letter from the available choices
var computerGuess = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

//User gets 10 guesses
var updateGuessesLeft = function() {
//Linking HTML element by ID to display remaining guesses (10)
document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesLeft;
};

//Display user guesses 
var updateLetterToGuess = function() {
  this.letterToGuess = this.possibleChoices[Math.floor(Math.random() * this.possibleChoices.length)];
};
//Display user guesses as letters and separate them by commas
var updateGuessesSoFar = function() {
  document.getElementById("let").innerHTML = "Your Guesses So Far: " + guessedLetters; 
};

//Function reset
var reset = function() {
totalGuesses = 9;
guessesLeft = 9;
guessedLetters = [];

updateLetterToGuess();
updateGuessesLeft();
updateGuessesSoFar();
console.log(reset);
}

updateLetterToGuess();
updateGuessesLeft();

//Capture the user guess
document.onkeyup = function(event){
  guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  
  guessedLetters.push(userGuess);
  
  updateGuessesLeft();
  updateGuessesSoFar();

    if (guessesLeft > 0){
      if (userGuess == letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("What? That's crazy! You're a psychic!");
        reset();
      }
    } else if (guessesLeft == 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        alert("Nope. You are DEFINITELY not a psychic...")
        reset();
    }

};
