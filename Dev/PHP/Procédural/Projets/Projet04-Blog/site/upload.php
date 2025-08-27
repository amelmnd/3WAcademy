<?php
session_start();

$template = 'upload';
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');


if(empty($_POST) == false){

    $query = $pdo->prepare 
    (
        'UPDATE `Post`
        SET post_title=?, post_contents=?
        WHERE post_id=?'
    );
    $query->execute([$_POST['title'], $_POST['contents'], $_GET['id']]);

    header("Location:admin.php");
    exit();
} else {
    $query = $pdo->prepare 
    (
        'SELECT `post_id`, `post_title`, `post_contents`  FROM `Post`WHERE post_id=?'
    );
    $query->execute([$_GET['id']]);
    $postUpload = $query->fetch(PDO::FETCH_ASSOC);
    include 'layout.phtml';
}


?>