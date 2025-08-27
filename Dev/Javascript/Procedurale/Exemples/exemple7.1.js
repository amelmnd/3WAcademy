/* var age;
var isThirtyYearsOld;
var isAdult;
var isNotCentennial;

//OPERATEUR DE COMPARAISON
age = 35;

isThirtyYearsOld = (age == 30); // false
isThirtyYearsOld = (age == 35); // true

isNotCentennial = (age != 100); // true

age = 100;
isNotCentennial = (age != 100); // false


age = 18;

isAdult = (age > 18); // false
isAdult = (age >= 18); // true

isAdult = (age < 18); // false
isAdult = (age <= 18); // true

var string = "coucou";

coucou != 'bonjour'; // true
 */

// exemple condition

var age = 30;
var firstName = 'Tom';

if (age > 18) {

    document.write('<p>Vous êtes majeur.</p>');

}

var age = 15;
var firstName = 'Tom';

if (age > 18) {

    document.write('<p>Vous êtes majeur.</p>');

} else {

    document.write('<p>Vous n\'êtes pas majeur.</p>');

}

var age = parseInt(window.prompt('tapez votre age'));

if (age > 18) {

    document.write('<p>Vous êtes majeur.</p>');

} else {

    document.write('<p>Vous n\'êtes pas majeur.</p>');

}