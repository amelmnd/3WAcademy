var date = new Date();
var day = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
var month = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

document.write("Nous sommes le " + day[date.getDay()] +" " + date.getDate() + " " + month[date.getMonth()] + " "+ date.getFullYear()+ ", il est  " + date.getHours() + "h" + date.getMinutes() +" et "+ window.setTimeout(date.getSeconds(), 1000));

/*
correction:

var dayNames = new Array(); // []
dayNames[0] = 'Dimanche';
dayNames[1] = 'Lundi';
dayNames[2] = 'Mardi';
dayNames[3] = 'Mercredi';
dayNames[4] = 'Jeudi';
dayNames[5] = 'Vendredi';
dayNames[6] = 'Samedi';


var monthNames = [];
monthNames[0] = 'Janvier';
monthNames[1] = 'Février';
monthNames[2] = 'Mars';
monthNames[3] = 'Avril';
monthNames[4] = 'Mai';
monthNames[5] = 'Juin';
monthNames[6] = 'Juillet';
monthNames[7] = 'Août';
monthNames[8] = 'Septembre';
monthNames[9] = 'Octobre';
monthNames[10] = 'Novembre';
monthNames[11] = 'Décembre';

var today = new Date();

document.write('Nous sommes le ' + dayNames[today.getDay()] + ' '); // dayNames[4]
document.write(today.getDate() + ' ');
document.write(monthNames[today.getMonth()] + ' ');
document.write(today.getFullYear() + '.');

*/