var wordBank = ["school", "running", "loud", "hand", "skyscraper", "construction", "basketball"],
    arrLength = wordBank.length;

// MESSAGES TO USER
var winnerMessage = "Congrats, you win!",
loserMessage = "Sorry, please try again.",
confirmIncorrect = "Letter is not in word",
confirmCorrect = "Letter exists in word";

// USER COUNTERS
var losesCounter = 0,
  winsCounter = 0,
  guessesCounter = 0;
// if guesses === max fail attempts { alert you lose }


// PRESS ANY KEY TO GET STARTED

// var selectedWord = wordBank[Math.floor(Math.random() * arrLength )];
// prompt user for letters
// var askUser = prompt("Please enter a letter.")

// while userCounter > selectedWord.length keep running game
// when userCounter

// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    // 48 - 90
    // a - z
    // if (event.key > )



// http://www.w3schools.com/charsets/ref_html_ascii.asp
    // 97 - 122
    // a - z

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
var selectedWord = wordBank[Math.floor(Math.random() * arrLength )];
var splitWord = selectedWord.split("");
var selectedWordLength = selectedWord.length;
  console.log(selectedWord);

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function () {

  var letter = event.key

// will only print out keypress if a letter is pressed on the keyboard
  if(letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
  var userInput = event.key

  // console.log(userInput);

  if(splitWord.indexOf(userInput) > -1) {
    console.log("Yup");
    console.log(userInput);
    // if correct guess push to the according position
    // ------- and use replace method
  } else {
    console.log("nope");
  }

  }
}

// console.log(selectedWord);

//
// function game() {
//   var selectedWord = wordBank[Math.floor(Math.random() * arrLength )];
//   var splitWord = selectedWord.split("");
//
// }
