<!-------  exemple.php ------------->
<?php
$name = 'Thibaut';

var_dump($name);
function addition($num1, $num2) {
	
    $result = $num1 + $num2;
    return $result;
}

$result = addition(3, 5);
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
    <p><?= $result ?></p>
</body>
</html>
