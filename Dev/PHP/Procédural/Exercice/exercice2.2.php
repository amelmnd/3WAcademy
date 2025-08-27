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

element qui ressort : 
a
b
c
d
e
f
*/


//ressortir Serbie, Montenegro, Macédoine sur la meme ligne
/*
<ul>
	<?php foreach($tab[2][2]['country'] as $i => $country): ?>
    	
        <li>
        	<?php if($i == 3) { ?>
            	
                <?php foreach ($country as $soloCountry ): ?>
            			
                        <span><?= soloCountry.' '?></span> // avec ou sans span
                    
            	<?php endforeach?>
            
            <?php } else { ?>
        		
                <?= $country ?>
        	
            <?php } ?>
        </li>
    
    <?php endforeach  ?>

</ul>

element qui ressort : 
Serbie Montenegro Macédoine 

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