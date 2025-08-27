'use strict';

var canvas = document.getElementById('slate')

var slate = new Slate(canvas, 1);

console.log(slate);
//permet de cerre l'ardoise avec le bonne elemnt et les bonne caractéristiques : objet qui permet de stocker toute les infos que l'on veux 


var canvas2 = document.getElementById('slate2');

var slate2 = new Slate(canvas2, 2);