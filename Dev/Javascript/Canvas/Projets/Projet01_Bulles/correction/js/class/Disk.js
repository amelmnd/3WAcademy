'use strict';   

var Disk = function()
{
    this.color = 'black';
    this.radius = 10;
    this.position = {x:0, y:0};
}

Disk.prototype.setRadius = function(radius)
{
    this.radius = radius;
}

Disk.prototype.setColor = function(color)
{
    this.color = color;
}

Disk.prototype.setPosition = function(position){
    
    this.position = position;
}

Disk.prototype.draw = function(context)
{
    // Sauvegarde du contexte
    context.save(); 
    
    // Mise à jour de la couleur de remplissage
    context.fillStyle = this.color; 
    
    // Tracé du disque
    context.beginPath(); 
    context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    context.fill();
    
    // Restauration du contexte
    context.restore(); 
}