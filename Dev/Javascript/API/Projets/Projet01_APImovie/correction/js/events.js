// fonction de callback d'évènement 

// lorsque je clique sur le bouton recherche cette fonction recupère ce qu'il y a 
// dans l'input et déclenche la fonction getMovie en faisans passer la mot clef 
// en argumant

function onClickSearchMovie(e) {
	e.preventDefault();
	var movies = $('input[name=search]').val();
	console.log(movies);
	$('#list').removeClass('hide');
	getMovies(movies);

}

//lorsque on clique sur un li on récupère dans cette fonction son data-id
// on déclenche la fonction showOneMovie avec un id en argument

function onClickShowOneMovie() {
	var movie = $(this).data('id');
	$('#list').css('width', '30%');
	$('#result').removeClass('hide');
	showOneMovie(movie);

}


