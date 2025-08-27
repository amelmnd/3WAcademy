<?php
 $tableau = [
        "cat"=>"chat", 
        "dog"=>"chien"
];

if (array_key_exists('word', $_POST)){

    $word = $_POST['word'];
    $sens = $_POST['langue'];

    var_dump($word);
    var_dump($sens);

    if ($sens == 'toEnglish'){
        if (in_array($word, $tableau) == true) {
            var_dump(array_search($word, $tableau));
        } else {
            var_dump('unknown word !! ;)-');
        }
        //var_dump($tableau[$word]);
    }  else {
        if (array_key_exists($word, $tableau) == true) {
            var_dump($tableau[$word]);
        } else {
            var_dump('mot inconnu lol mdr');
        }
        
    }
        


    

}

include "header.phtml";
include "index.phtml";
?>