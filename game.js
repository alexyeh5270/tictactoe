let gameBoard = ["","","","","","","","",""];
let turn = "Player1";
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


document.getElementById("turn").textContent = "Welcome!";



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
    }
    return gameBoard;
}

function OPlayerMove(gameBoardIndex) {
    if (gameBoard[gameBoardIndex] == "") {
        gameBoard[gameBoardIndex] = "O";
    }
    return gameBoard;
}

function move(gameBoardIndex) {
    gameBoard[4] = "X";
    square4.textContent = gameBoard[4];
    if (turn == "Player1") {
        XPlayerMove(gameBoardIndex);
    } else if (turn == "Player2") {
        OPlayerMove(gameBoardIndex);
    }
}

