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
  guessesCounter = 0,
  wordCounter = 0; // if wordCounter = word.length === 'YOU WIN'
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

// var word = "replace".split("");
// console.log(word);
// var placeholder = "-------".split("");
// placeholder.splice(2, 1, word[2]);
// placeholder.splice(6, 1, word[6]);
// console.log(placeholder)


// randomword library = http://www.setgetgo.com/randomword/

// replace with regex: https://www.tutorialspoint.com/javascript/string_replace.htm

// set method: http://stackoverflow.com/questions/7452772/java-arraylist-replace-at-specific-index

// http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

var selectedWord = wordBank[Math.floor(Math.random() * arrLength )];
var splitWord = selectedWord.split("");
var selectedWordLength = selectedWord.length;
  console.log(selectedWord);

  var placeholder = "";
  for(var i = 0; i < selectedWordLength; i++) {
    placeholder+="-";
  }
  var placeholderSplit = placeholder.split('');


var usedWrongLetters = [];


function winnerNotification () {
  if (wordCounter === selectedWordLength) {
    console.log("You Win The Game!")
  }
}

// create a "last letter selected" indicator
// use different color text to indicate last letter guessed

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}



// Next, we give JavaScript a function to execute when onkeyup event fires.

// need to take into account for duplicate letters
// use FOR loop to iterate through each letter

document.onkeyup = function () {

  var letter = event.key

// will only print out keypress if a letter is pressed on the keyboard
  if(letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
  var userInput = event.key
  // console.log(userInput);

  if(splitWord.indexOf(userInput) > -1) {
    for (let i = 0; i < splitWord.length; i++) {

      if(userInput === selectedWord.charAt(i)) {
        placeholderSplit.splice(i, 1, userInput);
        console.log(placeholderSplit);
        wordCounter+=1;
        winnerNotification ()
      }
  }
}
}
}

  // placeholderSplit.splice(splitWord.indexOf(userInput), 1, splitWord[splitWord.indexOf(userInput)])
  // console.log(placeholderSplit);
  // wordCounter += 1;
  // winnerNotification();

// console.log(selectedWord);

//
// function game() {
//   var selectedWord = wordBank[Math.floor(Math.random() * arrLength )];
//   var splitWord = selectedWord.split("");
//
// }
