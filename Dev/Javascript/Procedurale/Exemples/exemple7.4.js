var age = parseInt(window.prompt('tapez votre age'));

var firstName = 'Tom';

if (firstName == 'Tom' && age >= 18) {

    document.write('<p>Vous êtes majeur et votre nom est Tom</p>');

} else if (firstName == 'Tom' || firstName == 'Pierre') {

    document.write('<p>Vous êtes Tom ou Pierre</p>');

} else if (firstName == 'Tom' || firstName == 'Pierre' && age > 17) {

        document.write('<p>Vous êtes Tom ou Pierre</p>');

} else{
        document.write('<p>Qui etes vous ?</p>')
}