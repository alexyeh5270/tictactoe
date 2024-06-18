let gameBoard = ["","","","","","","","",""];
let turn = "Player1";
let gameStatus = "Progress";
const square0 = document.getElementById("square0");
const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");
const square4 = document.getElementById("square4");
const square5 = document.getElementById("square5");
const square6 = document.getElementById("square6");
const square7 = document.getElementById("square7");
const square8 = document.getElementById("square8");
square0.textContent = gameBoard[0];
square1.textContent = gameBoard[1];
square2.textContent = gameBoard[2];
square3.textContent = gameBoard[3];
square4.textContent = gameBoard[4];
square5.textContent = gameBoard[5];
square6.textContent = gameBoard[6];
square7.textContent = gameBoard[7];
square8.textContent = gameBoard[8];

const turnDisplay = document.getElementById("turn");
turnDisplay.textContent = "Welcome!";



// Assuming square0 to square8 are your HTML elements

document.getElementById('square0').addEventListener('click', () => {
    move(0);
});

document.getElementById('square1').addEventListener('click', () => {
    move(1);
});

document.getElementById('square2').addEventListener('click', () => {
    move(2);
});

document.getElementById('square3').addEventListener('click', () => {
    move(3);
});

document.getElementById('square4').addEventListener('click', () => {
    move(4);
});

document.getElementById('square5').addEventListener('click', () => {
    move(5);
});

document.getElementById('square6').addEventListener('click', () => {
    move(6);
});

document.getElementById('square7').addEventListener('click', () => {
    move(7);
});

document.getElementById('square8').addEventListener('click', () => {
    move(8);
});



function XPlayerMove(gameBoardIndex) {
    if (gameBoard[gameBoardIndex] == "") {
        gameBoard[gameBoardIndex] = "X";
        turn = "Player2";
        turnDisplay.textContent = "It is " + turn + "'s turn!";
        winCheck();
    }
    return gameBoard;
}

function OPlayerMove(gameBoardIndex) {
    if (gameBoard[gameBoardIndex] == "") {
        gameBoard[gameBoardIndex] = "O";
        turn = "Player1";
        turnDisplay.textContent = "It is " + turn + "'s turn!";
        winCheck();
    }
    return gameBoard;
}

function move(gameBoardIndex) {
    if (gameStatus == "Progress") {
        if (turn == "Player1") {
            XPlayerMove(gameBoardIndex);
        } else if (turn == "Player2") {
            OPlayerMove(gameBoardIndex);
        }
    } else {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
    }
    updateBoard();
}

function updateBoard() {
    square0.textContent = gameBoard[0];
    square1.textContent = gameBoard[1];
    square2.textContent = gameBoard[2];
    square3.textContent = gameBoard[3];
    square4.textContent = gameBoard[4];
    square5.textContent = gameBoard[5];
    square6.textContent = gameBoard[6];
    square7.textContent = gameBoard[7];
    square8.textContent = gameBoard[8];
}

function winCheck() {
    //Row win checks
    if (gameBoard[0] == gameBoard[1] && gameBoard[1] == gameBoard[2] && gameBoard[0] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }
    if (gameBoard[3] == gameBoard[4] && gameBoard[4] == gameBoard[5] && gameBoard[3] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }
    if (gameBoard[6] == gameBoard[7] && gameBoard[7] == gameBoard[8] && gameBoard[6] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }

    //Column win checks
    if (gameBoard[0] == gameBoard[3] && gameBoard[3] == gameBoard[6] && gameBoard[0] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }
    if (gameBoard[1] == gameBoard[4] && gameBoard[4] == gameBoard[7] && gameBoard[1] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }
    if (gameBoard[2] == gameBoard[5] && gameBoard[5] == gameBoard[8] && gameBoard[2] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }

    //Diagonal win checks
    if (gameBoard[0] == gameBoard[4] && gameBoard[4] == gameBoard[8] && gameBoard[0] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }
    if (gameBoard[2] == gameBoard[4] && gameBoard[4] == gameBoard[6] && gameBoard[4] !== "") {
        turnDisplay.textContent = "Game Over!  Refresh the page to play again!"
        gameStatus = "Done";
    }
}
