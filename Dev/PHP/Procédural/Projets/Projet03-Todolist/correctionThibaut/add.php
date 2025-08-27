<?php

include 'utilities.php';

if(empty($_POST) == false) {


	//var_dump[$_POST];
    $description = $_POST['description'];
    $date        = $_POST['year'].'-'.$_POST['month'].'-'.$_POST['day'];
    $priority    = $_POST['priority'];
    $title       = $_POST['title'];

    
	addTask($title, $description, $date, $priority);
    
    header('Location: index.php');
	exit();
}

function addTask($title, $description, $date, $priority) {
	
    $taskData =
    [
        $title,
        $description,
        $date,
        $priority
    ];
    
    saveTask($taskData);

}