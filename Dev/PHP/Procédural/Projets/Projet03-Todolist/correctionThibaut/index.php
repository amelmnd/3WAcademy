<?php

include 'utilities.php';

$now = date_create();

$tasks = loadTasks();


include 'index.phtml';

?>
