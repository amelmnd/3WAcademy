'use strict';

/// LISTE DE FILM

function toggleHideList(event) {
    event.preventDefault()
    $('#list').removeClass('hide');
    var searchValue = $('#search').val();
    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query=' + searchValue, searchMoviesNames)
}
function searchMoviesNames (response){
        $('#list').empty();
    for (var i=0; i<response.results.length; i++){
        $('#list').append('<p data-id =' + response.results[i].id + '> ' + response.results[i].title + '</p > ')
    }
}

///FILM
function toggleHideMovie() {

    $('#movie').removeClass('hide');
    var id = $(this).data('id');    
    $.getJSON('https://api.themoviedb.org/3/movie/'+id+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', movieDetail);
    
}

function movieDetail (response){
    $('#movie').html('<img src="' + url_img + response.backdrop_path + '" />');
    $('#movie').append('<h2>' + response.original_title + '</h2> ')
    $('#movie').append('<p>' + response.release_date + '</p> ')
    $('#movie').append('<p>' + response.overview + '</p> ')

    for (var i = 0; i < response.production_companies.length; i++){

        $('#movi').append('<p data-idcompany =' + response.production_companies[i].id + '>' + response.production_companies[i].name + ' </p> ')


    }

}
