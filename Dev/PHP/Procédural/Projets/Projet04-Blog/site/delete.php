
<?php
session_start();

if(array_key_exists('id', $_GET) == false || ctype_digit($_GET['id']) == false) {
    header('Location: index.php');
    exit();
}
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');
$query = $pdo->prepare 
(
	'DELETE FROM `Post`  WHERE post_id =?'
);
$query->execute([$_GET['id']]);

header("Location:admin.php");
exit(); 

?>