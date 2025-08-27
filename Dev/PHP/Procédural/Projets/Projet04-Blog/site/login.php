<?php

session_start();
$error = false;
$message = '';

if (!empty($_POST)) {

    $pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
    $pdo->exec('SET NAMES UTF8');
    
    $query = $pdo->prepare
	(
	    'SELECT * 
            FROM `Users` 
            WHERE user_mail=? '
	);

	$query->execute( [ $_POST['email']] );
    
    $user = $query->fetch(PDO::FETCH_ASSOC);

 	
	if ($user == false) {
    	
        $error = true;
		$message = "Votre adresse mail n'existe pas...";
    
    } else if( $user['user_pwr'] == $_POST['psw'] ) {
        $_SESSION['email'] = $user['user_mail'];
        $_SESSION['psw'] = $user['user_pwr'];
        $_SESSION['firstName'] = $user['user_firstName'];
        $_SESSION['lastName'] = $user['user_lastName'];
        $_SESSION['pseudo'] = $user['user_pseudo'];   
        $_SESSION['role'] = $user['user_role'];
        
        header("Location:admin.php");
	    exit(); 
    } else {
    
    	$error = true;
		$message = "Votre mot de passe est incorrect...";
    
    }

}

$template = 'login';

include 'layout.phtml';
?>