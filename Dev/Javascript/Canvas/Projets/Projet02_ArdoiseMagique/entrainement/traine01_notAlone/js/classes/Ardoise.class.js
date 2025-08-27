'use strict'

var Ardoise = function (canvas){

    //POUR DESSINER IL FAUT : 
    
    //UN SUPPORT
    this.canvas = ardoiseStructure;
    this.context = this.canvas.getContext('2d');
    //définit le Canvasdonc définit la structure ou l'on dessine 
    
    //UN STYLO 
    this.stylo = new Stylo();

    //UNE POSITION OU L'ON POSE SONT STYLO 
    this.localisationActuelle = null;
    //nul car la variable existe mais qu'elle n'a pas de valeur pour le moment

    //SAVOIR SI ON DESSINE EN A CE MOMENT
    this.dessin = false;
    //false car temps que l'on a pas poser le stylo sur l'ardoise on ne dessine rien ce n'est qu'au moment ou l'on posera le crayon que le dessin debutera 

    //POSER LE STYLO SUR L'ARDOISE
    this.canvas.addEventListener('mousedown', this.pressionSouris.bind(this));
    //la pression sur la souris est comme poser un stylo sur une feuille et permet de dessiner sur l'ardoise

/*!! !!!!!!!!!!!!!!!!!!!

Chaque varible appeler dans un contructeur d'objet doit porter this a la place du mot var pour définir  qu'il s'adit d'un propriété de cette element

!!!!!!!!!!!!!!*/}


//fonction appelé dans l'événement
Ardoise.prototype.pressionSouris = function(event){
    //event doit toour etre un argument d'une fonction addEventListener
    console.log('test de la fonction')


}