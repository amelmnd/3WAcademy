var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d');


context.beginPath();

context.fillStyle = "pink";
//contour de remplissage du cercle  doit etres avant le cercle
context.arc(200, 100, 100, 0, 2 * Math.PI);
context.fill();
//indique que le cercle doit etres remplit 
