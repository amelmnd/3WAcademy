var voiture1 = new Car('Renault', '1991', '21 nevada', 'diesel', '325000');

console.log('voiture1', voiture1);


var voiture2 = new Car('Fiat', '1995', 'Panda', 'essence', '33687');

console.log('voiture2', voiture2);


document.write(voiture1.brand + ' ' + voiture1.year);

voiture1.affichage();
//affichage = nom de la fonction

voiture2.affichage();

