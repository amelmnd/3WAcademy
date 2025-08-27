
<?php

$requestUrl = $_SERVER['SCRIPT_NAME'];

$adresse = $_SERVER["REQUEST_URI"];
var_dump($adresse);
// $_SERVER["REQUEST_URI"]  => rooting/index2.php/register

$url = substr($adresse, 60);
var_dump($url);

//$adresse => http://10.10.109.52/rooting/index2.php/register

// $url => register

if($url == false || $url=='') {

	include 'controllers/homeController.class.php';
    
    $page = 'home';
    
} else {

	include 'controllers/'.$url.'Controller.class.php';
	$page = $url;
}

include 'www/layout.phtml';

?>
