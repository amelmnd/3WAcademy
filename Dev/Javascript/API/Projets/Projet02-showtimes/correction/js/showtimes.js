//fonctions showtimes
var params = extractUrlParams();

// test si il y a un paramètre id dans l'url
if (params.id == undefined) {

	alert('attention vous devez utilitser un paramètre id');
	
}

// callback geoloc
function position(pos) {
	console.log(pos);
	var location = pos.coords.latitude.toFixed(2)+','+pos.coords.longitude.toFixed(2);
	console.log(location);
	var date = new Date();
	console.log(haveDateNextDay(date, 1));
	requestShowTimesInFrance(params.id, location, date);

}


//code principal

//46793
// geolocalisation
if(navigator.geolocation) {
  console.log('il y a la géoloc');
      console.log(navigator.geolocation);

  navigator.geolocation.getCurrentPosition(position);
  
} else {
  console.log('Pas de geoloc');
}

// appelle fonction qui affiche détails du film en fonction de l'id dans le paramètre url

displayMovieWithId(params.id);