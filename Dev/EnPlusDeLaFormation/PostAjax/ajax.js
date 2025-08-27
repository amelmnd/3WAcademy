function onAjaxChangeDb(event) {

    event.preventDefault();

    var query = $('#changedString').val();

    console.log(query);

    var value = { 'query': query }
/* on peut renvoyer qu'un objet comme données recup dans $_post */
    $.ajax({
        url: "modif.php",
        type: "POST",
        data: value,
    })
        .done(callB)
        .fail(function (error) {

            console.log(error);

        });
/* recupére les informations du formulaire */
}


function callB(res) {
/* response = json_encode($_POST); */
    console.log(JSON.parse(res));

    var response = JSON.parse(res)

    $('#para').text(response.query);
    /* affiche les informations récupérer  */
}

$('#changeText').on('click', onAjaxChangeDb);

