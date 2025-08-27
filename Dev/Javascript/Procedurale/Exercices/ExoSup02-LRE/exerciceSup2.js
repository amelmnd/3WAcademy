/* 
Explication

L'algorithme sert à compresser des images en noir et blanc. Une image est une suite de pixel ayant une couleur.

Pour representer une image en noir et blanc, on peut utiliser une string composé de W (white) pour representer les pixels blancs et B(black) pour le noir.

exemple : WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW


On peut reduire la taille de cette string en utilisant l'algorithme LRE.

Il consiste à indiquer pour chaque suite de pixels d'une même couleur le nombre de pixels de cette séquence suivi de la couleur en question.

On obtient, par exemple, pour la ligne précédente :

12W1B14W3B23W1B11W


Ecrire une fonction LRE qui implemente l'algorithme du meme nom.

Votre fonction devra prendre en parametre une string composé de W et B et retourner la string compressée

Exemple : LRE ( "WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW”)
retourne la string "12W1B14W3B23W1B11W"

protip : Utilisez la fonction de la classe string charAt(nb) pour parcourir une string caractere par caractere

https://fr.wikipedia.org/wiki/Run-length_encoding */

//ma version seule

/* var picture = "WWWWWWBWWWWWWWWWWW";
 var picture = "WWWBBBWWWWBBBBWWWWWBBBBBWWWW";

var number = 0;
for (var i = 0; i < picture.length; i++) {
    if (picture.charAt(i) == "W" && picture.charAt(i + 1) == "W") {
        number++;
    } else if (picture.charAt(i) == "W" && picture.charAt(i + 1) == "B" || picture.charAt(i + 1) == "") {
        number++;
        document.write(number + "W");
        number = 0
    } else if (picture.charAt(i) == "B" && picture.charAt(i + 1) == "B") {
        number++;
    } else if (picture.charAt(i) == "B" && picture.charAt(i + 1) == "W" || picture.charAt(i + 1) == "") {
        number++;
        document.write(number + "B");
        number = 0
    } else if (picture.charAt(i) == "W" && picture.charAt(i + 1) == "W") {
        number++;
    }
}
*/
//apres aide 

//var picture = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW";
var picture = 'WWBWWWWBB';
var number = 1;
var currentChar = picture.charAt(0);
var result = "";
for (var i = 1; i < picture.length; i++) {
    if (currentChar != picture.charAt(i)) {
        currentChar = picture.charAt(i)
        document.write(currentChar + "W");
    } else if (currentChar == picture.charAt(i)) {
        document.write(number + "W");
        number = 0;
        number++;
    } else if {
        document.write(number + "B");
        number = 0;
    }
}
