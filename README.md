# Hangman  

A hangman-styled game for Rutgers Coding Bootcamp.  

[LIVE LINK for project](https://chinjon.github.io/hangman/)

<img src="doom-screen.gif" width="840">

# Information

The theme of the game is based on rapper MF DOOM who is know for this usage of uncanny words and ability to deliver verbose bars. Being that he's my favorite rapper and he has a knack for weird words, I thought doing a word based game on him would work.

## Functionality

Game starts anytime when user presses any letter on the keyboard.  
Upon winning, the corresponding song to the word will play and some info on the album and verse the word came from will appear.  

The screen or the lower half of the page will shake when the incorrect letter or the same letter is "selected" or pressed.

## Tools Used  

Used Parallax.JS to create the header along with an overlay for the text. For sound, Howler.JS was implemented and tracks coincide with the words in the word bank.  
Used Bootstrap as the basis for the UI.  
JQuery and JQuery UI was implemented for animations and selector rules.

## Next  

Would like to tidy up the UI and add ~~some animation to it~~ add more animation.  
Perhaps adding links for each song upon winning each game.  

## Problems  

~~Upon load, the translucent overlay will load and fill based on how far down the page is scrolled. The plugin will not resize the overlay as the page gets larger in height (ie. when elements are added with JQuery).~~

Fixed UI by rearranging `<div>` and rearranging where `.container` should be. Upon load the parallax renders enough so that no missing space appears at the top splash screen when scrolled to the bottom of the page.

Fair-use might not work here soooooo don't sue me Dumile plz.
