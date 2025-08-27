'use strict';

var LocalStorage = function () {
    this.item = null;
    this.load();
    this.write()

    this.buttonDelete;
    
}
LocalStorage.prototype.save = function () {

    saveDataToDomStorage('Panier', this.item);
}

LocalStorage.prototype.load = function () {
    this.item = loadDataFromDomStorage('Panier');

    if (this.item == null) {
        this.item = [];
    }
}

LocalStorage.prototype.add = function (idProduct, quantity, product, price, img) {
    if (!isNaN(parseInt(quantity))) {
        $('#quantity').css('border', '1px solid grey')
        for (var i = 0; i < this.item.length; i++) {
            var result = parseInt(quantity) + parseInt(this.item[i].quantity);
            if (this.item[i].idProduct == parseInt(idProduct)) {
                this.item[i].quantity = result;
                this.save();
                this.write()
                return;
            }
        }
        this.item.push({
            idProduct: idProduct,
            quantity: quantity,
            product: product,
            price: price,
            img : img
        })
        this.save()
        this.write()

    } else{
        $('#quantity').css('border', '1px solid red')
    }
}

LocalStorage.prototype.write = function () {
    if (this.item.length == []) {
        $('.nullTab').removeClass('hidden')
        $('.orderTab').addClass('hidden')
        console.log(this.item);
    }
    
    if (this.item.length != []) {
        $('.nullTab').addClass('hidden')
        $('.orderTab').removeClass('hidden')
        $('.orderTab tbody').html('');
        for (var i = 0; i < this.item.length; i++) {

            var id = this.item[i].idProduct;
            var product = this.item[i].product;
            var quantity = parseFloat(this.item[i].quantity);
            var price = parseFloat(this.item[i].price);
            var totalPrice = quantity * price;
            
            $('.orderTab tbody').css('text-align', 'right')
            $('.orderTab tbody').append('<tr id="' + id + '">');
            $('.orderTab tbody').append('<td>' + quantity + '</td>');
            $('.orderTab tbody').append('<td>' + product + '</td>');
            $('.orderTab tbody').append('<td>' + this.item[i].price + ' €</td>');
            $('.orderTab tbody').append('<td>' + totalPrice.toFixed(2) + ' €</td>');
            $('.orderTab tbody').append('<td><button class=" button-cancel trash small" title="Supprimer article" data-mealid="'+i+'"><i class="fa fa-trash"></i></button></td>');
            $('.orderTab tbody').append('</tr>');
        }

        this.buttonDelete = document.querySelectorAll('.button-cancel');
        for (var j = 0; j < this.buttonDelete.length; j++) {
            this.buttonDelete[j].addEventListener('click', this.delete.bind(this));
        }
    }
}
LocalStorage.prototype.delete = function(e) {
    e.preventDefault()
    var index = e.currentTarget.dataset.mealid;

    console.log(index);
    this.item.splice(index, 1);
    this.save();
    this.write();
}

