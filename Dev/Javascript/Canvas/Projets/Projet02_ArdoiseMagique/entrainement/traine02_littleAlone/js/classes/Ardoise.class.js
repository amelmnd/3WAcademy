var Ardoise = function (structureArdoire) {

    this.canvas = structureArdoire;
    this.context = this.canvas.getContext('2d');

    this.stylo = new Stylo();
    
    this.position = null;

    this.dessin = false;

    this.canvas.addEventListener('mousedown', this.pressionSouris.bind(this))
}

Ardoise.prototype.pressionSouris = function(event){
    console.log("coucou");
}