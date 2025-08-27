<?php
$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare(
	    'SELECT
	        *
	     FROM testTable 
		 WHERE Id=1'
	);

$query->execute();
$str = $query->fetch(PDO::FETCH_ASSOC);



include 'testPost.phtml';
//recupére les données a afficher dpeuis la base de données que l'on affiche dans le phtml
?>


