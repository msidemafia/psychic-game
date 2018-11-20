var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var currentGuesses = []

var randomNumberOne = Math.floor(Math.random() * letters.length);
var computerChoice = letters[randomNumberOne]
console.log(randomNumberOne)
console.log(computerChoice)

var wins = 0;
var guessesLeft = 9;
var losses = 0;
var userGuess = ''

var updateCurrentGuesses = function (){
    currentGuesses.push(userGuess)
}

document.onkeyup = function(event) {

    var userGuess = event.key;
// Win scenario
    if (userGuess == computerChoice) {
        wins++;
        currentGuesses = [];
        guessesLeft = 9;
    } 
// Wrong guess
    else if (userGuess !== computerChoice) {
        updateCurrentGuesses();
        guessesLeft--;
        $("#guessLeftValue").text("Guesses left: " + guessesLeft)
    }
// Loss scenario
    else if (guessesLeft == 0) {
        losses++;
        currentGuesses.length = 0;
        reset;
    }

    console.log(userGuess)

    var reset = function() {
        guessesLeft = 9
    }

    $("#guessSoFar").text(currentGuesses)

    
    


console.log(guessesLeft);
console.log(wins);
console.log(losses);
    
  };