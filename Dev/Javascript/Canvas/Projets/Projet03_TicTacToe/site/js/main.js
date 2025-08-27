'use strict'
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

context.fillStyle = '#333';
context.fillRect(10, 10, 620, 620);
context.lineWidth = 10;
context.lineJoin = 'round';
context.lineCap = 'round';

carre(context)

var grille = 600;


var rayon = 80
var color = 10;

/* for (var i = 0; i <= 2 ; i++) {
    var x = 200 * i + 120;
    for (var j = 0; j<=2; j++){
        var nombre = Math.random()
        color += 10 
        var y = 200 * j + 120
        if (nombre>0.5){
                    cercle(context, x, y, color);
        } else{
                    croix(context, x, y, color);
        }
    }
} */

/*  var position = this.canvas.addEventListener('click', this.onMouseDown.bind(this));
    console.log(position) */
    var choix = true;
        

document.getElementById('myCanvas').addEventListener('click', function(event){

    if(choix){
        var i = (event.offsetX - 120) / 200;
        var x = 200 * Math.round(i) + 120;
        var j = (event.offsetY - 120) / 200;
        var y = 200 * Math.round(j) + 120;
        cercle(context, x, y, color);
        color += 10
        choix = false
    }else{
        var i = (event.offsetX - 120) / 200;
        var x = 200 * Math.round(i) + 120;
        var j = (event.offsetY - 120) / 200;
        var y = 200 * Math.round(j) + 120;
       croix(context, x, y, color);
       color += 10
       choix = true;
    }

} )


