<?php

session_start();


        
if (!empty($_POST)) {
	var_dump($_POST);

	$pdo = new PDO('mysql:host=localhost;dbname=session', 'root', 'troiswa');

	$pdo->exec('SET NAMES UTF8');
    
    $query = $pdo->prepare
	(
	    'SELECT * FROM users WHERE email= ?'
	);

	$query->execute( [ $_POST['email'] ] );
    
    $user = $query->fetch(PDO::FETCH_ASSOC);

	if( $user['email'] == $_POST['email'] && $user['psw'] == $_POST['psw'] ) {
    
    	var_dump('connecté');
        
        $_SESSION['email'] = $user['email'];
        $_SESSION['psw'] = $user['psw'];
        $_SESSION['firstName'] = $user['firstName'];
        $_SESSION['lastName'] = $user['lastName'];
        $_SESSION['age'] = $user['age'];
        
        var_dump($_SESSION);

    
    }


}



include 'header.phtml';
include 'login.phtml';
include 'footer.phtml';

?>