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
<ul>
	<?php foreach($tab as $canard) {?>
    	
        <li> <?= $canard['name'] ?> 
        
        <?php foreach ($canard['alphabet'] as $index => $alpha ) {?>
            <!--execution de php = <//?php -->
        	<span><?= $index ?></span> 
            <span> <?= $alpha ?> </span>
            <!--remplaceer par une valeur </*?=-->
        
        <?php } ?>
        </li>
        
    
    <?php } ?>



</ul>


<!--autre facon d'écrire le foreach
<ul>
	<?php foreach($tab as $canard): ?>
    	
        <li> <?= $canard['name'] ?> 
        
        <?php foreach ($canard['alphabet'] as $index => $alpha ) {?>
        	<span><?= $index ?></span> 
            <span> <?= $alpha ?> </span>
        
        <?php } ?>
        </li>
        
    
    <?php endforeach ?>



</ul>

<!--renvois : 
<ul> // déja la 
  => element creer par la boucle 
	<li> Thib 
    	<span>0</span>
        <span>a</span>
		<span>1</span>
        <span>b</span>
        <span>2</span>
        <span>c</span>
        <span>3</span>
        <span>d</span>
        <span>4</span>
        <span>e</span>
        <span>5</span>
        <span>f</span>
    </li>
    <li> Sophie 
    	<span>0</span>
        <span>a</span>
		<span>1</span>
        <span>b</span>
        <span>2</span>
        <span>c</span>
        <span>3</span>
        <span>d</span>
        <span>4</span>
        <span>e</span>
        <span>5</span>
        <span>f</span>
    </li>
	<li> Bernard 
    	<span>0</span>
        <span>a</span>
		<span>1</span>
        <span>b</span>
        <span>2</span>
        <span>c</span>
        <span>3</span>
        <span>d</span>
        <span>4</span>
        <span>e</span>
        <span>5</span>
        <span>f</span>
    </li>
    <li> Josiane 
    	<span>0</span>
        <span>a</span>
		<span>1</span>
        <span>b</span>
        <span>2</span>
        <span>c</span>
        <span>3</span>
        <span>d</span>
        <span>4</span>
        <span>e</span>
        <span>5</span>
        <span>f</span>
    </li>
    <li> Pierre 
    	<span>0</span>
        <span>a</span>
		<span>1</span>
        <span>b</span>
        <span>2</span>
        <span>c</span>
        <span>3</span>
        <span>d</span>
        <span>4</span>
        <span>e</span>
        <span>5</span>
        <span>f</span>
    </li>
    <li> Martine 
    	<span>0</span>
        <span>a</span>
		<span>1</span>
        <span>b</span>
        <span>2</span>
        <span>c</span>
        <span>3</span>
        <span>d</span>
        <span>4</span>
        <span>e</span>
        <span>5</span>
        <span>f</span>
    </li>
  => fin des element creer par la boucle 

</ul> // déja la
-->