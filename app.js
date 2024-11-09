//spaceman which is like hangman but with a spaceman and if you guess wrong you build the alien spaceship??
// 
// 1) Define any variables used to track the state of the game:
//    guessedWord - the word to guess
//    hint - a hint for the word to guess
//    wrongLetters - the letters guessed that are not in the word
//    currentWord - the word as it is currently being guessed
//    remainingGuesses - the number of guesses remaining

// 2) Define the required constants:
//    1) The word to guess
//   2) The hint for the word to guess
//    3) The number of wrong guesses allowed
//    4) The number of wrong guesses made
//    5) The number of correct guesses made
//    6) The number of guesses remaining
//    7) The number of letters in the word
//    8) The number of letters guessed that are not in the word
//    9) The number of letters guessed that are in the word
//    10) The number of letters remaining to be guessed
//    11) The number of letters in the word that have been guessed
//    12) The number of letters in the word that have not been guessed
//    13) The alphabet of letters to guess
//  3)  We'll need a reference to a DOM element to display messages
//    We'll need a reference to a DOM element to display the word being guessed
//  
//    We'll need a reference to a DOM element to display the letters guessed that are not in the word
//    We'll need a reference to a DOM element to display the number of guesses remaining
// 4) Define the required functions:
//    1) render - to render the game state
//    2) reset - to reset the game state
//    3) handlePlayerSelection - to handle the player's selection

// 5) Define the required event listeners:
//    1) Listen for the player's selection
//    2) start of the game  
//    3) end of the game
//   4) reset the game

// 6) Render a win message to the player 
//    when player loses or doesn't win select the right letter the spaceship will be built
//   clearly indicate a win adn a loss
/*-------------------------------- Constants --------------------------------*/
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const maxWrongGuesses = 6;


/*-------------------------------- Variables --------------------------------*/
let currentWord; // the word to guess
let wrongLetters; // the letters guessed that are not in the word
let guessedLetters; // the letters guessed that are in the word
let remainingGuesses; // the number of guesses remaining
let wordHint; // the hint for the word to guess
/*------------------------ Cached Element References ------------------------*/
const wordDispleyEl = document.querySelector('.word-display');
const chancesDisplayEl = document.querySelector('.nums-chances');
const playAgainBtn = document.querySelector('.play-again');
const HintEl = document.querySelector('.hint');
const gameResultEl = document.querySelector('.game-result');
/*-------------------------------- Functions --------------------------------*/
Init(); //initialize the game
function Init() {
    generateWord();
    render();
}

//generate random word  from wordlist and a hint
function generateWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randomIndex].word;
    wordHint = wordList[randomIndex].hint;
    guessedLetters = [];
    wrongLetters = [];
    remainingGuesses = maxWrongGuesses;
    render();
    //console.log(currentWord);
    //current letter selected by player  didplay letter in placeholder otherwise chances are descresed

    const wordPlaceholder = currentWord.split('').map(letter => {
        return guessedLetters.includes(letter) ? letter : '_';
    }).join('');
    wordDispleyEl.textContent = wordPlaceholder;

    //console.log(wordPlaceholder);
    //word guessed by player then congrats message
    if (wordPlaceholder === currentWord) {
        alert('Congratulations! You guessed the word!');

    }

} 
//render the game state 
//i want to disable button if key is already pressed
function  handlekeyClicked(event){
    if (event.key === 'Enter') {
        generateWord();
    }
    if (alphabet.includes(event.key)) {
        handlePlayerSelection(event.key);
    }
} 


/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('main').adEventlistener(  'click',handlekeyClicked);
playAgainBtn.addEventListener('click', generateWord);
document.querySelector