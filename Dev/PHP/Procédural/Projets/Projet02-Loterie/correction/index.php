<?php 

// Nombre de numéros aléatoires à générer pour un tirage
const NUMBER_COUNT = 6;

// Bornes minimale et maximale des numéros tirés
const MIN_BOUND = 1;
const MAX_BOUND = 49;

// La fonction getLotteryDraw génère les numéros d'un tirage sous fiorme d'un tableau
function getLotteryDraw()
{
    // Déclaration d'une variable locale à la fonction pour y stocker le tirage sous forme d'un tableau
    $draw = [];
    
    // Tant que le nombre de numéros souhaités présents dans le tableau n'est pas atteint
    while( count($draw) < NUMBER_COUNT ){
        
        // On tire un nombre aléatoire
        $randomNumber = rand(MIN_BOUND, MAX_BOUND);
        
        // Si ce nombre est déjà présent dans le tableau de tirage
        if(in_array($randomNumber, $draw)){
            
            // On saute le tour de boucle et on passe au suivant
            continue;
        }
        
        /**
         * Ici le tour n'a pas été sauté, le numéro tiré n'est pas présent dans le tableau, on peut l'y ajouter
         * La fonction array_push permet d'ajouter un nouvel élément à la fin d'un tableau
         */ 
        array_push($draw, $randomNumber);
    }
    
    // On trie le tableau de tirage dans l'ordre croissant grâce à la fonction sort
    sort($draw);
    
    // A ce stade le tableau de tirage est rempli et trié, il ne reste plus qu'à la retourner en résultat de la fonction !
    return $draw;
}

// Exécution de la fonction getLotteryDraw(); on stocke son résultat dans une variable pour l'afficher dans le code HTML de la page
$lotteryDraw = getLotteryDraw();

// On aura vérifié préalablement que le résultat attendu étati bien celui obtenu
// var_dump($lotteryDraw);

// Inclusion du template HTML pour affichage du résultat
include 'index.phtml';