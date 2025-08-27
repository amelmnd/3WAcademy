<!-------  exemple.php ------------->
<?php


if(array_key_exists('word', $_POST) == true)
{
	$word = $_POST['word'];
    var_dump($word);

}

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Test</title>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans">
    <link rel="stylesheet" href="lottery.css">
</head>
<body>
    <h1>Test</h1>
    <form action="exemple13-MethodPost.php" method="POST">

	<input name="word" type="text"/>
	<input type="submit" value="Traduire"/>

</form>
</body>
</html>