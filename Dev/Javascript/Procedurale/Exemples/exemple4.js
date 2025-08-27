//extraire elemnt d'un tableau 
var animals = ['canard', 'poule', 'vache', 'cochon', 'chèvre'];

console.log(animals[1]); // poule
console.log(animals[0]); // canard
console.log(animals[4]); // chèvre

///declarer un tableau vide
var week = new Array();

week[0] = "lundi";
week[1] = "Mardi";
week[2] = 'Mercredi';
week[3] = 'Jeudi';
week[4] = 'Vendredi';
week[5] = 'Samedi';
week[6] = 'Dimanche';

console.log(week[2]);

var sunday = 6;


console.log(week[sunday]);

var tab = ['canard', 'chien', 'chat'];
console.log(tab)

tab.push('souris');

console.log(tab);

tab.push('oie');

console.log(tab);


tab.indexOf('chien') // 1

tab.indexOf('poule') // -1

tab.splice(2, 1); // supprime chat

console.log(tab);
