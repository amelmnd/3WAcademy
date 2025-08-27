/* Énoncé
L 'utilisateur saisit un montant HT, le résultat TTC s'
affiche en HTML.

Détails
Le taux de TVA utilisé est le taux normal en vigueur en France, il ne bouge pas.
Il faut réafficher toutes les informations: le montant HT, le montant de TVA et le résultat TTC.
Le montant HT est un nombre à virgule(on peut saisir des centimes).
Rappels
Attention au type de la donnée renvoyé par window.prompt() ! 
*/
'use strict'//permet d'avor dplus d'erreur
var prix_HT = parseFloat(prompt('Saisit un montant'));

const TVA = 19.6;

var montant_TVA = ((prix_HT * TVA) / 100);

var prix_TTC = (prix_HT + montant_TVA).toFixed(2);

document.write("<p> le montant HT est: " + prix_HT + "</p><p>le montant de la TVA est: " + montant_TVA + "</p><p>le montant TTC est: " + prix_TTC + "</p>");
/* 

Correction1 : 
'use strict';

const TAUX_DE_TVA = 20.0;

var montantHT;
var montantTTC;
var montantTVA;

montantHT = window.prompt('Quel est le montant HT ?');
montantHT = parseFloat(montantHT);
montantTVA = (montantHT * TAUX_DE_TVA) / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

Correction 2:

const TAUX_DE_TVA = 0.2;
var montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
var montantTTC = (montantHT * TAUX_DE_TVA) + montantHT;
document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');


*/