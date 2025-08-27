<?php

//CONSTRUCTEUR PDO
//Faire cette requette a cahque page

if(extension_loaded("PDO")){
//verifie que la connexion entre PHP et la BDD est bien activé

    $pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');
    // *connextion entre le site web et la base de donée   

    /*
    =>instancie une classe pdo
        $pdo = new PDO
    => creer un DSN : Data Source Name
        ('mysql: => type de BDD 
        host=localhost; => addresse de l'hote 
        dbname=classicmodels', => nom de la BDD 
        'root', 'troiswa' = identifiant + mot de passe
    );*/
    $pdo->exec('SET NAMES UTF8');
    //execute le code de connexion avec information sur le type de caractére utiliser
    $query = $pdo->prepare
    //execute la requete SQL
    (
        'SELECT * FROM offices'
    );

    $query->execute();
    //execute la requete SQL

    $offices = $query->fetchAll(PDO::FETCH_ASSOC);
    // stockage des information dans une variabble => elemnt ranger dans un tableau d'objet
        //fetchAll      si recupération de plusieurs element 
        //fetch         si récupération d'un seule élément 

    var_dump($offices);
    // visualisation des élément récupérer dans le BDD
    }
?>

