function onAjaxChangeDb(event) {
	
    event.preventDefault();
    
	var query = $('#changedString').val();
    
    console.log(query);

    var value = { 'query': query }

     $.ajax({
        url: "modif.php",
        type: "POST",
        data: value,
    })
	.done(callB)
	.fail();

}

function callB(res) {
	console.log(JSON.parse(res));
	var response = JSON.parse(res)

	$('#para').text(response.query);
}


$('#changeText').on('click', onAjaxChangeDb);