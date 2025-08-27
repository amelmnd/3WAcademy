<?php
//permet de faire apparaitre les formes dans le phtml, l'ordre de la liste des includes a une importance 
 
include 'classes/Shape.class.php';
include 'classes/Rectangle.class.php';
include 'classes/Carre.class.php';
include 'classes/Cercle.class.php';
include 'classes/Ellipse.class.php';
include 'classes/Polygone.class.php';

include 'classes/Program.class.php';

$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');
$carre = new Carre('400', '200', '100', 'deepskyblue', '0.5');
$cercle = new Cercle('300', '250', '180', 'gold', '0.33');
$ellipse = new Ellipse('600', '180', '40', '80', 'seagreen', 1);
$triangle = new Polygone('60', '60', '200', '250', '60', '250', 'purple', 0.75);

$prog = new Program($rectangle, $carre, $cercle, $ellipse, $triangle);

$rec = $prog->drawRectangle();
$car = $prog->drawCarre();
$circle = $prog->drawCercle();
$elli = $prog->drawEllipse();
$trig = $prog->drawTriangle();

include 'index.phtml';

?>