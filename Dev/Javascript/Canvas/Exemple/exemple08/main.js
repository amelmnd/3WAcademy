var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

context.fillStyle = '#333';
context.fillRect(10,10,620,620);
//fond gris foncer


//creer un carrer 
context.strokeStyle='#fff';
context.lineWidth = 10;
context.lineJoin='round';
context.lineCap='round';
context.strokeRect(70, 70, 200, 200);

//tracer un cercle
context.beginPath();
context.arc(470, 170,100, 0, Math.PI*2, true);
context.stroke();
//=dessine
context.closePath();

//tracer une croix
context.beginPath();
context.moveTo(370, 370)
//point ou la ligne commence = point A
context.lineTo(570, 570);
//ou la ligne va arrive au point B 
context.moveTo(570, 370);
context.lineTo(370, 570)
context.stroke();
//arret le dessi
context.closePath();

context.save();
//sauvegarde le context permet de changer les chause et quand on fait retaure au revient a ce moment 

context.strokeStyle='#999';
context.lineWidth=5;
context.setLineDash([20,20]);
//indique espacement 20px plein 20px vide

context.lineDashOffset=10;
context.strokeRect(70,370,200,200);
context.restore();

context.beginPath();
context.moveTo(70, 370);
context.bezierCurveTo(70,570,70,570,270,570);
context.stroke();

context.closePath();





