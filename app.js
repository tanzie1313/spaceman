//spaceman which is like hangman but with a spaceman and if you guess wrong you build the alien spaceship??
// 
// 1) Define any variables used to track the state of the game:
//    guessedWord - the word to guess
//    spaceship - the spaceship to build
//    wrongLetters - the letters guessed that are not in the word
//    currentWord - the word as it is currently being guessed

// 2) Define the required constants:
//    1) The word to guess
//    2) The spaceship to build
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
//    We'll need a reference to a DOM element to display the spaceship being built
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

///*-------------------------------- Constants --------------------------------*/
const wordList = [
    {
        word: 'astronaut',
        hint: 'a person who is trained to travel into outer space'
    },
    {
        word: 'alien',
        hint: 'a creature from outer space'
    },
    {
        word: 'spaceship',
        hint: 'a vehicle used for travel in outer space'
    },
    {
        word: 'planet',
        hint: 'a celestial body moving in an elliptical orbit around a star'
    },
    {
        word: 'comet',
        hint: 'a celestial object consisting of a nucleus of ice and dust'
    },
    {
        word: 'asteroid',
        hint: 'a small rocky body orbiting the sun'
    },
    {
        word: 'nebula',
        hint: 'a cloud of gas and dust in outer space'
    },
    {
        word: 'galaxy',
        hint: 'a system of millions or billions of stars'
    },
    {
        word: 'universe',
        hint: 'all of space and everything in it'
    },
    {
        word: 'blackhole',
        hint: 'a region of space having a gravitational field so intense that no matter or radiation can escape'

    }
];
const maxWrongGuesses = 6;
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const sounds {
    win: new Audio('sounds/win.mp3'),
    lose: new Audio('sounds/lose.mp3'),
    correct: new Audio('sounds/correct.mp3'),
    incorrect: new Audio('sounds/incorrect.mp3')
};
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

