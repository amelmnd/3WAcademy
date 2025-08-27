var canvas = document.getElementById("moncanevas");

var context = canvas.getContext('2d');
//représentee cadre

context.beginPath();
//signifie commence a dessiner

context.moveTo(20, 100);
//(x, y) commence en haut à gauche 
context.lineTo(200, 10);

context.stroke();
//dessine le
