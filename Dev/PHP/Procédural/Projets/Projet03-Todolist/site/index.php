<?php
function load(){
    $tab = [];

    $file = fopen('doc.csv','a+');

    while(true){
        $linecreate = fgetcsv($file);

        if($linecreate == false){
            break;
        };
       array_push($tab, $linecreate);
    }
    fclose($file);
    return$tab;
}

$tasks = load();

include "index.phtml";


?>