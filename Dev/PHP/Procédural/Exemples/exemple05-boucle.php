<!-------  exemple.php ------------->
<?php

$name = 'Thibaut';

var_dump($name);

for ($i = 0; $i < 6; $i++) {
	
    echo 'Salut '.$name;
        echo '<p>Salut '.$name.'</p>';


}






?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Loterie 3Wacademy</title>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="lottery.css">
</head>
<body>
    <header>
        <h1>Loterie 3WAcademy</h1>
    </header>

    <p>coucou</p>
    <p>Je m'appelle <?= $name ?></p>
</body>
</html>

