<?php
class OrderModel {
private $orderId;
public function addOrder($userId) {
      $dataOrder = new Database ();
      $this->orderId = $dataOrder->executeSql ('
      INSERT INTO
        `Orders`
        (`User_Id`,
         `CreationTimestamp`,
         `Status`
        )
      VALUES
         (?, NOW(), "not paid")',
        [
          $userId
       ]);
       return $this->orderId;
  }
public function addOrderLine($orderId, $invoice) {
      $dataOrder = new Database ();
      $this->orderId = $dataOrder->executeSql ('
      INSERT INTO
        `OrderLine`
        (QuantityOrdered,
         Meal_Id,
         PriceEach,
         Order_Id
        )
      VALUES
         (?, ?, ?, ?)',
        [
          $invoice->quantity, $invoice->idProduct, $invoice->safePrice, $orderId
       ]);
}
public function addTotalAmount($orderId, $totalAmount) {
      $taxAmount = $totalAmount*0.2;
      $dataOrder  = new Database ();
      $this->$totalAmount = $dataOrder->executeSql('
      
UPDATE
        `Orders`
      SET
        `TotalAmount` = ?,
         `TaxeRate` = "20",
         `TaxeAmount` = ?
       WHERE `Id` = ?',
      [
        $totalAmount, $taxAmount,$orderId
      ]);
 }
}