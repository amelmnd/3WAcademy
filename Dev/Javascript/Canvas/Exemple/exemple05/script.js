var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d');


//permet de faire 2 traits différents 
context.beginPath();
context.strokeStyle = 'green';
context.lineWidth = 12;
context.moveTo(20, 100);
context.lineTo(200, 10);
context.lineTo(500, 300);
context.stroke();

context.beginPath();
context.strokeStyle = 'red';
context.lineWidth = 10;
context.moveTo(500, 300);
context.lineTo(200, 300);
context.stroke();
