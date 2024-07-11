<?php
session_start();

if (!isset($_SESSION['gameBoard'])) {
    $_SESSION['gameBoard'] = ["","","","","","","","",""];
    $_SESSION['turn'] = "Player1";
    $_SESSION['gameStatus'] = "Progress";
}




?>