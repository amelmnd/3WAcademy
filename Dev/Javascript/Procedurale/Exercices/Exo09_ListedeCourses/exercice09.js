/* Gérer une liste de tableaus en affichant les informations dans la console du navigateur web.

Détails
La liste de tableaus est stockée dans une seule variable.
Le code ne doit pas se répéter, il faut donc organiser le programme en fonctions.
Les fonctionnalités de gestion de la liste de tableaus sont :
Ajouter un produit par son nom
Supprimer un produit ayant un nom spécifique
Supprimer tous les produits
Afficher la taille et le contenu de la liste
Créer des noms de fonctions clairs, en rapport avec la fonctionnalité implémentée
Les tableaux sont des objets de la classe Array, s'appuyer sur des méthodes de cette classe pour implémenter les fonctionnalités
Pour vérifier le bon fonctionnement du programme il faut écrire du code de test, par exemple :
Ajouter 4 produits simples puis afficher les informations
Demander à l'utilisateur de saisir le nom d'un produit, essayer de supprimer celui-ci puis afficher les informations
Supprimer tous les produits puis afficher les informations */

var courses = ["banane", "lessive"];



function addProd(tableau) {
    var product = window.prompt('Ajouter un produit');
    tableau.push(product);
}


function suppProd(tableau) {
    var supprProd = window.prompt("Nom du produit à supprimer");
    var supprProdIndex = tableau.indexOf(supprProd)
    if (supprProdIndex != -1) {
        tableau.splice(supprProdIndex, 1)
    } else {
        alert("Ce produit n'existe pas dans votre liste")
    }
}


function suppEverProd(tableau) {
    var suppEverProduc = window.prompt("Souhaitez-vous supprimer toute votre liste tableau ?");
    suppEverProd = suppEverProd.toLowerCase();
    if (suppEverProduc == "oui" || suppEverProduc == "yes") {
        tableau.splice(0, tableau.length)
    } else {
        alert("Aucun élément n'a été supprimer")
    }

    //tableau = [];

}

function writeSizeContenant(tableau) {
    var sizetableau = tableau.length;
    var contenanttableau = tableau.join(", ");
    if (sizetableau != 0) {
        console.log("Votre liste de contient " + sizetableau + " produits. Elle est composé de : " + contenanttableau + ".")
    }
    else{
        console.log("Votre liste de contient " + sizetableau + " produits.")
    }
    /* for(var i = 0; i<tableau.length; i++){
        console.log("Votre liste de contient " + sizetableau + " produits.")
    } */
}

addProd(courses);
addProd(courses);
addProd(courses);
addProd(courses);

writeSizeContenant(courses)

suppProd(courses);

writeSizeContenant(courses)

suppEverProd(courses)

writeSizeContenant(courses)
/* 
var shoppingList = new Array();

function addItem(item) {

    shoppingList.push(item);

}

function displayShoppingList() {

    console.log('La liste contient ' + shoppingList.length + ' produit(s).');
    console.log(shoppingList);

    document.write('<ul>');

    for (var i = 0; i < shoppingList.length; i++) {

        document.write('<li>' + shoppingList[i] + '</li>')

    }

    document.write('</ul>');
}

function removeAllItems() {

    shoppingList = [];

    //shoppinglist(0, shoppingList.length -1);

}


function removeItem(item) {
    var index = shoppingList.indexOf(item);

    if (index == -1) {
        console.log("ERREUR : le produit " + item + " n'existe dans la liste de courses");

    } else {
        shoppingList.splice(index, 1);
    }


}





console.clear();


addItem('Fraises');
addItem('Poulet');
addItem('Tournevis');
addItem('Artichaut');

displayShoppingList()


removeItem(window.prompt('Quel produit de la liste de courses souhaitez-vous supprimer ?'));
displayShoppingList();

removeAllItems();
displayShoppingList();
 */