<?php
session_start();

//Requete PDO
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare 
(
	'SELECT * FROM `Author`'
);
$query->execute();
$authors = $query->fetchAll(PDO::FETCH_ASSOC);



$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');
$query = $pdo->prepare 
(
	'SELECT * FROM `Category`'
);
$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);



if(empty($_POST) == false) {
    $title = $_POST['title'];
    $contents = $_POST['contents'];
    $author = $_POST['author'];
    $category = $_POST['category'];

$query = $pdo->prepare 
(
    'INSERT INTO `Post` (`post_title`, `post_contents`, `post_dateCreation`, `author_id`, `category_id`) 
    VALUES (?,?,NOW(),?,?)'
    //ATTENTION A L'INJECTION SQL
);
$query->execute( [ $title, $contents, $author, $category ] );
    header('Location: index.php');
    exit();
}


$template = 'addPost';

include 'layout.phtml';
?>