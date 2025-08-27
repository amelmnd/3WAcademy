/* 
Énoncé
L 'utilisateur saisit un montant HT et s'
il le souhaite une remise, le résultat TTC s 'affiche en HTML.

Détails
L 'utilisateur doit pouvoir répondre oui ou yes à la demande de remise.
La saisie de la remise se fait en pourcentage, un nombre à virgule donc, et elle s 'applique sur le montant HT autrement il y a fraude à la TVA ;-)
Si une remise est appliquée, il faut à la fin réafficher le pourcentage de remise
S 'il n'
y a pas de remise il faut à la fin afficher "Aucune remise n'a été appliquée"
Il faut répéter le moins de code possible, notamment il ne faut pas répéter le calcul du montant TTC final.
*/

// EXERCICE SELON LES CONSIGNES
'use strict'
const TVA = 19.6;
var montantRemise;
var remiseTxt;
var prix;

var prixHT = parseFloat(window.prompt('Saisit un montant'));
var montantTVA = ((prixHT * TVA) / 100);

var remise = window.prompt('Souhaitez-vous une remise ? (taper oui ou non)');
if (remise == 'oui' || remise == 'Oui' || remise == 'OUI' || remise = 'yes') {
    montantRemise = parseFloat(window.prompt('Montante de la remise souhaitez ? (en pourcentage)'));
    prix = prixHT - (prixHT * (montantRemise / 100));
    remiseTxt = "Le motant de la remise est : " + montantRemise + "%";
} else {
    prix = prixHT;
    remiseTxt = "Aucune remise n'a été appliquée";
};

var prixTTC = prix + montantTVA;

document.write("<p> Le montant HT est: " + prixHT + "</p><p>Le montant de la TVA est : " + montantTVA + "</p><p>" + remiseTxt + "</p><p>Le montant TTC est : " + prixTTC + "</p> ");
console.log(montantTVA);
console.log(prixHT);
console.log(TVA);

/*
Correction 

'use strict';

const TAUX_DE_TVA = 20.0;

var demandeRemise;
var montantHT;
var montantTTC;
var montantTVA;
var pourcentageRemise;

montantHT = parseFloat(window.prompt('Quel est le montant HT ?'));
demandeRemise = window.prompt('Souhaitez-vous une remise ?');

if (demandeRemise == 'oui' || demandeRemise == 'yes') {

    pourcentageRemise = parseFloat(window.prompt('Montant de la remise en % :'));

    montantHT = montantHT - (montantHT * pourcentageRemise / 100);

}

montantTVA = montantHT * TAUX_DE_TVA / 100;
montantTTC = montantHT + montantTVA;

document.write('<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>');
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');

if (demandeRemise == 'oui' || demandeRemise == 'yes') {
    document.write('<p>Une remise de ' + pourcentageRemise + '% a été appliquée sur le montant HT.</p>');

} else {

    document.write("<p>Aucune remise n'a été appliquée.</p>");
}
*/

/* 
ma VERSION 2 avec message au client: 

'use strict'
var montantRemise;
var remiseTxt;
var prix;
const TVA = 19.6;
var message;

var prixHT = parseFloat(window.prompt('Saisit un montant'));
var montantTVA = ((prixHT * TVA) / 100);

var remise = window.prompt('Souhaitez-vous une remise ? (taper oui ou non)');


if (remise == 'oui' || remise == 'Oui' || remise == 'OUI' ) {
    montantRemise = parseFloat(window.prompt('Montante de la remise souhaitez ? (en pourcentage)'));
    prix = prixHT - (prixHT * (montantRemise / 100));
    remiseTxt = "Le motant de la remise est : " + montantRemise + "%";
    if (montantRemise >= 50){
        message = "Vous êtes gourmand quand même !"
    }
    else{
        message = "Merci de votre considération !"
    }
} else {
    prix = prixHT;
    remiseTxt = "Aucune remise n'a été appliquée";
};

var prixTTC = prix + montantTVA;

document.write("<p> Le montant HT est: " + prixHT + "&#8364;</p><p>Le montant de la TVA est : " + montantTVA + "&#8364;</p><p>" + remiseTxt + "</p><p>Le montant TTC est : " + prixTTC + "&#8364</p>" + "<p>" + message + "</p>"); 
*/