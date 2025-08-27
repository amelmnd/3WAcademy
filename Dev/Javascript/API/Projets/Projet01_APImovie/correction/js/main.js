// création d'un listener au click sur le bouton de recherche
$('#send').on('click', onClickSearchMovie);

// création d'un listener au click sur un li, le li n'existe pas au chargement on écoute le document
$(document).on('click', '#list li' , onClickShowOneMovie);