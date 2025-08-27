'use strict'

var ValidateOrder = function () {
    this.order = new LocalStorage;

    this.writing();
    this.sendToPhp();
}
ValidateOrder.prototype.writing = function () {
    var somme = 0;
    for (var i = 0; i < this.order.item.length; i++) {

        var id = this.order.item[i].idProduct;
        var product = this.order.item[i].product;
        var quantity = parseFloat(this.order.item[i].quantity);
        var price = parseFloat(this.order.item[i].price);
        var totalPrice = quantity * price;
        somme += totalPrice;

        $('.meal-list tbody').append('<tr id="' + id + '">');
        $('.meal-list tbody').append('<td id="tdImg"><img src ="' + this.order.item[i].img + '" class="imgMealDetail"/>' + product + '</td>');
        $('.meal-list tbody').append('<td>' + quantity + '</td>');
        $('.meal-list tbody').append('<td>' + this.order.item[i].price + ' €</td>');
        $('.meal-list tbody').append('<td>' + totalPrice.toFixed(2) + ' €</td>');
        $('.meal-list tbody').append('</tr>');
    }

    var TVA = somme * 0.2;
    var TTC = (somme * 0.2) + somme;

    $('#totalht').text(somme.toFixed(2) + ' €');
    $('#tva').text(TVA.toFixed(2) + ' €');
    $('#totalttc').text(TTC.toFixed(2) + ' €');

}


ValidateOrder.prototype.sendToPhp = function () {
    var order = JSON.stringify(this.order.item);
    console.log(order)
    $('#orderValidation').val(order);


}
