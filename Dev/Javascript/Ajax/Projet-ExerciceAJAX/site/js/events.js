'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/


/*Fuction d'affichage du choix HTML 
: appel de la fonction dans main*/

function textFunction(response) {
    $('#target').html(response);

}
function jsonFunction(response) {
    $('#target').html('<ul>')
    for (var i = 0; i < response.length; i++) {
        $('#target ul').append('<li><p><strong>Prénom :</strong> ' + response[i].firstName + ' </p><p><em>Téléphone : </em>' + response[i].phone + ' </p></li>')
    };
}


function clicked() {
    switch ($('input[name=what]:checked').val()) {
        case "1":
            $.get('php/1-get-html-article.php', myFunction);
            break
        case "2":
            $.getJSON('php/2-get-json-data.php', jsonfun);
            break
        case "3":
            $.get('php/3-get-html-movies.php', myFunction);
           break
    }
};


