var Program = function(){
	this.gege = new Perso('Gégé', 300, 50, 7, 120);
	this.nanard = new Perso('Nanard', 280, 45, 18, 160);

	this.affichage();

	$('#attaquer').on('click', this.onClickAttaque.bind(this));
	$('#defendre').on('click', this.onClickDefense.bind(this));
	$('#sort').on('click', this.onClickSort.bind(this));

}


Program.prototype.affichage = function() {

	if(this.gege.hp > 0 && this.nanard.hp > 0) {

		$('#perso1').text(this.gege.name+ ' : '+this.gege.hp+' HP, attaque : ' + this.gege.attack + ', defense : '+ this.gege.defense +', magie : '+ this.gege.magie);
		$('#perso2').text(this.nanard.name+ ' : '+this.nanard.hp+' HP, attaque : ' + this.nanard.attack + ', defense : '+ this.nanard.defense +', magie : '+ this.nanard.magie);

	} else {
		$('#commande').css('display', 'none');
		if(this.gege.hp > 0) {
			$('#affichage').html('<p>Victoire de : '+this.gege.name+'</p>');
		} else {
			$('#affichage').html('<p>Victoire de : '+this.nanard.name+'</p>');
		}
	}
}

Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();
	this.gege.attaquer(this.nanard);
	this.contre();
	this.affichage();
}

Program.prototype.onClickSort = function(event) {
	event.preventDefault();
	if (this.gege.magie > 0) {
		this.gege.sort(this.nanard);
		this.contre();
		this.affichage();
	} else {
		console.log('plus de points de magie, veuillez jouer autre chose');
	}
	
}

Program.prototype.onClickDefense = function(event) {
	event.preventDefault();
	this.gege.defendre();
	this.contre();
	this.affichage();
}

Program.prototype.contre = function() {
	var random = getRandomInteger(1, 3);

	if (random == 1) {
		this.nanard.attaquer(this.gege);
	} else if (random == 2) {

		if(this.nanard.magie > 0) {
			this.nanard.sort(this.gege);
		} else {
			console.log('Plus de points de magie, on change de technique');
			this.contre();
		}

	} else {
		this.nanard.defendre();
	}
}
