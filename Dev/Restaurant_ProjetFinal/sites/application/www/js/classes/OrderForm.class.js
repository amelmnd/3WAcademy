'use strict';

var ObjectMeal = function () {
    
    this.menu = document.getElementById('meal');
    this.mealJson();

    this.menu.addEventListener('change', this.mealJson.bind(this));
    this.buttonSubmit = document.getElementById('submit');
    this.buttonSubmit.addEventListener('click', this.recuInfo.bind(this));

    this.basket = new LocalStorage();
};

ObjectMeal.prototype.mealJson = function() {
    var id = this.menu.value;
    $.getJSON(getRequestUrl() + '/meal?id=' + id, this.jsonBDD);
}

ObjectMeal.prototype.jsonBDD = function (response) {
    $('#meal-details').html('');
    $('#meal-details').append('<img src ="' + getWwwUrl() + '/images/meals/' + response.Photo + '" class="imgMealDetail"/>');
    $('.imgMealDetail').attr('alt', response.Name);
    $('#meal-details').append('<p>' + response.Description + '</p>');
    $('#meal-details').append('<span > Prix: <strong >' + parseFloat(response.SalePrice).toFixed(2) + '</strong> €</span >');

}

ObjectMeal.prototype.recuInfo = function (e) {
    e.preventDefault()
    var idProduct = $('#meal').val();

    var product = $('#meal').find('option:selected').text();
    var price = $('#meal-details > span > strong').html();
    var quantity = $('#quantity').val();
    var img = $('#meal-details img').attr('src');

    this.basket.add(idProduct, quantity, product, price, img);
}




/*
$(function () {
    $('#meal').on('change', mealJson);
});

function mealJson (){
    var id = $('#meal').val();
    $.getJSON(getRequestUrl() + '/meal?id=' + id, functionBDD);
    console.log(id);
}

function functionBDD (response){
    var jsonData = response;
    htmlElements(jsonData);
}


function htmlElements(elements) {
    $('#meal-details').html('');
    $('#meal-details').append('<img src ="' + getWwwUrl() + '/images/meals/' + elements[0].Photo + '" class="imgMealDetail"/>');
    $('.imgMealDetail').attr('alt', elements[0].Name);
    $('#meal-details').append('<p>' + elements[0].Description + '</p>');
    $('#meal-details').append('<span > Prix: <strong >' + formatMoneyAmount(elements[0].SalePrice) +'</strong></span ><br><br><br><br>');
}

*/

