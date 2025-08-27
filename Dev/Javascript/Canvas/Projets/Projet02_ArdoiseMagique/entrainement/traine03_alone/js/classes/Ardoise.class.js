var Ardoise = function (structureArdoise) {

    this.canvas = structureArdoise;
    this.context = this.canvas.getContext('2d');

    this.stylo = new Stylo ();

    this.location = null;

    this.dessiner = false;

    this.canvas.addEventListener('mousedown', this.sourispresser)
}

Ardoise.prototype.sourispresser = function(event){
    console.log('coucou')
}