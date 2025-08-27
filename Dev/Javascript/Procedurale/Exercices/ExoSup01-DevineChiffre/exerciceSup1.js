/*
ExoSup1 : Jeu : Deviner un chiffre
L'ordinateur choisit un nombre au hasard, entre 1 et 1000

Le but est de deviner ce nombre. À chaque fois qu'on propose un nombre, on indique si le nombre à deviner est plus petit ou plus grand que celui-ci.

Le programme s'arrête lorsque l'utilisateur à trouvé le nombre et affiche ensuite le nombre de tentative

protip : Utiliser un prompt pour demander le chiffre.

Afficher le message plus + petit ou plus grand dans le prompt ou avec une alert
 */
'User Stric'

function aleatoire (min, max){
    var numAleatoire = Math.floor(Math.random() * (max - min + 1)) + min;
    return numAleatoire
}
var computeurNumber = aleatoire(1, 100);
console.log(computeurNumber);
var userumber;

do{
    userumber = parseInt(window.prompt("Devinez le nombre que l'ordinateur à choisie entre 1 et 100"))
    if (computeurNumber == userumber){
        window.alert('Félicitation !!');
        
    }
    else if( computeurNumber < userumber){
        window.alert('Trop grand essaye encore');
    } else if (computeurNumber > userumber) {
        window.alert('Trop petit essaye encore');
    } 
    
} while(computeurNumber != userumber);
