<?php

include 'application/bdd_connection.php';


$query = $pdo->prepare(
	'SELECT
            Post.Id,
            Title,
            Contents,
            CreationDate,
            FirstName,
            LastName,
            Category.Name AS Category_Name
        FROM
            Post
        INNER JOIN
            Author
        ON
            Post.Author_Id = Author.Id
        INNER JOIN
            Category
        ON
            Post.Category_Id = Category.Id
        ORDER BY
            CreationDate DESC'
	);

	$query->execute();
	$posts = $query->fetchAll(PDO::FETCH_ASSOC);


$template = 'admin';
include 'layout.phtml';


?>