'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

var gameElement = {};

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

function initGame() {

    gameElement.Chevalier = 'Luk Skriptwalker';

    gameElement.Dragon = 'Javawan the Bug';

    gameElement.Level = requestInteger('Niveau de difficulté ?\n' + '1. Facile - 2. Normal - 3. Difficile', 1, 3);
    switch (gameElement.Level) {
        case 1:
            gameElement.PVDragon = getRandomInteger(150, 200);
            gameElement.PVChevalier = getRandomInteger(200, 250);
            break;
        case 2:
            gameElement.PVChevalier = getRandomInteger(200, 250);
            gameElement.PVDragon = getRandomInteger(200, 250);
            break;
        case 3:
            gameElement.PVDragon = getRandomInteger(200, 250);
            gameElement.PVChevalier = getRandomInteger(150, 200);
            break;
    };
    gameElement.Armure = requestInteger('Armure ?\n' + '1. Cuivre - 2. Fer - 3. Magique', 1, 3);
    switch (gameElement.Armure) {
        case 1:
            gameElement.ArmureRatio = 1;
            break;
        case 2:
            gameElement.ArmureRatio = 1.25;
            break;
        case 3:
            gameElement.ArmureRatio = 1.5;
            break;
    };
    gameElement.Epee = requestInteger('Epée ?\n' + '1. Bois - 2. Acier - 3. Excalibur', 1, 3);
    switch (gameElement.Epee) {
        case 1:
            gameElement.EpeeRatio = 0.5;
            break;
        case 2:
            gameElement.EpeeRatio = 1;
            break;
        case 3:
            gameElement.EpeeRatio = 1.5;
            break;
    };
    gameLoop()
}

function dommageDragon() {
    switch (gameElement.Level){
        case 1:
            gameElement.dommagesDragon = getRandomInteger(10, 20) / gameElement.ArmureRatio;
            break;
        case 2:
        case 3:
            gameElement.dommagesDragon = getRandomInteger(20, 30) / gameElement.ArmureRatio;
            break;
    };

    gameElement.PVChevalier -= Math.round(gameElement.dommagesDragon);
    
}

function dommageChevalier() {
    switch (gameElement.Level) {
        case 1:
            gameElement.dommagesChevalier = getRandomInteger(25, 30)* gameElement.EpeeRatio;
            break;
        case 2:
            gameElement.dommagesChevalier = getRandomInteger(15, 20)* gameElement.EpeeRatio;
            break;
        case 3:
            gameElement.dommagesChevalier = getRandomInteger(5, 10)* gameElement.EpeeRatio;
            break;
    };
   gameElement.PVDragon -= Math.round(gameElement.dommagesChevalier)
}

function gameLoop(firstPlayer) {


    while (gameElement.PVDragon > 0 && gameElement.PVChevalier > 0) {
        /*firstPlayertab = [gameElement.Chevalier, gameElement.Dragon];
        firstPlayer = firstPlayertab[getRandomInteger(0, 1)];
        console.log ("i "+i);*/

        var round = getRandomInteger(0, 1);
        if (round == 0) {
            dommageDragon();
        } else {
            dommageChevalier();
        }
    }
    showWinner()
}
function showWinner(){
if (gameElement.PVDragon <= 0) {
        document.write('<img src="images/knight.png" id="knight" alt="knight">')
        console.log('Vous avez terrassé le terrible Javawan the Bug et délivrez la princesse ! Il vous restait ' + gameElement.PVChevalier + ' points de vie.')

    } else {
        document.write('<img src="images/dragon.png" id="dragon" alt="dragon">')
        console.log('Javawan the Bug a gagné, vous avez été carbonisé ! La princesse restera sa captive pour les 1000 ans à venir. Il restait ' + gameElement.PVDragon + ' points de vie au dragon.')
    }
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


initGame()

/*************************************************************************************************/
/* ************************************** CORRECTION *************************************** */
/*************************************************************************************************/
/* 
'use strict';

var game = {}



function initializeGame() {
    game.difficulty = requestInteger('Niveau de difficulté ?\n' + '1. Facile - 2. Normal - 3. Difficile', 1, 3);

    switch (game.difficulty) {
        case 1:
            game.hpDragon = getRandomInteger(150, 200);
            game.hpPlayer = getRandomInteger(200, 250);
            break;

        case 2:
            game.hpDragon = getRandomInteger(200, 25);
            game.hpPlayer = getRandomInteger(200, 250);
            break;

        case 3:
            game.hpDragon = getRandomInteger(200, 250);
            game.hpPlayer = getRandomInteger(150, 200);
            break;
    }


    game.armor = requestInteger('Armure ?\n' + '1. Cuivre - 2. Fer - 3. Magique', 1, 3);
    if (game.armor == 1) {

        game.armorRatio = 1;

    } else if (game.armor == 2) {

        game.armorRatio = 1.25;

    } else {

        game.armorRatio = 2;

    }


    game.sword = requestInteger('Epée ?\n' + '1. Bois - 2. Acier - 3. Excalibur', 1, 3);


    switch (game.sword) {

        case 1:
            game.swordRatio = 0.5;
            break;

        case 2:
            game.swordRatio = 1;
            break;

        case 3:
            game.swordRatio = 2;
            break;

    }


}
function gameLoop() {
    var damagePoint;
    var dragonSpeed;
    var playerSpeed;
    game.round = 1;


    while (game.hpDragon > 0 && game.hpPlayer > 0) {
        dragonSpeed = getRandomInteger(10, 20);
        playerSpeed = getRandomInteger(10, 20);

        console.log('Tour numéro ' + game.round);

        if (dragonSpeed > playerSpeed) {
            damagePoint = computeDragonDamagePoint();
            game.hpPlayer -= damagePoint;
            console.log(
                'Le dragon est plus rapide et vous brûle, il vous enlève ' +
                damagePoint + ' PV'
            );

        } else {
            damagePoint = computePlayerDamagePoint();
            game.hpDragon -= damagePoint;
            console.log(
                'Vous êtes plus rapide et frappez le dragon, vous lui enlevez ' +
                damagePoint + ' PV'
            );
        }

        showGameState();

        game.round++;

    }


}


function showGameState() {
    console.log(
        'Dragon : ' + game.hpDragon + ' PV, ' +
        'joueur : ' + game.hpPlayer + ' PV'
    );
}


function showGameWinner() {
    if (game.hpDragon > 0) {
        document.write('<img src="images/dragon.jpg"/>');
        console.log("Le dragon a gagné, vous avez été carbonisé !");
        console.log("Il restait " + game.hpDragon + " PV au dragon");
    } else {
        document.write('<img src="images/knight.jpg"/>');
        console.log("Vous avez gagné, vous êtes vraiment fort !");
        console.log("Il vous restait " + game.hpPlayer + " PV");

    }

}



function startGame() {

    initializeGame();
    console.log('Points de vie de départ :');
    showGameState();

    gameLoop();

    showGameWinner();
}


startGame();

*/