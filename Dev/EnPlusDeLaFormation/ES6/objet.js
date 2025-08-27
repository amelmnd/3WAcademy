
//objet ES5

var Perso = function(hp, force) 
{
	this.hp = hp;
    this.force = force;
}


Perso.prototype.attaquer(obj) 
{
	obj.hp -= this.force;
}


//objet ES6


class Personnage {

  constructor(hp, force) 
  {
    this.hp = hp;
    this.force = force;
  }

  attasuer(obj) 
  {
  	obj.hp -= this.force;
  }

}
