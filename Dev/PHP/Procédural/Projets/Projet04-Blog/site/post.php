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
	'SELECT * FROM `Post` INNER JOIN `Author` ON Author.author_id=Post.author_id WHERE post_id=?'
);
$query->execute([$_GET['id']]);
$postDetail = $query->fetch(PDO::FETCH_ASSOC);

$query = $pdo->prepare 
	(
		'SELECT `comment_pseudo`, `comment_content`, `comment_dateCreat`, `post_id` 
		FROM `Comment`
		WHERE post_id=?'
	);
$query->execute( [ $_GET['id'] ] );
$commentDetail = $query->fetchAll(PDO::FETCH_ASSOC);

if(empty($_POST) == false) {
	$postId = $_POST['postId'];
    $nickName = $_POST['nickName'];
    $contents = $_POST['contents'];
	var_dump($_POST);

	$query = $pdo->prepare 
	(	
		'INSERT INTO `Comment`(`comment_pseudo`, `comment_content`, `comment_dateCreat`, `post_id`) 
		VALUES (?,?,NOW(),?)'
	);
	$query->execute( [$nickName, $contents, $postId] );
}

 
$template = 'post';

include 'layout.phtml';


?>