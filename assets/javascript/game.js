var wordBank = ["school", "running", "loud", "hand", "skyscraper", "construction", "basketball", "graduation", "spruce", "cleaner", "cooler", "engulfing"],
    arrLength = wordBank.length;

// MESSAGES TO USER
var winnerMessage = "Congrats, you win!",
    loserMessage = "Sorry, out of tries. Press any key to try again.",
    letterAlreadyPicked = "Sorry, that letter was already used.",
    letterNotExist = "Sorry, that letter does not exist in the word.";

// USER COUNTERS
var losesCounter = 0,
    winsCounter = 0,
    guessesCounter = 0,
    wordCounter = 0,
    incorrectTries = 5;

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

function refreshPage() {
  window.location.reload(true);
}

document.onkeyup = function() {

        var letter = event.key

        // will only print out keypress if a letter is pressed on the keyboard
        if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
            var userInput = event.key
                // console.log(userInput);

            // need to create a condition to stop program all together and reset page
            if ( incorrectTries <= 0 ) {
              incorrectTries = 0;

              document.getElementById('triesMessage').innerHTML = incorrectTries;
              document.getElementById('usedLettersWrong').innerHTML = usedWrongLetters;

              refreshPage();

            } else if ( incorrectTries  === 1){
                  usedWrongLetters.push(userInput);
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
