<?php
$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
    "SELECT `customerName`,`contactFirstName`, `contactLastName`, `addressLine1`,`addressLine2`, `city` 
    FROM orders
    INNER JOIN customers
    ON orders.customerNumber = customers.customerNumber
    WHERE orderNumber= ?"
     
);
$query->execute( [ $_GET['orderNumber'] ] );


$customer = $query->fetch(PDO::FETCH_ASSOC);

$query = $pdo->prepare
(
    "SELECT `productName`, `quantityOrdered`, `priceEach`, (priceEach *orderdetails.quantityOrdered) AS totalPrice 
    FROM products 
    INNER JOIN orderdetails 
    ON orderdetails.productCode = products.productCode 
    WHERE orderNumber= ?"
);

$query->execute( [ $_GET['orderNumber'] ] );

$product = $query->fetch(PDO::FETCH_ASSOC);


$priceHT = $key['totalPrice'];
$TVA= $HTprice * 0.2;
$TTCprice = $HTprice + $TVA;

include "commande.phtml";

?>