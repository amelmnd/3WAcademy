<?php

header('access-control-allow-origin: *');
header('Content-Type: application/json');


include 'class/Database.class.php';
$database = new Database();

$API_KEY = 'aze';

if (array_key_exists('id', $_GET) == true ) {
    if (array_key_exists('api_key', $_GET) === $API_KEY){
        $sql = 'SELECT * FROM `customers` WHERE `customerNumber`=?';

        $execute = [$_GET['id']];

        $customersId = $database->query($sql, $execute);
        
        echo json_encode($customersId);
        exit();
    } else {
        echo 'Nananananair TU TE CROIS MALIN';
    }
} 
if (array_key_exists('keyword', $_GET) == true && $_GET['api_key'] == $API_KEY) {
    
    $sql = 'SELECT * FROM `customers` WHERE `customerName` LIKE "%"?"%"';

    $execute = [$_GET['keyword']];

    $keywords = $database->query($sql, $execute);
     if (empty($keywords)){
                echo 'aucun résultat';

    } else{
    echo json_encode($keywords);

    }

    exit();
} else{
    echo 'PAS DE CHANCE';
}
?>