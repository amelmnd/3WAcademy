	// clef api
	const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
	// base url image
	const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

	// function ajax qui recupèrent tous les film en fonction d'un mot clef
	// affichage d'une liste

	function getMovies(movie) {
		$.ajax({
					url: 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+movie,
					type : 'GET',
					dataType: 'json',
					success : function(response){
						console.log(response);
						var data = response.results;
						var list = $('<ul>');
						for (var i= 0; i < data.length; i ++ ) {
							list.append($('<li data-id="'+data[i].id+'">').append(data[i].title));
						}
						$("#list").html(list);
					}
		});
	}


//fonction ajax qui récupère les détails d'un film en fonction de son id
// execute l'affichage
	function showOneMovie(id) {
		$.ajax({
					url: 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_KEY,
					type : 'GET',
					dataType: 'json',
					success : function(response){
						console.log(response)
						var result = $('<div>');

						var img = $('<img>').attr('src', url_img+response.poster_path).css('width', '250px');
						var title = $('<h1>').append(response.title);
						var year = $('<h2>').append(response.release_date);
						var desc = $('<p>').append( response.overview );
						var note = $('<p>').append( response.vote_average );
						var companies = $('<div>').append('<h2>Companies</h2>')
						companies.append('<ul>');

						result.append(img).append(title).append(year).append(desc).append(note).append(companies);
						$('#result').html(result);

						// affichage des companies
						for(var i = 0; i < response.production_companies.length; i++) {
							getCompanyWebSite(response.production_companies[i].id);
						}

						
					}


		});
	}


	function getCompanyWebSite(id) {
		$.getJSON('https://api.themoviedb.org/3/company/'+id+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', displayCompany);
	}

	function displayCompany(response) {
			
			console.log(response);
			$('#result ul').append('<li><a href="'+response.homepage+'" id="'+response.id+'">'+response.name+'</li></a>')
	}