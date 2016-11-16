var wordBank = ["school", "running", "loud", "hand", "skyscraper", "construction", "basketball"];

var arrLength = wordBank.length;

// MESSAGES TO USER
var winnerMessage = "Congrats, you win!";
var loserMessage = "Sorry, please try again.";
var confirmIncorrect = "Letter is not in word";
var confirmCorrect = "Letter exists in word";

var losesCounter = 0;


var winsCounter = 0;

var guessesCounter = 0;
// if guesses === max fail attempts { alert you lose }



// var selectedWord = wordBank[Math.floor(Math.random() * arrLength )];
// prompt user for letters
// var askUser = prompt("Please enter a letter.")



console.log(selectedWord);


function game() {
  var selectedWord = wordBank[Math.floor(Math.random() * arrLength )];
  var splitWord = selectedWord.split("");



}
