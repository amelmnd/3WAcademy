<!-------  exemple.php ------------->
<?php



$name = 'Thibaut';

var_dump($name);

for ($i = 0; $i < 6; $i++) {
	
    echo '<p>Salut '.$name.'</p>';

}


if ($name == 'Paul') {

	echo 'Tu es Paul';
    
} else {

	echo 'Tu n\' es pas Paul';

}


function addition($num1, $num2) {
	
    $result = $num1 + $num2;
    return $result;

}

$result = addition(3, 5);

$table = ['chien', 'chat', 'souris']; /**/

echo $table[1];

$dico = [

	'name' => 'Robert',
	'age' => 23,
	'taille' => '1m85',
    'fumeur' => false
];

echo '<p>'.$dico['name'].'</p>';

include 'exemple11.phtml';


include 'exemple11-footer.phtml';
?>
