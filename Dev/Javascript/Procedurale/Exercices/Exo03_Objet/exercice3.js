var voiture = {
    marque: "Citroen",
    annéFabrication: 2001,
    dateAchat: 2006,
    passagerList: ["Titi", "Grominer"]
};

document.write("<ul><li>" + voiture.marque + "</li><li>" + voiture.annéFabrication + "</li><li>" + voiture.dateAchat + "</li><li>" + voiture.passagerList[0] + ", " + voiture.passagerList[1] + "</li></ul > ");

/* 
Correction: 

var myCar = new Object();

myCar.brand = 'Alfa Roméo';
myCar.buyDate = new Date('2013-06-20');
myCar.passengers = new Array();
myCar.passengers[0] = 'Nicolas';
myCar.passengers[1] = 'Charlotte';
myCar.year = 2012;
document.write('<ul>');
document.write('<li>Marque : ' + myCar.brand + '</li>');
document.write('<li>Année de fabrication : ' + myCar.year + '</li>');
document.write("<li>Date de l'achat : " + myCar.buyDate.toDateString() + '</li>');
document.write('<li>Passager 1 : ' + myCar.passengers[0] + '</li>');
document.write('<li>Passager 2 : ' + myCar.passengers[1] + '</li>');
document.write('</ul>');

myCar = {
    brand: 'Alfa Roméo',
    passengers: ['Nico', 'Nanard'],
    year: 2012

}

*/