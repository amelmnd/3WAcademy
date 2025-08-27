
<?php
session_start();
include 'class/Database.class.php';
include 'class/User.class.php';

if(array_key_exists('id', $_GET) == false) {

	header('Location: login.php');
    exit();

}

$id = $_GET['id'];
$email = $_GET['email'];


if(empty($_POST) == false ) {

	if ($_POST['psw1'] == $_POST['psw2']) {
    
    	$user = new User();
		$user->modifyPassword($_POST['psw1'], $id, $email);
        
        header('Location: login.php');
        exit();
    
    }


}

$template = "changePassword";
include 'layout.phtml';

?>