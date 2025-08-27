function onClickPosition(event) {

    console.log(event.clientX);
    console.log(event.clientY);
    var offset = canvas.getBoundingClientRect();
    //indique ou ce trouve l'origine du canvas par rapport à l'écran, le point (0,0)
}


$(document).click('click', onClickPosition);
//donne l'info de la position de la souris par rapport à l'écran