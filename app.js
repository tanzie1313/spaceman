

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
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const maxWrongGuesses = 6;
const wordList = [
    {
        word: 'space',
        hint: ' the vast expanse that exists beyond the earth'
    },
    {
        word: 'alien',
        hint: 'a creature from outer space'
    },
    {
        word: 'rocket',
        hint: 'a cylindrical projectile that can be propelled to a great height or distance by the combustion of its contents'
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
        word: 'orbit',
        hint: 'the curved path of a celestial object or spacecraft around a star, planet, or moon'
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
        word: 'world',
        hint: 'the earth, together with all of its countries and peoples'
    },

    {
        word: 'star',
        hint: 'a fixed luminous point in the night sky that is a large, remote incandescent body like the sun'
    }
];


/*-------------------------------- Variables --------------------------------*/
let currentWord; // the word to guess
let wrongLetters; // the letters guessed that are not in the word
let guessedLetters; // the letters guessed that are in the word
let remainingGuesses; // the number of guesses remlaining
let wordHint; // the hint for the word to guess
let correctGuesses; // 
let gameWon = false;
let correctLetters;
let wordBankCreated = false;
/*------------------------ Cached Element References ------------------------*/
const wordDispleyEl = document.querySelector('.word-display');
const chancesDisplayEl = document.querySelector('.nums-chances');
const playAgainBtn = document.querySelector('.play-again');
const hintEl = document.querySelector('.hint-text b');
const gameResultEl = document.querySelector('.game-result');
const keyEl = document.querySelectorAll('.key');
const gameWonEl = document.querySelector('.content h4');
const gameWonTextEl = document.querySelector('.content p');
const chancesLeftEl = document.querySelector(' .num-chances b');


/*-------------------------------- Functions --------------------------------*/



//generate random word  from wordlist and a hint
function chooseWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    currentWord = wordList[randomIndex].word;
    wordHint = wordList[randomIndex].hint;
    guessedLetters = [];
    wrongLetters = [];
    correctGuesses = [];
    remainingGuesses = maxWrongGuesses;
    keyEl.forEach(key => {
        key.classList.remove('hidden');
        key.addEventListener('click', () => handleKeyClicked(key.id));
    }
    )
    gameResultEl.classList.add('hidden');



}
function showHint() {  //showiing the hint with the random word generated
    wordHint = wordList[randomIndex].hint;
    hintEl.textContent = wordHint;

}

function showGameOver(result) {
    const resultText = result ? 'You Win!' : 'Game Over!'; //ternary operator shorthand for if-else
    const correctAnswer = currentWord;
    gameWonEl.textContent = resultText;
    if (result) {
        gameWonTextEl.textContent = "You saved the spaceman!";  //audio for win
        const gameWon = new Audio("./all-i-do-is-win.mp3");
        gameWon.play();
    }
    else {
        gameWonTextEl.textContent = `${resultText} The word was: `;
        let gameWonAnswerEl = document.createElement('b');
        const gameEnd = new Audio("./trumpet-wah-wah-wrong-answer-comedy.mp3");
        gameEnd.play();
        gameWonAnswerEl.textContent = correctAnswer;
        gameWonTextEl.appendChild(gameWonAnswerEl);

    }
}

+

    function handleGuess(letter) {
        if (!guessedLetters.includes(letter) && !wrongLetters.includes(letter)) {
            if (currentWord.includes(letter)) {
                guessedLetters.push(letter);
            } else {
                wrongLetters.push(letter);
                remainingGuesses--;
            }

        }// taking the parameter letter and checking if the letter is in the guessedLetters array or wrongLetters array
        //checks to see if letter are guessed in the current word then if not it pushed to the wrongletter and the chances are decreased



        if (remainingGuesses <= 0 || !currentWord.split('').some(letter => !guessedLetters.includes(letter))) {
            playAgainBtn.style.display = 'block';
        }
    } //end of game condition... if the remaining guesses are less than or equal to 0 or the current word is split and some of the letters are not guessed then the play again button will be displayed


function resetGame() {
    init();

}
document.addEventListener('keydown', (event) => {
    const letter = event.key.toLowerCase();
    if (letter.match(/^[a-z]$/)) {
        handleGuess(letter);
    }  //if a key is pushed  and pushes it to lower case, handle guess is to updatig whethert key was clicked  was right/not then added to the right array (guessed/wrong)
});
playAgainBtn.addEventListener('click', resetGame);








function handleKeyClicked(key) {
    if (guessedLetters.includes(key)) {
        return;
    }

    guessedLetters.push(key);
    if (!currentWord.includes(key)) {
        remainingGuesses--;
        chancesLeftEl.textContent = remainingGuesses;

    }
    if (currentWord.includes(key) && guessedLetters.includes(key)) {

        correctGuesses.push(key);

    }
    const currentKey = document.getElementById(key);
    currentKey.classList.add('hidden');
    renderWord();

    if (currentWord.length === correctGuesses.length) {
        gameResultEl.classList.remove('hidden');
        showGameOver(true);

    }
    else if (remainingGuesses <= 0) {
        gameResultEl.classList.remove('hidden');
        showGameOver(false);

    }
}

function renderWord() {
    const wordDisipleyEl = document.querySelector('.word-display');
    wordDispleyEl.innerHTML = "";
    const wordSplit = currentWord.split("");
    for (let i = 0; i < wordSplit.length; i++) {
        let letterPage = wordSplit[i];
        if (!correctGuesses.includes(wordSplit[i])) {
            letterPage = "_";

        }
        const letterDiv = document.createElement('div');
        letterDiv.innerText = letterPage;
        wordDispleyEl.appendChild(letterDiv);
    }
}
function renderWordBank() {
    wordBankCreated = true;
    const wordBankEl = document.querySelector('.word-bank');
    for (let i = 0; i < wordList.length; i++) {
        const word = wordList[i].word;
        const wordDiv = document.createElement('div');
        wordDiv.innerText = word;
        wordBankEl.appendChild(wordDiv);
    }

}
function init() {
    chooseWord();
    renderWord();
    if (wordBankCreated == false) {
        renderWordBank();
    }
    chancesLeftEl.textContent = remainingGuesses;
    hintEl.textContent = wordHint;
}


playAgainBtn.addEventListener('click', init);

init();