// AJAX qui récupère les infos d'un film en fonction d'un id de film

function displayMovieWithId(id) {

	$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/"+id,
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
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    });

}

// gère l'affichage du détail
function displayOneMovie(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);

    $('#pict').attr('src', data.movie.poster_image_thumbnail);
    $('header h1').text(data.movie.title);
    $('#desc').text(data.movie.synopsis);
    $('#author').text(data.movie.crew[0].name);
    if(data.movie.release_dates.FR != undefined) {
        $('#sortie').text(dateUsToFrench(data.movie.release_dates.FR[0].date));
    } else if (data.movie.release_dates.US != undefined) {
        $('#sortie').text(dateUsToFrench(data.movie.release_dates.US[0].date));
    }
    //gestion du casting, seulement 5 acteurs
    var cast ="";
    for(var i = 0; i < 5; i++) {
        cast += data.movie.cast[i].name+', '
    }

    $('#cast').text(cast);
    $('#theme').text(data.movie.genres[0].name);

    // gestion url vidéo
    var url = data.movie.trailers[0].trailer_files[0].url;
    var youtube = url.split('=');
    var embed = 'https://www.youtube.com/embed/'

    $('#video').attr('src', embed+youtube[1]);
      
}







// recupération showtimes en fonction de la géoloclisation


function requestShowTimesInFrance(movieId, location, date) {

    $.ajax({
        //url: "https://api.internationalshowtimes.com/v4/showtimes?movie_id=46793&countries=FR&location=48.89,2.35&time_to=2018-12-31",

    url: "https://api.internationalshowtimes.com/v4/showtimes?movie_id="+movieId+"&countries=FR&location="+location+"&time_to="+date+"&distance=50",
    type: "GET",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done( displayShowTimes )
    .fail(function(jqXHR, textStatus, errorThrown) {
      
    });

}

// restructure les informations des showtimes

function displayShowTimes(response, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log('show', response);

       var showtimes = [];
         

        for(var i = 0; i < response.showtimes.length; i++) {
            var seance = splitSeance(response.showtimes[i].start_at);
            
                var test = true;
                for (var j = 0; j < showtimes.length; j ++) {
                    if (showtimes[j].cineId == response.showtimes[i].cinema_id) {
                        showtimes[j].show.time.push(seance.hour);
                        showtimes[j].show.url.push(response.showtimes[i].booking_link);
                        test = false;
                    }
                }

                if (test == true) {
                    showtimes.push({
                    cineId :  response.showtimes[i].cinema_id,
                    show : {
                            time : [seance.hour],
                            url : [response.showtimes[i].booking_link]
                            } 
                    });
                }

            
            //console.log(seance);
       }

        console.log('showtimes',showtimes);
        buildTableWithShow(showtimes);

        for(var m = 0; m < showtimes.length; m ++) {
             getCineWithId(showtimes[m].cineId);
        }
       

}

// gère l'affichage des showtimes

function buildTableWithShow(showtimes) {
    var table = $('<table>');
    
    table.append('<tr><td>cinema</td><td>horaire des scéance d\'aujourd\'hui</td></tr>')
    for (var k = 0; k < showtimes.length; k++) {
        var tr = $('<tr>');
        tr.append('<td id="'+showtimes[k].cineId+'">'+showtimes[k].cineId+'</td>')
        var td = $('<td>');

        for(var l = 0; l < showtimes[k].show.time.length; l++) {
            td.append('<a href="'+showtimes[k].show.url[l]+'">'+showtimes[k].show.time[l]+'</a> ')
        }

        tr.append(td);
        table.append(tr);
    }

    
    console.log('table', table);

    $('#affiche').html(table);
}

// gère l'affichage et les infos détaillé des ciné

function getCineWithId(cineId) {

    jQuery.ajax({
    url: "https://api.internationalshowtimes.com/v4/cinemas/"+cineId,
    type: "GET",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
    })
    .done(function(response, textStatus, jqXHR) {
        console.log("HTTP Request Succeeded: " + jqXHR.status);
        console.log('place',response);

        $('#'+response.cinema.id).html('<h3>'+response.cinema.name+'</h3> <p>'+response.cinema.location.address.display_text+'</p>')
        

    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("HTTP Request Failed");
    })

}

