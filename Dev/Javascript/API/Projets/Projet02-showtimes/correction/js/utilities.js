// permet de recupérer les paramètres url

function extractUrlParams () {
	var t = location.search.substring(1).split('&');

	var f = [];
	for (var i=0; i<t.length; i++) {
	var x = t[ i ].split('=');

	f[x[0]]=x[1];
	}
	return f;
}


// convertit date US en date fr


function dateUsToFrench(date) {

	var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	var tabdate = date.split('-');
	var newDate = tabdate[2]+' '+month[tabdate[1]-1]+' '+tabdate[0];

	return newDate;
}


// récupérer les jours suivant automatiquement
// exemple haveDateNexteDay(date, 4) donnera automatiquement le jour d'aujourd'hui + 4

function haveDateNextDay(date, day) {
	date.setDate(date.getDate() + day);
	return date;
}

// découper une string d'horaires.

function splitSeance(string) {
	var tabDate = string.split('T');
	var day = tabDate[0];
	var resultHours = tabgDate[1].split(':');
	var result = { day: day, hour: resultHours[0]+':'+resultHours[1] };
	return result;
}