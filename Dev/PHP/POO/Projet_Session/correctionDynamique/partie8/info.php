<?php

session_start();

if(empty($_SESSION['firstName']) == true) {
	
	header('Location: login.php');
	exit();
}

$template = "info";
include 'layout.phtml';

?>