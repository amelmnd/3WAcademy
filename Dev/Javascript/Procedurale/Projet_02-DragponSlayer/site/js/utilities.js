'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/

function getRandomInteger(min, max){
        var RandomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
        return RandomInteger
}

/* REUSSIT SEULE SAUF iSNaN + sa synthaxe */
function requestInteger(message, min, max){
    var messager;
    do  {
            messager = parseInt(window.prompt(message));
    }
    while (messager < min || messager > max || isNaN(messager)==true);
    return messager
}
