//creer l'ardoise

var Slate = function (canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.currentLocation = null;
    this.isDrawing = false;
    this.pen = new Pen();


    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));

    //this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
    //fonction qui arret le dessin = multiplie la code peut se faire avec une seule fonction

    this.canvas.addEventListener('mouseup', this.onMouseUpAndLeave.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseUpAndLeave.bind(this));
}


Slate.prototype.getMouseLocation = function (event) {
    //pour touver la position a n'importe quel moment 

    /* var location = {
        x: event.clientX,
        y: event.clientY */
    //permet de touver la position ou l'o est dans la fenetre 

    var offset = this.canvas.getBoundingClientRect();
    //différence entre origine du site et origine du canvas

    var location = {
        x: event.clientX - offset.left,
        y: event.clientY - offset.top
    }; //event.clientX ce trouve dans event il doit etres passer en commenatiare dans les fonction
    //determine la position du click dans le canvas par rapport à son point d'origine =

    console.log(location);
    //donne en console log la position au click 

    return location;
    //retourne la localisation
}

Slate.prototype.onMouseDown = function (event) {

    console.log('coucou ');
    this.getCurrentLocation = this.getMouseLocation(event);

    this.getMouseLocation(event);

    this.currentLocation = this.getMouseLocation(event);
    //reccupére la position au moment du click 

    this.isDrawing = true;


}

Slate.prototype.onMouseMove = function (event) {
    var location = this.getMouseLocation(event);
    //recupére a chaque mouvement la nouvelle location 
    if (this.isDrawing == true) {
        this.pen.configure(this.context);
        // permet de crere deux ligne de canvas qui configure le pen 

        //creation du canvas (dessous)
        this.pen.configure(this.context);
        this.context.beginPath();
        this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        //point de départ 
        this.context.lineTo(location.x, location.y);
        //arrive au nuveau point 
        this.context.stroke();

        this.currentLocation = location;
        //change le lieu de la cureent lacatioon = elle passe du int a depart au point b moment actuelle

    }
}

Slate.prototype.onMouseUpAndLeave = function (event) {
    this.isDrawing = false;
}

/* Slate.prototype.onMouseLeave = function (event) {
    //fonction qui arret le dessin

    this.isDrawing = false;
}
peut ce faire mais multiplie le code  
*/