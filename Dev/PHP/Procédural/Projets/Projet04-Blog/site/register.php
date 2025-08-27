<?php

if(!empty($_POST)) {
	
	
    var_dump($_POST);
    
    $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

	$pdo->exec('SET NAMES UTF8');
    
    	$query = $pdo->prepare
	(
	    'INSERT INTO `Users`(`user_mail`, `user_pwr`, `user_firstName`, `user_lastName`, `user_pseudo`, `user_role`) VALUES (?, ?, ?, ?, ?, ?)'
	);

	$query->execute( [ $_POST['email'], $_POST['psw'], $_POST['firstName'], $_POST['lastname'], $_POST['pseudo'], 'author' ] );
	
	header("Location:login.php");
	exit(); 
}



$template = 'register';

include 'layout.phtml';


?>
