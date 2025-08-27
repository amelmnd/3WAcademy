function position(pos) {
    console.log(pos);
}

//FONCTION DE CALLBACK QUI DONNE LATITUDE, LONGITUDE

//TEST DE LA POSSIBILITERR DE FAIRE DE LA GEOLOCALISATION
if (navigator.geolocation) {

    console.log('il y a la géoloc');

    navigator.geolocation.getCurrentPosition(position);

} else {

    console.log('Pas de geoloc');
}
