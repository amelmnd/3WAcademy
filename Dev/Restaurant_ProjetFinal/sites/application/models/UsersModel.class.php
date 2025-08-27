<?php

function securisation($dataForm){
    $dataForm = trim($dataForm);
    $dataForm = stripslashes($dataForm);
    $dataForm = strip_tags($dataForm);
    return $dataForm;
};

class UsersModel {
    private $userData;

    public function userCreat ($post){
        
        $hashPwd = $this->hashPassword($post['password']);
        $dataUsers = new DataBase();
		$sql = 'INSERT INTO `Users`
                                (`LastName`, 
                                `FirstName`, 
                                `BirthDay`, 
                                `Address`, 
                                `City`, 
                                `ZipCode`, 
                                `Phone`, 
                                `Email`, 
                                `Password`, 
                                `CreationTimestamp`)
                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())';
            
        $value = [
                securisation($post['lastName']),
                securisation($post['firstName']),
                securisation($post['birthYear']).'-'.securisation($post['birthMonth']).'-'.securisation($post['birthDay']),
                securisation($post['address']),
                securisation($post['city']),
                securisation($post['zipCode']),
                securisation($post['phone']),
                securisation($post['email']),
                $hashPwd
        ];

            $dataUsers->executeSql($sql, $value);
    }
    public function connectUser($post) {
    
    	$database = new Database();
        
        $user = $database->queryOne('SELECT * FROM Users WHERE Email =?', [ $post['email'] ]);
                            var_dump($user);

        if( $user != false && $this->verifyPassword($post['password'], $user['Password']) == true ) {
        	var_dump('conncté');
            $_SESSION['id'] = $user['Id'];
			$_SESSION['email'] = $user['Email'];
			$_SESSION['firstName'] = $user['FirstName'];
            $_SESSION['lastName'] = $user['LastName'];
            $_SESSION['address'] = $user['Address'];
            $_SESSION['city'] = $user['City'];
            $_SESSION['zipCode'] = $user['ZipCode'];

 
        } else {
        	echo 'pas le bon mot de passe ou adresse mail';
        
        }
    	
    }

    private function hashPassword($password)
    {

        $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

        return crypt($password, $salt);
    }

    private function verifyPassword($password, $hashedPassword)
	{
		return crypt($password, $hashedPassword) == $hashedPassword;
    }

}
		


?>