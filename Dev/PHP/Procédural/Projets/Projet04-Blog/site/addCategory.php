<?php
session_start();

if (!empty($_POST)){
    $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
    $pdo->exec('SET NAMES UTF8');
    $query = $pdo->prepare 
    (
        'INSERT INTO `Category`(`category_name`) VALUES (?)'
    );
    $query->execute([$_POST['addCateg']]);

    header("Location:bigAdmin.php");
	exit();
}


$template = 'bigAdmin';

include 'layout.phtml';

?>