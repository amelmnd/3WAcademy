for (var i = 0; i < 2; i++) {
    document.write('<p>Je suis un flemmard</p>');
}



var tab = ['chien', 'chat', 'poisson', 'hamster', 'cochon d\'inde', 'rat', 'ragondin', 'furet'];

console.log(tab.length); // 7


for (var i = 0; i < tab.length; i++) {

    document.write('<p>' + tab[i] + '</p>');

}


var i = 0;

while (i < tab.length) {

    document.write('<p>' + tab[i] + '</p>');
    i ++;

}


var i = 0;
while (i < tab.length) {

    document.write('<p>' + tab[i] + '</p>');
    i += 2;
}


for (var i = 30; i >= 0; i--) {
    document.write('<p>' + i + '</p>');

}
