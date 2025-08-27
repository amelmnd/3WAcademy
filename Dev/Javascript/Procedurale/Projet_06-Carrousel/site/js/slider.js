'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var imageChose = [{
        source: "images/1.jpg",
        legend: "Street Art"
    },
    {
        source: "images/2.jpg",
        legend: "Fast Lane"
    },
    {
        source: "images/3.jpg",
        legend: "Colorful Building"
    },
    {
        source: "images/4.jpg",
        legend: "Skyscrapers"
    },
    {
        source: "images/5.jpg",
        legend: "City by Night"
    },
    {
        source: "images/6.jpg",
        legend: "Eiffel Tower by Night"
    }

]
var i = 0;
//clique nav bar
var bar = document.querySelector('nav>a');
//apparition disparition
var dislay = document.querySelector('.hide');
//fleche qui change
var arrow = document.querySelector('nav>a>i');

//images
var img = document.querySelector('figure>img');

var legende = document.querySelector('figcaption');



//bouton aléatoire
var aleatoire = document.querySelector('.fa-random');

var next = document.querySelector('.fa-forward');

var preview = document.querySelector('.fa-backward');


var play = document.querySelector('#slider-toggle>i');
var playing = false;
var run;


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function visibility() {
    dislay.classList.toggle("hide");
    arrow.classList.toggle("fa-arrow-right");
    arrow.classList.toggle("fa-arrow-down");

}

function imagesAleatoire() {
    i = getRandomInteger(0, 5);
    img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend;

}

function nextImages() {
    if (i == imageChose.length) {
        i = 0;
    }
    img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend;
    i++;
}

function previewImages() {
    if (i <= 0) {
        i = imageChose.length;
    }
    i--
    ;img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend;
    
}

function playImages() {
    i++;
    if (i == imageChose.length) {
        i = 0-1
    }
    img.src = imageChose[i].source;
    legende.textContent = imageChose[i].legend    
    
}

function clickedPlay() {
    if (playing == false) {
        run = window.setInterval(playImages, 1000);
        playing = true;
    } else {
        window.clearInterval(run);
        playing = false;
    }
    play.classList.toggle('fa-play');
    play.classList.toggle('fa-pause');
}

function keyEvent() {
    switch (event.which) {
        case 32:
            clickedPlay();
            break;
        case 39:
            nextImages();
            break;
        case 37:
            previewImages();
            break;

        case 82:
            imagesAleatoire();
            break;
        default:
            return;

    }
}
/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
playImages()


bar.addEventListener('click', visibility);

aleatoire.addEventListener('click', imagesAleatoire);
aleatoire.addEventListener('key', imagesAleatoire);
play.addEventListener('click', clickedPlay);

next.addEventListener('click', nextImages);
preview.addEventListener('click', previewImages);

window.addEventListener("keydown", keyEvent)

/*************************************************************************************************/
/* ************************************** CORRECTION *************************************** */
/*************************************************************************************************/

/*
<!----------------------js/utilities.js.----------------------------->
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    <!----------------------js/slider.js.----------------------------->
 <
 script >


     var toolbar = document.getElementById('#toolbar-toggle');
 var nav = document.querySelector('.toolbar ul');
 var icon = document.querySelector('#toolbar-toggle i');
 var next = document.getElementById('slider-next');
 var prev = document.getElementById('slider-previous');
 var random = document.getElementById('slider-random');
 var play = document.getElementById('slider-toggle');

 var pict = document.querySelector('#slider img');
 var fig = document.querySelector('#slider figcaption');

 var index = 0;
 var isPlaying == false;
 var timer;

 var slides = [{
         image: 'images/1.jpg',
         legend: 'Street Art'
     },
     {
         image: 'images/2.jpg',
         legend: 'Fast Lane'
     },
     {
         image: 'images/3.jpg',
         legend: 'Colorful Building'
     },
     {
         image: 'images/4.jpg',
         legend: 'Skyscrapers'
     },
     {
         image: 'images/5.jpg',
         legend: 'City by night'
     },
     {
         image: 'images/6.jpg',
         legend: 'Tour Eiffel la nuit'
     }
 ];


 function onToolbarToggle() {

     nav.classList.toggle('hide');
     icon.classList.toggle('fa-arrow-down');
     icon.classList.toggle('fa-arrow-right');
 }

 function goToNext() {

     if (index >= slides.length - 1) {

         index = 0;

     } else {

         index++;
     }

     pict.src = slides[index].image;
     fig.textContent = slides[index].legend;

 }


 function goToPrev() {

     if (index <= 0) {

         index = slides.length - 1;

     } else {

         index--;
     }

     pict.src = slides[index].image;
     fig.textContent = slides[index].legend;

 }

 function goToRandom() {

     index = getRandomInteger(0, slides.length - 1);

     pict.src = slides[index].image;
     fig.textContent = slides[index].legend;

 }

 function goToPlay() {
     if (isPlaying == false) {

         timer = window.setInterval(goToNext, 2000);
         isPlaying = true;

     } else {
         window.clearInterval(timer);
         isPlaying = false;

     }

     var faPlay = document.querySelector('#slider-toggle i');
     faPlay.classList.toggle('fa-play');
     faPlay.classList.toggle('fa-pause');

 }

 function onPushButtons(event) {

     console.log(event);

     if (isPlaying == true) {
         goToPlay();
     }

     switch (event.keyCode) {

         case 39:
             goToNext();
             break;

         case 37:
             goToPrev();
             break

         case 82:
             goToRandom();
             break;

         case 32:
             goToPlay();
             break
     }


 }



 pict.src = slides[index].image;
 fig.textContent = slides[index].legend;

 toolbar.addEventListener('click', onToolbarToggle);
 next.addEventListener('click', goToNext);
 prev.addEventListener('click', goToPrev);
 random.addEventListener('click', goToRandom);
 play.addEventListener('click', goToPlay);

 document.addEventlistener('keyup', onPushButtons);


*/