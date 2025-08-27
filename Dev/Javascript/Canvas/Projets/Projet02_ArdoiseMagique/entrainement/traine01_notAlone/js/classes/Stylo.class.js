'use strict'
var Stylo = function () {
    this.couleur  = 'black',
    this.epaisseur = '10'
};

Stylo.prototype.creerStylodansCanva = function (context) {
    //context du canva = 2d
    context.strokeStyle = this.couleur;
    //strokeStyle : spécifie la couleur du trai à tracé
    context.lineWidth = this.epaisseur;
    //lineWidth : définit l'épaisseur des traits
} 
