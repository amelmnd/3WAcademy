// METHODE AJAX DETAILLER COMPLET AVEC DONNE MINIMAL EN JQUERY
    $.ajax({
        url: 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + query,
        type: 'GET',
        //ON PEUT METTRE DU POST SI ON EST DANS SA PROPRE API
        dataType: 'json',
        header: {

        },
        //PEMET DE PASSER DES INFORMATIONS  ex : securisation de la clé API 
        success: displayList,
        // REQUETE REUSSIT
        fail: function (error) {
            //ARGUMENT ERROR : DONNE INFO SUR L ERREUR
            console.log(error.status);
        }
        //GÉRE LES ERREUR AVEC UNE FONCTION ANONYME
    });


//METHODE RACCOURCIE POUR RECUPERE DU JSON
$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + query, displayList);



function displayList(response) {
    console.log(response);
    var data = response.results;
    var list = $('<ul>');
    for (var i = 0; i < data.length; i++) {
        list.append($('<li data-id="' + data[i].id + '">').append(data[i].title));
    }
    $("#list").html(list);

}
