var canvas = document.getElementById("moncanevas");
var context = canvas.getContext('2d');


//permet de faire 2 traits différents 
context.beginPath();
context.strokeStyle = 'blue';
context.lineWidth = 3;
context.arc(200, 100, 50, 0, 2 * Math.PI);
//permet de faire un demi cercle 
context.stroke();
