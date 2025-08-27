var carre = document.getElementById("square");
var positiontopbotom = 0;
var positionrightleft = 0;




function color() {
    this.style.background = "pink";
}

function init (){
keyEvent()
}
function keyEvent() {
    switch (event.which) {
        case 38: //top
            positiontopbotom -= 10;
            carre.style.top = positiontopbotom + "px";
            break;
        case 40: //down
            positiontopbotom += 10;
        carre.style.top = positiontopbotom + "px";
        break;

        case 39: //right
            positionrightleft -= 10;
            carre.style.right = positionrightleft + "px";
            break;
        case 37: //left
            positionrightleft += 10;
            carre.style.right = positionrightleft + "px";
            break;
        default:
            return;
    }
}

carre.addEventListener("dblclick", color);
carre.addEventListener("click", init);
window.addEventListener("keydown", keyEvent);

/* function keyEvent() {
    switch (event.which) {
        case 38: //top
            positiontopbotom += 10;
            carre.style.top = positiontopbotom + "px";
            break;
        case 39: //right
            positionrightleft -= 10;
            carre.style.right = positionrightleft + "px";
            break;
        case 40: //down
            positiontopbotom -= 10;
            carre.style.bottom = positiontopbotom + "px";
            break;

        case 37: //left
            positionrightleft += 10;
            carre.style.left = positionrightleft + "px";
            break;
        default:
            return;
    }
}
 */