<?php
//mydoc.csv est le fichier qui contient tout mon csv



$file = fopen('mydoc.csv', 'a+')
//ouvre et enregistre le fichier dans la variable

$line = fgetcsv($file)
//récupére que la premiére ligne

fclose($file);
//ferme le fichier 


/*
représentation d'un fichier CSV
a,b,c
d,e,f
g,h,i
*/



$line= ['a', 'b', 'c']
//création d'un tableau

$file = fopen('mydoc.csv', 'a')
//ecricre dan un fichier CSV 

fputcsv($file, $line);
// sauvegarde une ligne , on passe un tableau car c'est du CSV 

fclose($file)
?>