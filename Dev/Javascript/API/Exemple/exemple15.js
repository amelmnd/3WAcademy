//exemple sur l'API : themoviedb

const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
//clé de l'api

// 'https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c'
// => lien permettant de tester l'api (clé et donné voulu) à mettre dans le navigateur avec pour donnée un elemnt arbitraire 


$.getJSON('https://api.themoviedb.org/3/movie/297802?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', callBack);
    
const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

function callBack(response) {

    console.log(response);
    //ressort tous les elements du JSON
    console.log(response.id);
    //donne le id

    document.write('<img src="' + url_img + response.backdrop_path + '" />');
    //affichage d'une iiimage grace a d'une concaténation
    document.write(response.original_title);




}