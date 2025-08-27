<?php
session_start();

if (!empty($_POST)){
    $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
    $pdo->exec('SET NAMES UTF8');
    $query = $pdo->prepare 
    (
        'INSERT INTO `Author`(`author_firstName`, `author_lastName`) 
        VALUES (?, ?)'
    );
    $query->execute([$_POST['firstNameAuthor'], $_POST['lastNameAuthor']]);

    header("Location:index.php");
	exit();
}


$template = 'bigAdmin';

include 'layout.phtml';

?>