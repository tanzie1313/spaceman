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
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const maxWrongGuesses = 6;
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
/*------------------------ Cached Element References ------------------------*/
const wordDispleyEl = document.querySelector('.word-display');
const chancesDisplayEl = document.querySelector('.nums-chances');
const playAgainBtn = document.querySelector('.play-again');
const hintEl = document.querySelector('.hint');
const gameResultEl = document.querySelector('.game-result');
const keyEl = document.querySelectorAll('.key');
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
          key.addEventListener('click', ()=> handleKeyClicked(key.id));
        }
        )
        gameResultEl.classList.add('hidden');
        // hintEl.classList.remove('hidden');
       
        console.log(currentWord);
        console.log(wordHint);
    }
    function showHint() {
        wordHint = wordList[randomIndex].hint;
        hintEl.textContent = wordHint;

    }
    function checkGameStatus() {
        if (wrongGuesses === 6) {
          showGameOver(false);
        } else if (wordCompleted()) {
          showGameOver(true);
        }

    }  //not correct revist after work
    function showGameOver(win) {
        const resultText = win ? 'You Win!' : 'Game Over!';
        const correctAnswer = currentWord;
        gameResultEl.textContent = `${resultText} The word was ${correctAnswer}`;
        gameResultEl.classList.remove('hidden');
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
            render();
        }
    
        render();

        if (remainingGuesses <= 0 || !currentWord.split('').some(letter => !guessedLetters.includes(letter))) {
            playAgainBtn.style.display = 'block';
        }
    }
    

    function resetGame() {
        init();
        playAgainBtn.style.display = 'none';
    }
    document.addEventListener('keydown', (event) => {
        const letter = event.key.toLowerCase();
        if (letter.match(/^[a-z]$/)) {
            handleGuess(letter);
        }
    });
    playAgainBtn.addEventListener('click', resetGame);

    //current letter selected by player  didplay letter in placeholder otherwise chances are descresed

  

    //console.log(wordPlaceholder);
    //word guessed by player then congrats message
 

//render the game state 
//i want to disable button if key is already pressed
function handleKeyClicked(key) {
    if (guessedLetters.includes(key))  {
        return;
    }
    
    guessedLetters.push(key);
    if (!currentWord.includes(key)) {
        remainingGuesses--; 
    
    }
    if (currentWord.includes(key) && guessedLetters.includes(key)) {
      console.log(key); 
        correctGuesses.push(key);
        console.log(correctGuesses.join(''));
    }
    const currentKey = document.getElementById(key);
    currentKey.classList.add('hidden');
console.log(key);
   if  ((currentWord.length === correctGuesses.length) || (remainingGuesses <= 0)) {
    gameResultEl.classList.remove('hidden');
   }
}


    

function init() {
    chooseWord();
}


playAgainBtn.addEventListener('click', init);
document.querySelector
init();