<?php
$dico = [

	'name' => 'Robert',
	'age' => 23,
	'taille' => '1m85',
    'fumeur' => false
];

echo '<p>'.$dico['name'].'</p>';


array_key_exists('name', $dico);
//fonction magiqe 
// renvoie true si la clef existe ou sinon false


in_array(23, $dico);
// renvoie true si la value existe ou sinon false

array_search('1m85', $dico); 
// renvoie la clef


$dico['age'];
//renvoie la value
?>