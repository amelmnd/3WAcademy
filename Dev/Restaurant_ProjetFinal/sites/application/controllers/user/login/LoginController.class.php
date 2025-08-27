<?php

class Logincontroller
{
    public function httpGetMethod(Http $http, array $queryFields)
    {

    }

    public function httpPostMethod(Http $http, array $formFields)
    {

		var_dump($_POST);
        $userData = new UsersModel();   
        $users =  $userData->connectUser($_POST); 

        $http->redirectTo('/');

	}
}


?>