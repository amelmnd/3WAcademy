<?php

var_dump($_FILES);

var_dump($_POST);

var_dump(is_uploaded_file(($_FILES['fichier']['tmp_name'])));

//move_uploaded_file($_FILES['fichier']['tmp_name'], 'img/haha.png')

move_uploaded_file($_FILES['fichier']['tmp_name'], "img/".$_POST['newName'].'.png');



?>