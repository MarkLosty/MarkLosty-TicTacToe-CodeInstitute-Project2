// Selecting all elements with the class 'box' and storing them in the variable 'boxs'
const boxs = document.getElementsByClassName('box');
// Selecting elements by their IDs and storing them in variables
const computerScoreElement = document.getElementById("computer_score")
const playerScoreElement = document.getElementById("player_score");
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const board = document.getElementById('board');

// Initializing game variables
let currentPlayer = 'X';
let computerPlayer = 'O';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Adding event listeners to each box element
for(let i=0; i<boxs.length; i++){
    boxs[i].addEventListener('click', boxClick)
};

// Adding event listener to the reset button
resetButton.addEventListener('click', handleResetClick);

// Initializing and updating the score
setScore(0,0);

// Function to initialize and update the player and computer scores
 
function setScore(isPlayerWon,isComputerWon){
    // Retrieving player and computer scores from local storage
    let playerScore = localStorage.getItem("playerScore");
    let computerScore = localStorage.getItem("computerScore");

    // If scores exist in local storage
    if(playerScore && computerScore){
        // Incrementing player or computer score based on game outcome
        if(isPlayerWon){
            playerScore = parseInt(playerScore) + 1;
        } else if(isComputerWon){
            computerScore = parseInt(computerScore) + 1;
        }

        // Updating player and computer scores in local storage
        localStorage.setItem('playerScore',playerScore);
        localStorage.setItem('computerScore',computerScore);
    } else { // If scores do not exist in local storage
        // Initializing player and computer scores to zero
        localStorage.setItem('playerScore',0);
        localStorage.setItem('computerScore',0);
        playerScore =0;
        computerScore = 0;
    }

    // Updating player and computer scores displayed in the UI
    playerScoreElement.innerText = playerScore;
    computerScoreElement.innerText = computerScore;
}

// Function to handle click event on a box

function boxClick(e) {
    const box = e.target;
    // Finding the index of the clicked box in the boxs array
    const boxIndex = Array.from(boxs).indexOf(box);

    // Checking if the clicked box is already occupied or the game is not active
    if (gameBoard[boxIndex] !== '' || !gameActive) return;

    // Making a move
    makeMove(boxIndex, currentPlayer);

    // Checking for a winner
    if (checkWinner(gameBoard) === currentPlayer) {
        // Updating scores and displaying message for player win
        setScore(1,0)
        message.textContent = 'You win!';
        gameActive = false;
    } else if (gameBoard.includes('')) {
        // Switching to player's turn if game is not over
        currentPlayer = 'X';
        computerMove(boxIndex); 
    } else {
        // Displaying draw message if game ends in draw
        message.textContent = 'Draw!';
        gameActive = false;
    }
}

// Function to get a random index from an array
function getRandomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//Function for the computer's move

function computerMove(currentIndex) {
    // Finding available boxes on the game board
    const emptyboxs = gameBoard.reduce((acc, box, index) => {
        if (box === '') {
            acc.push(index);
        }
        return acc;
    }, []);

    // Selecting a random empty box for the computer's move
    if (emptyboxs.length > 0) {
        tempEmptyboxs = emptyboxs;
        currentEmptyIndex = tempEmptyboxs.indexOf(currentIndex);
        tempEmptyboxs.splice(currentEmptyIndex,1)
        const computer_index = getRandomIndex(tempEmptyboxs);
        makeMove(computer_index, computerPlayer);
    }

    // Checking for winner or draw after computer's move
    if (checkWinner(gameBoard) === computerPlayer) {
        // Updating scores and displaying message for computer win
        setScore(0,1);
        message.textContent = 'Computer wins!';
        gameActive = false;
    } else if (!gameBoard.includes('')) {
        // Displaying draw message if game ends in draw
        message.textContent = 'It\'s a draw!';
        gameActive = false;
    }
}

/**
 * Function to check for a winner
 * board - Current game board
 * Winning player ('X' or 'O') or null if no winner
 */
function checkWinner(board) {
    // Array of win patterns
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Iterating through win patterns
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        // Checking if any player has achieved the win pattern
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    // Checking for draw if no winner
    if (board.includes('')) {
        return null;
    } else {
        return 'draw';
    }
}

/**
 * Function to make a move
 *  index - Index of the box to make a move
 *   player - Player symbol ('X' or 'O')
 */
function makeMove(index, player) {
    // Updating game board with player's move
    gameBoard[index] = player;
    // Updating the UI with player's move
    boxs[index].textContent = player;
    boxs[index].classList.add(player);
}

// Function to handle reset button click

function handleResetClick() {
    // Resetting game variables
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    // Resetting message and UI for new game
    message.textContent = 'You are X, it\'s your turn';
    for(let i=0; i<boxs.length; i++){
        boxs[i].textContent = '';
        boxs[i].classList.remove('X', 'O');
    };
}
