/* Énoncé
L 'utilisateur saisit deux nombres ainsi que l'
opération mathématique souhaitée, le résultat de cette opération s 'affiche en HTML.

Les opérations mathématiques acceptées sont:

    L 'addition : a + b
La soustraction: a - b
La multiplication: a * b
La division: a / b
La puissance: a ^ b(exemple: 3 ^ 2 = 9)
Détails
Il faut afficher une erreur en cas d 'opération mathématique inconnue.
Les nombres saisis peuvent être à virgule.
L 'utilisateur doit pouvoir autant saisir le nom de l'
opération que l 'opérateur correspondant : + - * / ^
Il faut répéter le moins de code possible, notamment le code d 'affichage du résultat.
Rappels
La division par zéro n 'existe pas, il faut donc gérer ce cas... */

var a = parseFloat(window.prompt("saisir un chiffre :"));
var operation = window.prompt("saisir une opération mathématique: ");
var b = parseFloat(window.prompt("saisir un chiffre: "));

if (isNaN(a) == false && isNaN(b) == false) {
    switch (operation) {
        case "addition":
        case "+":
            var add = a + b;
            document.write(add);
            break;
        case "soustraction":
        case "-":
            var soustrac = a - b;
            document.write(soustrac);
            break;
        case "multiplication":
        case "*":
            var multiplie = a * b;
            document.write(multiplie);
            break;
        case "division":
        case "/":
            if ((a && b) != 0) {
                var diviser = a / b;
                document.write(diviser);
            } else {
                document.write("La division par zéro n'existe pas!");
            }
            break;
        case "puissance":
        case "**":
            var puiss = a ** b;
            document.write(puiss);
            break;
        default:
            document.write("une erreur c'est produite dans votre calcul.");
    }
} else {
    document.write("! Attention l'un des caractère tapper n'est pas un chiffre !");
};

/*
Correction: 

'use strict';
var number1;
var number2;
var operation;
var result;

number1   = parseFloat(window.prompt('Saisissez un premier nombre :'));
number2   = parseFloat(window.prompt('Saisissez un deuxième nombre :'));
operation = window.prompt('Quelle opération mathématique souhaitez-vous effectuer ?');


switch(operation)
{
	case '+':
	case 'addition':
    result = number1 + number2;
    break;

    case '-':
    case 'soustraction':
    result = number1 - number2;
    break;

    case '*':
    case 'multiplication':
    result = number1 * number2;
    break;

    case '/':
    case 'division':

    if(number2 == 0)
   	{
       document.write('<p>Erreur : vous ne pouvez pas diviser un nombre par 0 !</p>');

       break;
   	}

    result = number1 / number2;

    case '^':
    case 'puissance':
    result = number1 ** number2;
    break;

    default:
    document.write("<p>Erreur : vous avez indiqué une opération inconnue !</p>");
    break;

}

if(isNaN(result) == true)
{
	document.write("<p>Vous n'avez pas saisi deux nombres !</p>");
	result = undefined;

}

if(result != undefined)
{
    document.write("<p>Le résultat de l'opération est <strong>" + result + '</strong>.</p>');
}

 */