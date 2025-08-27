'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILES *********************************** */
/*************************************************************************************************/

function getRandomInteger(min, max) {
    var RandomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    return RandomInteger
}
function getRandomColor() {
    var r = getRandomInteger(0, 255);
    var g = getRandomInteger(0, 255);
    var b = getRandomInteger(0, 255);
    var a = Math.random(0, 0.7);
    var color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
    return color
}