<?php

/****************** Données ******************/
$tab = [];
$min = 1;
$max = 49;

/****************** Code ******************/

do{
    $nb;
    do {
        $nb = rand($min, $max);

    }while(in_array($nb, $tab) == true);

    array_push($tab, $nb);
}
while(count($tab) < 6);


$write_tab = implode(", ", $tab);

include 'index.phtml';

/****************** CORRECTION ******************/
/*
const NUMBER_COUNT = 6;
const MIN_BOUND = 1;
const MAX_BOUND = 49;

$lotteryDraw = [];

function getLotteryDraw()
{
	$draw = [];
    $random;
    
    while( count($draw) < NUMBER_COUNT ){
    	do {
        
    
    		$random = rand(MIN_BOUND, MAX_BOUND);
        
        } while (in_array($random, $draw) == true);
        
    	array_push($draw, $random);
    
    }
    
    
    sort($draw);
    
    return $draw;

}

$lotteryDraw = getLotteryDraw();


 
 
 
 include 'index.phtml'

?>
*/

?>