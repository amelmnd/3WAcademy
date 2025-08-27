/* 'user strict'

var multiplication, colonne, ligne;
colonne = i;
ligne = j;
var table = parseInt(prompt('Numéro de la table'));

document.write('<table>')
for (var i = 1; i <= table; i++) {
    document.write('<tr>');
/*cette bpucle ouvre la ligen du tableau

    for (var j = 1; j <= table; j++) {
        var result = i*j;
        document.write('<td>');
        document.write(result);
        document.write('</td>');
        /*cette boucle s'occupe des case du tableau*
    }

    document.write('</tr>');
}
document.write('</table>')
 */
"user strict";

var multiplication, colonne, ligne;
colonne = i;
ligne = j;
var table = parseInt(prompt("Numéro de la table"));

document.write("<table>");
for (var i = 1; i <= table; i++) {
  document.write("<tr>");
  /*cette bpucle ouvre la ligen du tableau*/

  for (var j = 1; j <= table; j++) {
    var result = i * j;
    if (i == j) {
      document.write("<td class=darkblue>");
      document.write(result);
      document.write("</td>");
    } else {
      document.write("<td>");
      document.write(result);
      document.write("</td>");
    }

    /*cette boucle s'occupe des case du tableau*/
  }

  document.write("</tr>");
}
document.write("</table>");
