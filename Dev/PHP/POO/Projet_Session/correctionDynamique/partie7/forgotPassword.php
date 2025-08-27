<?php
session_start();
include 'class/Database.class.php';
include 'class/User.class.php';
$test = '';

if(empty($_POST) == false) {
	$user = new User();
	$test = $user->sendMailForChangePassword($_POST['email']);
}

$template = 'forgotPassword';
include 'layout.phtml';

?>