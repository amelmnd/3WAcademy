/* Demander à l'utilisateur de saisir obligatoirement un nombre quoiqu'il arrive, afficher ce nombre ensuite en HTML.
Détails
On peut saisir un nombre entier comme un nombre à virgule.
 var dataUser;
do {
    dataUser = parseFloat(window.prompt('Enter un nombre'))
    document.write(dataUser)
} while (dataUser != NaN)
document.write('<p>trouvé</p>')

PAS TROUVER */


'use strict';

var number;

do {
    number = parseFloat(window.prompt('Veuillez saisir un nombre :'));
}
while (isNaN(number) == true);
document.write('<p>Merci, vous avez saisi <strong>' + number + '</strong>.</p>');
