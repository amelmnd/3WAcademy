
<?php
class PaymentController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
      if(array_key_exists('lastName', $_SESSION) == false) {
        $http->redirectTo('/user/login/');
      }
    }
    public function httpPostMethod(Http $http, array $formFields)
    {  var_dump($_SESSION);

		var_dump($_POST);
		$invoices = json_decode($_POST['order']);

		$mealModel = new MealModel();
        $order = new OrderModel();
        $orderId = $order->addOrder($_SESSION['id']);
		$totalAmount = 0;
		
        foreach ($invoices as $invoice) {
			$menu = $mealModel->mealElement($invoice->idProduct);
			

			$invoice->safePrice = $menu['SalePrice'];
			$totalAmount += floatval($invoice->safePrice)*intval($invoice->quantity);

			$order->addOrderLine($orderId, $invoice);

			var_dump($order);
        }
        $order->addTotalAmount($orderId, $totalAmount);

    }
}