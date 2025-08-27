//gere les click sur les bouton

var Program = function (canvas) {

    this.pen = new Pen();
    this.slate = new Slate(this.pen, canvas);
    //on instancie les elements 

    this.start();
    //appel la fonction start

}


Program.prototype.start = function () {
//listernet appeler dans le programme 
    var penColor = document.querySelectorAll('.pen-color');

    for (var i = 0; i < penColor.length; i++) {
    //permet d'ecouters tous les elements clicable ettrouver ceui qui a ete cliker

        penColor[i].addEventListener('click', this.onClickPenColor.bind(this));
        //appel la fonction onClickPenColor
    }


}

Program.prototype.onClickPenColor = function () {
//fonction qui determine la couleur du stylo 

	this.pen.color = event.currentTarget.dataset.color;
    //gerer les conflits : event.currentTarget représente l'événement qui génére le conflit

}