<?php

$tab = [
			[
            	'name' => 'Thib',
                'age' => 29,
                'job' => 'dev',
                'aplhabet' => ['a', 'b', 'c', 'd', 'e', 'f']
            ],
            
           	'coucou',
            
           	[
            	[ ['a'], ['chat' => 'cat'] ],
                
            	524,
                
                [
                	'animals' => ['poulpe', 'canard', 'chien'],
                    'country' => ['France', 'Allemagne', 'Italie', [ 'Serbie', 'Montenegro', 'Macédoine'  ] ]
                ]
            ]

	   ];
       
       
// $tab[1] // coucou

// $tab[2][0][1]['chat'] // cat

// array_search('cat', $tab[2][0][1]); value et dans quel tableau on le recherche 

// $tab[2][2]['country'][3][1] // Montenegro




//ressortir Serbie, Montenegro, Macédoine 
foreach ($tab[2][2]['country'][3] as $country ) {
	
    echo $country;

}
/*
element qui ressort : 
Serbie
Montenegro
Macédoine 
*/


//ressortir poulpe, canard, chien 

foreach ($tab[2][2]['animals'] as $animal) {

	echo $animal;
}

//ressortir l'alphabet 
/*
<ul>
	<?php foreach ($tab[0]['alphabet'] as $alpha):  ?>
		<li><?= $alpha ?></li>
    <?php endforeach ?>
</ul>
*/

?>


<!-- aide 
$tab = [
			[
            	'name' => 'Thib',
                'age' => 29,
                'job' => 'dev',
                'aplhabet' => ['a', 'b', 'c', 'd', 'e', 'f']
            ],
            
           	'coucou',
            
           	[
            	[ 
                	['a'], 
                    ['chat' => 'cat'] 
               	],
                
            	524,
                
                [
                	'animals' => ['poulpe', 'canard', 'chien'],
                    'country' => [
                    				'France', 
                                    'Allemagne', 
                                    'Italie', 
                                    [ 
                                    	'Serbie', 
                                        'Montenegro', 
                                        'Macédoine'  
                                    ] 
                                 ]
                ]
            ]

	   ];
       
-->