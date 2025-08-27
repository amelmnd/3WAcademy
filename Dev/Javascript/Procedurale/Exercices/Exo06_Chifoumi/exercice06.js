/* L 'utilisateur saisit le mot pierre, "feuille" ou ciseau, l'
ordinateur choisit aléatoirement l 'une des trois possibilités, et la partie commence !

Détails
Le mot peut tout aussi bien être saisi en minuscules qu 'en majuscules.


Rappels
Si le joueur et l 'ordinateur font le même choix on obtient une égalité.
Le ciseau est écrasé par la pierre(la pierre gagne, le ciseau perd).
La "feuille" est découpée par le ciseau(le ciseau gagne, la "feuille" perd).
La pierre est enveloppée par la "feuille"(la "feuille" gagne, la pierre perd). */


var userPropose = window.prompt('Saisissez "pierre", "feuille", "ciseaux":');
userPropose = userPropose.toLowerCase();
var random = Math.random();

var computeurPropose; 

if (random < (1/3)){
    computeurPropose = "pierre"; 
} else if (random <= (1/3) && random < (2/3)){
    computeurPropose = "feuille";
} else{
    computeurPropose = "ciseaux";
}

if (userPropose == computeurPropose) {
    document.write("Il y a égalité")
} else if (userPropose != computeurPropose) { 
        if (userPropose == "pierre" && computeurPropose == "feuille") {
        document.write("L'ordinateur gagne car la feuille gagne contre la pierre");
    } else if (userPropose == "feuille" && computeurPropose == "pierre") {
        document.write("Le joueur gagne car la feuille gagne contre la pierre");
    } else if (userPropose == "pierre" && computeurPropose == "ciseaux") {
        document.write("Le joueur gagne car la pierre gagne contre les ciseaux");
    } else if (userPropose == "ciseaux" && computeurPropose == "pierre") {
        document.write("L'ordinateur gagne car la pierre gagne contre les ciseaux");
    } else if (userPropose == "feuille" && computeurPropose == "ciseaux") {
        document.write("L'ordinateur gagne car les ciseaux gagne contre la feuille");
    } else if (userPropose == "ciseaux" && computeurPropose == "feuille") {
        document.write("Le joueur gagne car les ciseaux gagne contre la feuille");
    } else {
            document.write("Va comprendre ")}
} else {
    document.write("Erreur ");
};
console.log(computeurPropose);
console.log(userPropose);

/*
Correction: 
'use strict';

var computer;
var player;
var random;

player = window.prompt('Que choisissez-vous : pierre, feuille ou ciseau ?');
player = player.toLowerCase();

random = Math.random();

if (random < 1 / 3) // Entre 0.00 et ~0.33 : l'ordinateur sélectionne la pierre
{
    computer = 'pierre';
} else if (random < 2 / 3) // Entre ~0.33 et ~0.66 : l'ordinateur sélectionne la feuille
{
    computer = 'feuille';
} else // Au-delà de ~0.66 : l'ordinateur sélectionne le ciseau
{
    computer = 'ciseau';
}

document.write("<p>Choix de l'ordinateur : <strong>" + computer + '</strong></p>');


if (computer == player) {
    document.write('<p>Vous avez choisi la même chose : égalité !</p>');
} else {
    switch (computer) {
        case 'pierre':
            if (player == 'feuille') {
                document.write('<p>La feuille enveloppe la pierre : vous gagnez !</p>');
            } else // player == 'ciseau'
            {
                document.write('<p>Le ciseau est écrasé par la pierre : vous perdez !</p>');
            }
            break;

        case 'feuille':
        if (player == 'pierre') {
            document.write('<p>La pierre est enveloppée par la feuille : vous perdez !</p>');
        } else // player == 'ciseau'
        {
            document.write('<p>Le ciseau découpe la feuille : vous gagnez !</p>');
        }
        break;
        
        case 'ciseau':
        if (player == 'pierre') {
            document.write('<p>La pierre écrase le ciseau : vous gagnez !</p>');
        } else // player == 'feuille'
        {
            document.write('<p>La feuille est découpée par le ciseau : vous perdez !</p>');
        }
        break;
        }
    }
}
*/