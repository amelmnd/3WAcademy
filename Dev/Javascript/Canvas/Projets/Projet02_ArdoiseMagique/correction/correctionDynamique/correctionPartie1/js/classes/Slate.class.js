//creer l'ardoise

var Slate = function (canvas, num) {
//element necessaire a dessiner 

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    //determine uncanvas et un context

    this.currentLocation = null;
    //a quel endroit je me trouve au moment ou je click
    
    this.isDrawing = false;
    //est ce que je dessine pu pa
        
    this.pen = new Pen();
    //besoin du stylo 

    this.num = num;
    //pour différencier les deux ardoises = exemple d'indépendance des objects
    
    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    //creer un listener 
}


Slate.prototype.onMouseDown = function (event) {
 	console.log('coucou ' + this.num);
    // appel le listener
}