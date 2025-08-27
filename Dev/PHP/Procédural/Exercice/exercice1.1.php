<?php

$tab = [
			[
            	'name' => 'Thib',
                'age' => 29,
                'job' => 'dev',
                'alphabet'=> ['a', 'b', 'c', 'd', 'e', 'f']
            ],
           
            [
            	'name' => 'Sophie',
                'age' => 21,
                'job' => 'étudiante',
                'alphabet'=> ['a', 'b', 'c', 'd', 'e', 'f']
            ],
            [
            	'name' => 'Bernard',
                'age' => 67,
                'job' => 'retraite',
                'alphabet'=> ['a', 'b', 'c', 'd', 'e', 'f']
            ],
            [
            	'name' => 'Josianne',
                'age' => 52,
                'job' => 'prof',
                'alphabet'=> ['a', 'b', 'c', 'd', 'e', 'f']
            ],
            [
            	'name' => 'Pierre',
                'age' => 31,
                'job' => 'gilet jaune',
                'alphabet'=> ['a', 'b', 'c', 'd', 'e', 'f']
            ],
            
            [
            	'name' => 'martine',
                'age' => 45,
                'job' => 'flic',
                'alphabet'=> ['a', 'b', 'c', 'd', 'e', 'f']
            ],
            
       ];
?>
       
<!--
// sortir gilet jaune, sophie, josiane, flic, sortir la liste de toutes le valeurs

 // $tab[4]['job'] // gilet jaune
 
 // $tab[1]['name'] // sophie
 
 // $tab[4]['age'] // 31
 
// $tab[3]['name'] // Josiane

// $tab[5]['job'] // flic
-->
 
 <ul>
	<?php foreach($tab as $value) {?>
    	
        <li> <?= $value['name'] ?> </li>
    <!-- le tableau $tab devien un tableau secondaire value  qui conteint les valeurs de tab-->
    <?php } ?>



</ul>
