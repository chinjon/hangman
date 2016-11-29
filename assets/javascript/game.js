var wordBank = ["fazers", "accordion", "dimes", "gazzillion", "villain"],
    arrLength = wordBank.length;


var selectedWord = wordBank[Math.floor(Math.random() * arrLength)];
var splitWord = selectedWord.split("");
var selectedWordLength = selectedWord.length;
console.log(selectedWord);

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

var targetLyrics = document.getElementById('lyrics'),
    targetBeforeLyrics = document.getElementById('lyricsBefore'),
    targetWordLyrics = document.getElementById('lyricsWord'),
    targetAfterLyrics = document.getElementById('lyricsAfter'),
    targetTrackInfo = document.getElementById('songAlbum');

// USER COUNTERS
var losesCounter = 0,
    winsCounter = 0,
    guessesCounter = 0,
    wordCounter = 0,
    incorrectTries = 5;


var lyricsObject = {
    "fazers": {
        "lyric full": "Nowadays it's amazing raising young rule number one: Keep your fazers on stun.",
        "clue": "Weapon of choice on 'Star Trek' and rhymes with 'laser'.",
        "lyrics before": "Nowadays it's amazing raising young rule number one: Keep your ",
        "lyrics word": "fazers",
        "lyrics after": " on stun.",
        "track info": "Fazers",
        "album info": "Take Me To Your Leader"
    },
    "accordion": {
        "lyrics": "And get more cheese than Doritos, Cheetos or Fritos Slip like Freudian your first and last step to playing yourself like accordion.",
        "clue": "A piano that you can squish and uses air to make music.",
        "lyrics before": "And get more cheese than Doritos, Cheetos or Fritos Slip like Freudian Your first and last step to playing yourself like",
        "lyrics word": " accordion",
        "lyrics after": ".",
        "track info": "Accordion",
        "album info": "Madvilliany"
    },
    "dimes": {
        "lyrics": "I sell rhymes like dimes the one who mostly keep cash but brag about the broker times.",
        "clue": "10 cents",
        "lyrics before": "I sell rhymes like ",
        "lyrics word": "dimes",
        "lyrics after": " the one who mostly keep cash but brag about the broker times.",
        "track info": "Rhymes Like Dimes",
        "album info": "Operation Doomsday"
    },
    "gazzillion": {
        "lyrics": "Villain man never ran with krills in his hand and won't stop rockin' til he clocked in a gazillion grand tillin' the wasteland sands raps on backs of treasure maps, stacks to the ceilin' fan.",
        "clue": "More than a billion.",
        "lyrics before": "Villain man never ran with krills in his hand and won't stop rockin' til he clocked in a",
        "lyrics word": " gazzillion ",
        "lyrics after": "grand tillin' the wasteland sands raps on backs of treasure maps, stacks to the ceilin' fan.",
        "track info": "Gazzillion Ear",
        "album info": "Born Like This"
    },
    "villain": {
        "lyrics": "V. Vaughn, the travelin' Vaudeville Villain who don't give a flyin' f*** who ain't not feelin' him watch what ya dealin' him: Ace, king, death card strong-arm the wrong man, pardon the left, god.",
        "clue": "The bad person in movies.",
        "lyrics before": "V. Vaughn, the travelin' Vaudeville",
        "lyrics word": " Villain ",
        "lyrics after": "who don't give a flyin' f*** who ain't not feelin' him watch what ya dealin' him: Ace, king, death card strong-arm the wrong man, pardon the left, god.",
        "track info": "Vaudeville Villain",
        "album info": "Vaudeville Villain"
    }
}



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
        // targetGameMessage.innerHTML = lyricsObject[selectedWord]["lyric"];
        targetBeforeLyrics.innerHTML = "'" + lyricsObject[selectedWord]["lyrics before"];
        targetWordLyrics.innerHTML = lyricsObject[selectedWord]["lyrics word"];
        targetAfterLyrics.innerHTML = lyricsObject[selectedWord]["lyrics after"] + "'";
        targetTrackInfo.innerHTML = "Lyrics From: " + lyricsObject[selectedWord]["track info"] + " - " + "<em>" + lyricsObject[selectedWord]["album info"] + "</em>";


        sound.play()
    }
}


function loseGameNotify() {
    targetGameMessage.innerHTML = loserMessage;
}

$('.parallax-window').parallax({
    imageSrc: 'assets/images/mf-doom-img2-cut.png'
});

$(document).ready(function() {
    $("#topSplash").hide();
    $("#topSplash").fadeIn(3300, "linear");

    $("#wordClue").text(lyricsObject[selectedWord]["clue"]);

});

var sound = new Howl({
    src: ['assets/sound/' + selectedWord + '-cut.mp3']
});


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
