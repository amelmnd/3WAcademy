var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d');

context.beginPath();
context.beginPath();
context.strokeStyle = 'green';

context.lineWidth = 12;
//fait un trait plus epais

context.moveTo(20, 100);
context.lineTo(200, 10);
context.lineTo(500, 300);
context.stroke();