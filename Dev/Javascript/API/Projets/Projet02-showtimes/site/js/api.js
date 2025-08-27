function displayMovieWithId(id) {
    //creation de la requete AJAX avec appel de l'API
    $.ajax({
            url: "https://api.internationalshowtimes.com/v4/movies/" + id,
            type: "GET",
            datatype: "json",
            data: {
                "countries": "FR",
            },
            headers: {
                "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
            },
        })
        .done(displayOneMovie)
        .fail(function (error) {
            console.log("HTTP Request Failed");
        });
}

function displayOneMovie(response) {
    //fonction de présentation de la premiére partie du code qui permret l'affichage des doonnées
    $('#pict').attr('src', response.movie.poster_image_thumbnail);
    $('header h1').text(response.movie.title);
    $('#desc').text(response.movie.synopsis);
    $('#author').text(response.movie.crew[0].name);

    //Affachige de la date de sortiqe quoi qu'il arrive
    if (response.movie.release_dates.FR != undefined) {

        $('#sortie').text(dateUsToFrench(response.movie.release_dates.FR[0].date));

    } else if (response.movie.release_dates.US != undefined) {

        $('#sortie').text(dateUsToFrench(response.movie.release_dates.US[0].date));

    }

    //evite les undefined
    var castNumber = response.movie.cast.length;
    if (castNumber > 5) {
        castnumber = 5;
    }

    var cast = "";
    for (var i = 0; i < castNumber; i++) {
        cast += response.movie.cast[i].name + ', '
    }

    $('#cast').text(cast);

    $('#theme').text(response.movie.genres[0].name);

    var url = response.movie.trailers[0].trailer_files[0].url;//'https://www.youtube.com/watch?v=abcdfrfg'
    var youtube = url.split('='); // ['https://www.youtube.com/watch?v', 'abcdfrfg']


    var embed = 'https://www.youtube.com/embed/';
    $('#video').attr('src', embed + youtube[1]);
}


function requestShowTimesInFrance(movieId, location, date) {
    //requete pour toutes les seances de cibéma qui son sont def sont la ditance et la date et son id
    $.ajax({
            //url: "https://api.internationalshowtimes.com/v4/showtimes?movie_id=46793&countries=FR&location=48.89,2.35&time_to=2018-12-31",

            url: "https://api.internationalshowtimes.com/v4/showtimes?movie_id=" + movieId + "&countries=FR&location=" + location + "&time_to=" + date + "&distance=50",
            type: "GET",
            data: {
                "countries": "FR",
            },
            headers: {
                "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
            },
        })
        .done(displayShowTimes)
        .fail(function (error) {
            console.log(error);
        });
}
function writeMovie() {
    console.log(showtimes[0].cineId + "id");
    console.log(showtimes[0].show.time[0] + "time");
}

function displayShowTimes(response) {
    console.log(response);

    var showtimes = [];
    for (var i = 0; i < response.showtimes.length; i++) {
        var seance = splitSeance(response.showtimes[i].start_at);

        //on boucle sur tous les showtime, achaque tour de boucle on a le jour et l'heure de la seance 
        //var test true (existe)/false(n le trouve pas )
        var test = true;
        for (var j = 0; j < showtimes.length; j++) {
            //test dans le tabeleau qu'il 'y a as de cinéma avec le meme id 
            if (showtimes[j].cineId == response.showtimes[i].cinema_id) { //si le cinema existe = fait ce code
                showtimes[j].show.time.push(seance.hour);
                showtimes[j].show.url.push(response.showtimes[i].booking_link);
                test = false;
            }
        }
        if (test == true) {
            showtimes.push({
                cineId: response.showtimes[i].cinema_id,
                show: {
                    time: [seance.hour],
                    url: [response.showtimes[i].booking_link]
                }
            });
        }
    } //fin de la boucle
/*     console.log('nouveau tab', showtimes);    
    writeMovie();

    displayShowTimes(); */
    buildTableWithShow(showtimes);

} //fin de la fonction


function buildTableWithShow(showtimes) {
    var table = $('<table>');

    table.append('<tr><td>cinema</td><td>horaire des scéance d\'aujourd\'hui</td></tr>');

    for (var k = 0; k < showtimes.length; k++) {
//boucle pour faire un tableau a chaque tout de boucle on fait un tr qui affiche l'id du cinéma 
        var tr = $('<tr>');
        tr.append('<td id="' + showtimes[k].cineId + '">' + showtimes[k].cineId + '</td>');

        var td = $('<td>');

        for (var l = 0; l < showtimes[k].show.time.length; l++) {
//boucle qui fait apparaitre les horraires de la seance dans le cinema
            td.append('<a href="' + showtimes[k].show.url[l] + '">' + showtimes[k].show.time[l] + '</a> ')

        }

        tr.append(td);
//ferme le tr
        table.append(tr);
//ferrme le tabea 
    }


    $('#affiche').html(table);

    for (var m = 0; m < showtimes.length; m++) {

        getCineWithId(showtimes[m].cineId);


    }
}


function getCineWithId(cineId) {
    //permet de récupérer toutes les informations du cinéma 
    jQuery.ajax({
        url: "https://api.internationalshowtimes.com/v4/cinemas/" + cineId,
        type: "GET",
        data: {
            "countries": "FR",
        },
        headers: {
            "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
        },
    })
        .done(function(response) {

            console.log('place', response);

            $('#' + response.cinema.id).html('<h3>' + response.cinema.name + '</h3> <p>' + response.cinema.location.address.display_text + '</p>')


        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            console.log("HTTP Request Failed");
        })



}

