
/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
var liste = document.querySelectorAll("li");
var compter = document.querySelector("p em")
var number;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function selection(){
    this.classList.toggle("selected");
    number = document.querySelectorAll(".selected")
    compter.textContent = number.length;
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

for (var i=0; i <liste.length ; i++){
    liste[i].addEventListener('click', selection);

}
/*************************************************************************************************/
/* ************************************** CORRECTION *************************************** */
/*************************************************************************************************/

/*

'use strict';

var photos = document.querySelectorAll('.photo-list li');
var total = document.querySelector('#total em');

function onClickListItem() {
    this.classList.toggle('selected');
    var selectedPhotos = document.querySelectorAll('.photo-list li.selected');
    total.textContent = selectedPhotos.length;
}




for (index = 0; index < photos.length; index++) {
    photos[index].addEventListener('click', onClickListItem);
}

*/