let gameBoard = ["","","","","","","","",""];
document.getElementById("square0").textContent = "";
document.getElementById("square1").textContent = "";
document.getElementById("square2").textContent = "";
document.getElementById("square3").textContent = "";
document.getElementById("square4").textContent = "";
document.getElementById("square5").textContent = "";
document.getElementById("square6").textContent = "";
document.getElementById("square7").textContent = "";
document.getElementById("square8").textContent = "";
document.getELemdnById("turn").textContent = "Welcome!";


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

