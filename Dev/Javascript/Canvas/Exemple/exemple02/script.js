var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(20, 100);
//instructuin de debut

context.lineTo(200, 10);
context.lineTo(500, 300);

context.stroke();
//instruction de fin

