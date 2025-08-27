var rec = document.querySelector('.rectangle');
var clicked = document.getElementById('toggle-rectangle');

function bouton() {
    rec.classList.toggle("rectangle");
}

function classGood() {
    rec.classList.toggle("good");
}

function classImp() {
    rec.classList.toggle("important");
    rec.classList.remove("good");

} 

clicked.addEventListener('click', bouton);
rec.addEventListener('mouseover', classImp);
rec.addEventListener('mouseout', classImp);
rec.addEventListener('dblclick', classGood);

/*

/*************************************************************************************************/
/* ***************************************** CORRECTION ***************************************** */
/*************************************************************************************************

var button = document.getElementById('toggle-rectangle');
var rectangle = document.querySelector('.rectangle');


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************

function onClickButton() {
    rectangle.classList.toggle('hide');
}


function onDoubleClickRectangle() {
    rectangle.classList.toggle('good');

}

function onMouseOverRectangle() {

    rectangle.classList.add('important');
}

function onMouseOutRectangle() {
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************


button.addEventListener('click', onClickButton);

rectangle.addEventListener('dblclick', onDoubleClickRectangle);

rectangle.addEventListener('mouseout', onMouseOutRectangle);
rectangle.addEventListener('mouseover', onMouseOverRectangle);

*/

