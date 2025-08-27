'use strict'

///********** VAR ***********///
var contactForm = document.getElementById('contact-form');
var submitButton = document.getElementById('save-contact');

var add = document.getElementById('add-contact');


var dataArray = [];


var recupLocalStorage = window.localStorage.getItem('contact');
var datasLocalStrage = JSON.parse(recupLocalStorage);
console.log(datasLocalStrage)
var detail = document.getElementById('address-book');
var contactDetail = document.getElementById('contact-details');


var del = document.getElementById('clear-address-book');

///********** FUNCTION ***********///

function recupdata() {
    var datatest = {};
    datatest.lastName = document.getElementById('lastName').value;

    datatest.firstName = document.getElementById('firstName').value;
    datatest.phone = document.getElementById('phone').value;
    switch (document.getElementById('title').value) {
        case 1:
            datatest.title = 'Mme';
            break
        case 2:
            datatest.title = 'Melle';
            break
        case 3:
            datatest.title = 'Mr';
            break
    };

    return datatest
}



function saveData() {
    var jsonData = JSON.stringify(dataArray);
    var recup = window.localStorage.setItem('contact', jsonData);
}

function creatList() {

    for (var i = 0; i < datasLocalStrage.length; i++) {

        var newItemList = document.createElement('li');
        newItemList.innerHTML = '<a href="#" data-item ="' + i + '">' + datasLocalStrage[i].firstName + ' ' + datasLocalStrage[i].lastName + '</a>'
        document.getElementById('address-book').appendChild(newItemList);
    }

}

function detailTitle() {
    var newTitle = document.createElement('h3');
    newTitle.innerHTML = datasLocalStrage[0].firstName + ' ' + datasLocalStrage[0].lastName;
    document.getElementById('contact-details').appendChild(newTitle);
}

function detailPara() {

    var newPara = document.createElement('p');
    newPara.innerHTML = datasLocalStrage[0].phone;
    document.getElementById('contact-details').appendChild(newPara);
}
