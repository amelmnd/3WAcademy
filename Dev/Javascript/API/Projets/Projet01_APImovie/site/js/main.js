'use strict';

function infoForMovie(response) {
    $('.container h1').append(response.movie.title)

    $('#author').append(response.movie.crew[0].name)
    $('#theme').append(response.movie.genres[0].name)
    $('#desc').append(response.movie.synopsis)

    $('#pict').attr('src', response.movie.poster_image_thumbnail);

    var linkYT = response.movie.trailers[0].trailer_files[0].url.split('=');
    $('#video').attr('src', 'https://www.youtube.com/embed/' + linkYT[1]);


    var date = response.movie.release_dates.FR[0].date.split('-')
    $('#sortie').append(date[2] + ' ' + nomsDesMois[date[1] - 1] + ' ' + date[0]);
    if (data.movie.release_dates.FR != undefined) {

        $('#sortie').text(dateUsToFrench(response.movie.release_dates.FR[0].date));

    } else if (data.movie.release_dates.US != undefined) {

        $('#sortie').text(dateUsToFrench(response.movie.release_dates.US[0].date));

    }
    
    for (var i = 0; i <= castLimit; i++) {
        $('#cast').append(response.movie.cast[i].name + ', ')
    }
}