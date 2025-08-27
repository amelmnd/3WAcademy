//fonction anonyme ES5


function (event) 
{
    event.preventDefault();
    console.log('coucou');
}

//fonction anonyme ES6

(event) => {

    event.preventDefault();
    console.log('coucou');
}

var button = document.getElemenById('valider');

button.addEventListener('click', (event) => {

    event.preventDefault();
    console.log('coucou');

});
