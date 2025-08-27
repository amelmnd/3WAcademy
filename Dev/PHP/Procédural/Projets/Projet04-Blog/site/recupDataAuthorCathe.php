<?php
session_start();
var_dump($_POST);

if(empty($_POST) == false){

    $query = $pdo->prepare 
    (

        'UPDATE `Author`
        SET `author_lastName` = ?, `author_firstName` = ?
        WHERE author_id=?'
    );
    $query->execute([$_POST['title'], $_POST['contents'], $_GET['id']]);

    header("Location:admin.php");
    exit();


} else {
    $query = $pdo->prepare 
    (
        'SELECT `author_id`, `author_title`, `author_contents`  FROM `Author`WHERE author_id=?'
    );
    $query->execute([$_GET['id']]);
    $authorUpload = $query->fetch(PDO::FETCH_ASSOC);
}


$template = 'bigAdmin';

include 'layout.phtml';

?>
