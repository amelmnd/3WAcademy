<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT * FROM offices'
);

$query->execute();

$offices = $query->fetchAll(PDO::FETCH_ASSOC);

var_dump($offices);

?>