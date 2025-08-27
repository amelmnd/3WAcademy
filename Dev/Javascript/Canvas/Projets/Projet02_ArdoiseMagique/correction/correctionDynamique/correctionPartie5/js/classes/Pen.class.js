'use strict'
//construit le trylo 

var Pen = function () {
    this.color = 'black';
    this.lineWidth = '10'
}

Pen.prototype.configure = function (context) {
    context.strokeStyle = this.color;
    context.lineWidth = this.size;
};
//sert a creer et configurer un stylo