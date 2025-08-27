//prototyope
var Car = function (brand, year, model, fuel, km) {

    this.brand = brand;
    this.year = year;
    this.model = model;
    this.fuel = fuel;
    this.km = km;
    //variable et cle = attribut


}
Car.prototype.affichage = function () {
//methode d'un objet 
      document.getElementById('affiche').innerHTML = '<p>' + this.brand + ' ' + this.year + ' ' + this.model + '</p><p>fuel : ' + this.fuel + 'km ? : ' + this.km + '</p>'; 
      /*     en jQuery 
      $('#affiche').html('<p>' + this.brand + ' ' + this.year + ' ' + this.model + '</p><p>fuel : ' + this.fuel + 'km ? : ' + this.km + '</p>') 
      */
}

  