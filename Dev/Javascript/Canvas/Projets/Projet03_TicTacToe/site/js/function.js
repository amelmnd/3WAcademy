'use strict'
function carre(context){
    context.save();
    context.strokeStyle = '#999';
    context.lineWidth = 5;
    context.beginPath();
    context.setLineDash([20, 20]);
    context.lineDashOffset = 10;
    context.moveTo(220, 20);
    context.lineTo(220,620);
    context.moveTo(420, 20);
    context.lineTo(420, 620);
    context.moveTo(20, 220);
    context.lineTo(620, 220);
    context.moveTo(20, 420);
    context.lineTo(620,420);
    context.stroke();
    context.closePath();
    context.restore();

}


function cercle(context, x, y, color) {
    context.beginPath();
    context.strokeStyle = 'hsl('+color +'deg, 75%, 50%';
    context.arc(x, y, 80, 0, Math.PI * 2, true);
    context.stroke();
    context.closePath();

}

function croix(context, x, y, color){
    context.beginPath();
    context.strokeStyle = 'hsl('+color+'deg, 75%, 50%';
    context.moveTo(x-50, y-50);
    context.lineTo(x+50, y+50);
    context.moveTo(x+50, y-50);
    context.lineTo(x-50, y+50)
    context.stroke();
    context.closePath();
}
