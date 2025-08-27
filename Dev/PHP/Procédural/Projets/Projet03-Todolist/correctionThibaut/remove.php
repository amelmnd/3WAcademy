<?php
include 'utilities.php';

function removeTasks(array $allTasks, array $indexes)
{
	$tasks = [];
    
    foreach($allTasks as $index => $value)
    {
    	if(in_array($index, $indexes) == false)
        {
        	array_push($tasks, $value);
        }
    
    }
    
    return $tasks;

}



if(empty($_POST) == false) {

	var_dump($_POST["indexes"]);
	
    $allTasks = loadTasks();
    
    $tasks = removeTasks($allTasks, $_POST['indexes']);

	saveTasks($tasks);
}
header("Location:index.php");
exit();
?>