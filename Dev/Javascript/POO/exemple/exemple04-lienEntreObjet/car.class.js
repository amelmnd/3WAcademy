//prototyope
var Car = function (brand, year, model, fuel, km, reservoir) {

    this.brand = brand;
    this.year = year;
    this.model = model;
    this.fuel = fuel;
    this.km = km;
    this.reservoir = reservoir;
    //variable et cle = attribut


}
Car.prototype.affichage = function () {
//methode d'un objet 
      document.getElementById('affiche').innerHTML = '<p>' + this.brand + ' ' + this.year + ' ' + this.model + '</p><p>fuel : ' + this.fuel + 'km ? : ' + this.km + '</p>'; 
      /*     en jQuery 
      $('#affiche').html('<p>' + this.brand + ' ' + this.year + ' ' + this.model + '</p><p>fuel : ' + this.fuel + 'km ? : ' + this.km + '</p>') 
      */
}

Car.prototype.piquerEssence = function(objet, volume ){
    // objet = ce qui est impacter 
    this.reservoir += volume;
    objet.reservoir -=volume;

    console.log('reservoir de ' + this.brand + ':' + this.reservoir)
    console.log('reservoir de '+ objet.brand + ':' +objet.reservoir)
}

