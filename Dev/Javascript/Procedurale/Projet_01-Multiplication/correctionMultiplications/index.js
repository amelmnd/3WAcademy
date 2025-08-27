'use strict';   // Mode strict du JavaScript

// Déclaration de quatre variables.
var column;
var multiplyTable;
var row;
var size;


// Demande la taille maximum de la table des multiplications.
size = parseInt(window.prompt('Taille de la table de multiplications ?'));

// Initialisation de la table des multiplications.
multiplyTable = new Array();


// Construction de la table des multiplications de 1 jusqu'à la variable size.
for(row = 1; row <= size; row++)
{
    // Pour chaque nouvelle ligne il faut créer un nouveau tableau.
    multiplyTable[row] = new Array();

    for(column = 1; column <= size; column++)
    {
        // Stockage du résultat du calcul dans la table des multiplications.
        multiplyTable[row][column] = row * column;
    }
}



// Création en HTML de la table des multiplications.
document.write('<table>');

for(row = 1; row <= size; row++)
{
    // Création de la ligne HTML.
    document.write('<tr>');

    for(column = 1; column <= size; column++)
    {
        // Si les deux nombres multipliés sont les mêmes...
        if(row == column)
        {
            // ...Alors on créé une cellule HTML à laquelle on applique une classe CSS.
            document.write('<td class="same-number">');
        }
        else
        {
            // ...Sinon on créé simplement une cellule HTML.
            document.write('<td>');
        }

        // Écriture dans la cellule HTML du résultat contenu dans la table des multiplications.
        document.write(multiplyTable[row][column]);

        // Fermeture de la cellule HTML.
        document.write('</td>');
    }

    // Fermeture de la ligne HTML.
    document.write('</tr>');
}

// Fermeture du tableau HTML.
document.write('</table>');