
<?php
session_start();

$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');
$query = $pdo->prepare 
(
	'SELECT *
    FROM `Post` 
    INNER JOIN Author 
    ON Author.author_id=Post.author_id
    INNER JOIN `Category` 
    ON Category.category_id=Post.category_id'
);
$query->execute();
$postList = $query->fetchAll(PDO::FETCH_ASSOC);


var_dump($_SESSION);

$template = 'admin';

include 'layout.phtml';



?>