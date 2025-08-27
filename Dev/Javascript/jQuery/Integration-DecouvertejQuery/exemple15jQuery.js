setTimeout(function () {

    $.event.trigger('coucou');
//creer un evenment

}, 3000);


$(document).on('coucou', function () {

    alert('trigger exemple 1 jQuery');

});


//appel de l'evenement

setTimeout(function () {

    $.event.trigger('coucou');


}, 3000);


$(document).on('coucou', function () {

    console.log('trigger exemple 2 jQuery');

});


$.event.trigger('coucou');