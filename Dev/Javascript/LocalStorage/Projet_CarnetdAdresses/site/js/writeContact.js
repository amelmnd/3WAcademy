/*var recupLocalStorage = window.localStorage.getItem('contact');
var datasLocalStrage = JSON.parse(recupLocalStorage);
console.log(datasLocalStrage)
var detail = document.getElementById('address-book');
var contactDetail = document.getElementById('contact-details');


function creatList() {

    for (var i = 0; i < datasLocalStrage.length; i++) {

        var newItemList = document.createElement('li');

        newItemList.innerHTML = '<a href="#" data-item ="' + i + '">' + datasLocalStrage[i].firstName + ' ' + datasLocalStrage[i].lastName + '</a>'

        document.getElementById('address-book').appendChild(newItemList);
    }

}


function detailTitle (){
    var newTitle = document.createElement('h3');
    newTitle.innerHTML = datasLocalStrage[0].firstName + ' ' + datasLocalStrage[0].lastName;
    document.getElementById('contact-details').appendChild(newTitle);
}

function detailPara() {

    var newPara = document.createElement('p');
    newTitle.innerHTML = datasLocalStrage[0].phone
    document.querySelector('h3').appendChild(newPara);

    }

creatList()

detail.addEventListener('click', function(){
    contactDetail.classList.toggle('hide');
    detailTitle()
    detailPara()
})
*/
