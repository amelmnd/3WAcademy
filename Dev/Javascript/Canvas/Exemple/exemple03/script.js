var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d');

context.beginPath();
context.beginPath();

context.strokeStyle = 'green';
//fait un trait de couleur : ill faut un nouveau biegin path si on veut un autre trait d'une autre couleur 

context.moveTo(20, 100);
context.lineTo(200, 10);
context.lineTo(500, 300);
context.stroke();