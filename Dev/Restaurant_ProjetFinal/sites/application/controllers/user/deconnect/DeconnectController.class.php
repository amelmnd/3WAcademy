<?php

class Deconnectcontroller
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
        session_destroy();
        $http->redirectTo('/');

    }

    public function httpPostMethod(Http $http, array $formFields)
    {
	}
}


?>