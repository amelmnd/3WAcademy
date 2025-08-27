
<?php

class EmployeesController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        header('access-control-allow-origin: *');
        header('Content-Type: application/json');

        $database = new Database();

    	if (array_key_exists('id', $_GET) == false) {

            $sql = 'SELECT * FROM employees';


            $execute = [];

            $employees = $database->query($sql, $execute);


            $http->sendJsonResponse($employees);


        } else if (array_key_exists('id', $_GET) == true) {

            $sql = 'SELECT * FROM employees WHERE employeeNumber=?';

            $execute = [$_GET['id']];

            $employee = $database->queryOne($sql, $execute);
            
            $http->sendJsonResponse($employee);

        }
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
    	

    }
}

?>
