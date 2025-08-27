
<?php

if(empty($_POST) == false) {


	$pdo = new PDO('mysql:host=localhost;dbname=test', 'root', 'troiswa');

	$pdo->exec('SET NAMES UTF8');

	$query = $pdo->prepare(
		    'UPDATE testTable SET champText=?  WHERE Id=1'
		);

	$query->execute([ $_POST['query'] ]);
	


    echo json_encode($_POST);
    /*données recupérer*/
	exit();

}
/* permet de  modifier les information directement dans a base de donnéeet retourne les information récupérer dans la variable $_POST */
?>