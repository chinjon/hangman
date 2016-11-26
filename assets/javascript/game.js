var wordBank = ["villain", "accordian", "food", "freudian", "dimes", "dijinn", "dingy", "plexus", "conqueror", "illest", "ego", "knishes", "fazers"],
    arrLength = wordBank.length;

// MESSAGES TO USER
var winnerMessage = "Congrats, you win!",
    loserMessage = "Sorry, out of tries. Press any key to try again.",
    letterAlreadyPicked = "Sorry, that letter was already used.",
    letterNotExist = "Sorry, that letter does not exist in the word.";

// DOM
var targetGameMessage = document.getElementById('gameMessage'),
    targetWrongLetters = document.getElementById('usedLettersWrong'),
    targetGameSpace = document.getElementById('userGameSpace'),
    targetTriesMessage = document.getElementById('triesMessage');

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
targetGameSpace.innerHTML = placeholder;

var usedWrongLetters = [],
    correctLetters = [];

function winnerNotification() {
    if (wordCounter === selectedWordLength) {
        // console.log(winnerMessage)
        targetGameMessage.innerHTML = winnerMessage;
        sound.play()
    }
}

$('.parallax-window').parallax({imageSrc: 'assets/images/mf-doom-img2-cut.png'});

$(document).ready(function() {
  $("#topSplash").hide();
  $("#topSplash").fadeIn(2700, "linear");
});

var sound = new Howl({
  src: ['assets/sound/fazers-cut.mp3']
});


function loseGameNotify() {
    targetGameMessage.innerHTML = loserMessage;
}

// Next, we give JavaScript a function to execute when onkeyup event fires.

// need to take into account for duplicate letters
// use FOR loop to iterate through each letter

// create button to reset page?? http://stackoverflow.com/questions/6666363/is-it-possible-to-clear-a-form-an-reset-reload-the-page-with-one-button

function refreshPage() {
    window.location.reload(true);
}

document.onkeyup = function () {

    var letter = event.key

    // will only print out keypress if a letter is pressed on the keyboard
    if (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123) {
        var userInput = event.key
            // console.log(userInput);

        // need to create a condition to stop program all together and reset page
        if (incorrectTries <= 0) {
            incorrectTries = 0;

            targetTriesMessage.innerHTML = incorrectTries;
            targetWrongLetters.innerHTML = usedWrongLetters;

            refreshPage();

        } else if (incorrectTries === 1) {
            usedWrongLetters.push(userInput);
            targetWrongLetters.innerHTML = usedWrongLetters;
            incorrectTries -= 1;
            targetTriesMessage.innerHTML = incorrectTries;
            loseGameNotify();
        } else if ((splitWord.indexOf(userInput) > -1) && (correctLetters.indexOf(userInput) === -1)) {
            // prevents users from selecting letters already selected

            for (let i = 0; i < splitWord.length; i++) {

                if (userInput === selectedWord.charAt(i)) {
                    placeholderSplit.splice(i, 1, userInput.toUpperCase());
                    // console.log(placeholderSplit.join(""));
                    targetGameSpace.innerHTML = placeholderSplit.join("");
                    wordCounter += 1;
                    correctLetters.push(userInput);
                    //console.log(correctLetters);
                    targetGameMessage.innerHTML = "Correct Letter!";
                    winnerNotification();
                }
            }
        } else if (((splitWord.indexOf(userInput > -1)) && (correctLetters.indexOf(userInput) > -1)) || (usedWrongLetters.indexOf(userInput) > -1)) {
            // console.log("Sorry you have already selected that letter");
            targetGameMessage.innerHTML = letterAlreadyPicked;
        } else {
            targetGameMessage.innerHTML = letterNotExist;
            incorrectTries -= 1;
            targetTriesMessage.innerHTML = incorrectTries;
            usedWrongLetters.push(userInput);
            console.log(usedWrongLetters);
            targetWrongLetters.innerHTML = usedWrongLetters;
            //console.log("Incorrect letter selection");
        }
    }
}
