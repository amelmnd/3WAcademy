
$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/customer.php?id=103&api_key=aze', function (response) {
    console.log("Customer avec id 103");
    console.log(response);
});


$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/office.php', function (response) {
    console.log("Office");
    console.log(response);
});

$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/office.php?id=3', function (response) {
    console.log("Office avec id 3");
    console.log(response);
});
$.getJSON('http://10.10.109.128/dev/Xtra/apiBack/employees.php', function (response) {
    console.log("Employé");
    console.log(response);
});

$("#submitCN").click(function (event) {
    event.preventDefault();
    var value = $('#customerName').val();

    $.getJSON('http://10.10.109.128/dev/Xtra/apiBack/customer.php?keyword='+value+'&api_key=aze', function (response) {
        console.log("Search");
        console.log(response);
        $('#write').html('');

        $('#write').append('<ul>');
        for (var i = 0; i < response.length; i++ ){
            $('#write').append('<li>'+response[i].customerName+'</li>');
        }
        $('#write').append('</ul>');

    });
});

