<?php

$var = null;
$title = $_POST['title'];
$descript = $_POST['descript'];
$date = $_POST['date'];
$priority = $_POST['priority'];

function add($title, $descript, $date, $priority){
    $line= [$title, $descript, $date, $priority];
    $file = fopen('doc.csv','a');
    fputcsv($file, $line);
    fclose($file);
}

add($title, $descript, $date, $priority);

?>