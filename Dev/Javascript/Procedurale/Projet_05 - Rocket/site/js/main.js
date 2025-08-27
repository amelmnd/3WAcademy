'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var compte;
var compter = 10;

var rocketimage = document.querySelector("#rocket");
var compterLetter = document.querySelector("span");

compterLetter.textContent = compter;

console.log(compterLetter)
var redBotton = document.querySelector("#firingButton");

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function funCompter() {
    redBotton.removeEventListener('click', clickRedBotton);
    if (compter > 0) {
        compter -= 1;
        compterLetter.textContent = compter;
        //rocketimage.src = "images/rocket2.gif";
    } else {
        window.clearInterval(funCompter)
        /*rocketimage.src = "images/rocket3.gif";
        rocketimage.classList.add("tookOff");*/
    }
}

function clickRedBotton() {
    compte = window.setInterval(funCompter, 1000);
    window.setTimeout(function () {
        rocketimage.src = "images/rocket2.gif";
    }, 0)
    window.setTimeout(rocketfly, 10000);
}

function rocketfly() {
    rocketimage.src = "images/rocket3.gif";
    rocketimage.classList.add("tookOff");
}

/* Version simple
function funCompter() {
    redBotton.removeEventListener('click', clickRedBotton);
    if (compter > 0) {
        compter -= 1;
        compterLetter.textContent = compter;
        rocketimage.src = "images/rocket2.gif";
    } else {
        window.clearInterval(funCompter)
        rocketimage.src = "images/rocket3.gif";
        rocketimage.classList.add("tookOff");
    }
}
*/

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
redBotton.addEventListener('click', clickRedBotton);






/************************************************************************************/
/* ******************************** CORRECTION **************************************/
/************************************************************************************/

/*

'use strict';

var rocket = document.getElementById('rocket');
var billboard = document.querySelector('#billboard span');
var firingButton  = document.getElementById('firingButton');
var count = 10;
var timer;

function onClickFiringButton()
{

	timer = setInterval(countDown, 1000);
	rocket.src = 'images/rocket2.gif';

    window.setTimeout(out, count * 1000)

}


function out() {

    rocket.src = 'images/rocket3.gif';
    rocket.classList.add('tookOff');
    firingButton.removeEventListener('click', onClickFiringButton);

}


function countDown()
{
	billboard.textContent = count;
	count--;

    if( count == -1 ){

        clearInterval(timer);
        //rocket.src = 'images/rocket3.gif';
        //rocket.classList.add('tookOff');
    }

}
*/