'use strict'
//construit le trylo 

var Pen = function () {
    this.color = 'black';
    this.lineWidth = '10'
}
//determine les valeurs par défault d'un stylo

Pen.prototype.configure = function (context) {
    context.strokeStyle = this.color;
    context.lineWidth = this.size;
};
//sert a creer et configurer un stylo