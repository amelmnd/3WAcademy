'use strict';
///Variable
var canvas = document.getElementById("masterpiece");
var context = canvas.getContext('2d');

/* var setColor= circle.setColor()
 */var size = getRandomInteger(0, 200);

 var initX = 200;
 var initY = 20;


function onClickCanvas(event) {
    var offset = canvas.getBoundingClientRect();
    var mousePositionWindowX = event.clientX-offset.left;
    var mousePositionWindowY = event.clientY - offset.top;
    var circle = new Circle();
    circle.setColor(getRandomColor());
    circle.setRadius(getRandomInteger(0, 100));
    circle.position.x = mousePositionWindowX;
    circle.position.y = mousePositionWindowY;
    circle.draw(context);
} 

//event
canvas.addEventListener('click', onClickCanvas);


