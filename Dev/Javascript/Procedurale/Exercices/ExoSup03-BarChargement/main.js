
var bar = document.getElementById("bar");
var fill = document.getElementById("fill");
var percent = document.getElementById("percent");

var repeat = window.setInterval(test, 100); 
var compteur = 0;
var progress = 0;

function test() {
    if (compteur != 500){
        progress += 5;
        compteur += 25; 
        fill.style.width = compteur + "px";
        percent.textContent = progress + "%";
    }
    else {
        window.clearInterval(repeat)
    }
}
/*
Correction

var fill = document.getElementById("fill");
var percent = document.getElementById("percent");
var size = 0;
var timer;

function interval()
{
	size += 2;
    fill.style.width=size+"%";
	percent.textContent = size+"%";

    if(size >= 100) {

    	window.clearInterval(timer);

    }
}


timer = window.setInterval(interval,50)
*/
