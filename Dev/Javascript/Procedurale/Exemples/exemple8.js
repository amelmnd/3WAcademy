var test = 23;


console.log(isNaN(test));

var test2 = "une string";


console.log(isNaN(test2));


if (isNaN(test2) == true) {

	document.write('test2 pas un chiffre');
    
} else {
	document.write('test2 chiffre');
}