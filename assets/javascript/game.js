var wordBank = ["school", "running", "loud", "hand", "skyscraper", "construction", "basketball"],
    arrLength = wordBank.length;

// MESSAGES TO USER
var winnerMessage = "Congrats, you win!",
    loserMessage = "Sorry, out of tries. Please try again.",
    letterAlreadyPicked = "Sorry, that letter was already used.",
    letterNotExist = "Sorry, that letter does not exist in the word.";

// USER COUNTERS
var losesCounter = 0,
    winsCounter = 0,
    guessesCounter = 0,
    wordCounter = 0,
    incorrectTries = 5; // if wordCounter = word.length === 'YOU WIN'

var selectedWord = wordBank[Math.floor(Math.random() * arrLength)];
var splitWord = selectedWord.split("");
var selectedWordLength = selectedWord.length;
console.log(selectedWord);

var placeholder = "";
for (var i = 0; i < selectedWordLength; i++) {
    placeholder += "-";
}
var placeholderSplit = placeholder.split('');
document.getElementById('userGameSpace').innerHTML = placeholder;

var usedWrongLetters = [],
    correctLetters = [];

function winnerNotification() {
    if (wordCounter === selectedWordLength) {
        // console.log(winnerMessage)
        document.getElementById('gameMessage').innerHTML = winnerMessage;
    }
}

function loseGameNotify() {
    document.getElementById('gameMessage').innerHTML = loserMessage;
  }

// Next, we give JavaScript a function to execute when onkeyup event fires.

// need to take into account for duplicate letters
// use FOR loop to iterate through each letter

// create button to reset page?? http://stackoverflow.com/questions/6666363/is-it-possible-to-clear-a-form-an-reset-reload-the-page-with-one-button

document.onkeyup = function() {

        var letter = event.key

        // will only print out keypress if a letter is pressed on the keyboard
        if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
            var userInput = event.key
                // console.log(userInput);

            // need to create a condition to stop program all together and reset page
            if ( incorrectTries  === 1){
                  // usedWrongLetters.push(userInput);
                  document.getElementById('usedLettersWrong').innerHTML = usedWrongLetters;
                  incorrectTries -=1;
                  document.getElementById('triesMessage').innerHTML = incorrectTries;

                  loseGameNotify();
            } else if ((splitWord.indexOf(userInput) > -1) && (correctLetters.indexOf(userInput) === -1)) {
                // prevents users from selecting letters already selected

                for (let i = 0; i < splitWord.length; i++) {

                    if (userInput === selectedWord.charAt(i)) {
                        placeholderSplit.splice(i, 1, userInput.toUpperCase());
                        // console.log(placeholderSplit.join(""));
                        document.getElementById('userGameSpace').innerHTML = placeholderSplit.join("");
                        wordCounter += 1;
                        correctLetters.push(userInput);
                        //console.log(correctLetters);
                        document.getElementById('gameMessage').innerHTML = "Correct Letter!";
                        winnerNotification();
                    }
                }
            } else if (((splitWord.indexOf(userInput > -1)) && (correctLetters.indexOf(userInput) > -1)) || (usedWrongLetters.indexOf(userInput) > -1)) {
                // console.log("Sorry you have already selected that letter");
                document.getElementById('gameMessage').innerHTML = letterAlreadyPicked;
            } else {
                document.getElementById('gameMessage').innerHTML = letterNotExist;
                incorrectTries -= 1;
                document.getElementById('triesMessage').innerHTML = incorrectTries;
                usedWrongLetters.push(userInput);
                console.log(usedWrongLetters);
                document.getElementById("usedLettersWrong").innerHTML = usedWrongLetters;
                //console.log("Incorrect letter selection");
            }
        }
    }
    // push selection to an array that stores correct letters
    // use a loop to check against it


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

// create a "last letter selected" indicator
// use different color text to indicate last letter guessed

// String.prototype.replaceAt = function (index, character) {
//     return this.substr(0, index) + character + this.substr(index + character.length);
// }


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

// CREATE A WELCOME SCREEN??

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
