<?php

class Database
{
	private $pdo;


	public function __construct()
	{
		$configuration = new Config();
        
        $config = $configuration->get();

		$this->pdo = new PDO($config['dsn'],$config['user'],$config['password']);

		$this->pdo->exec('SET NAMES UTF8');
    }
    /*
    $this->pdo = new PDO
		(
			$configuration->get('database', 'dsn'),
			$configuration->get('database', 'user'),
			$configuration->get('database', 'password')
		); on peut mettre ce modele sans le dossier config*/

	public function executeSql($sql, array $values = array())
	{
		$query = $this->pdo->prepare($sql);

		$query->execute($values);

		return $this->pdo->lastInsertId();
	}

    public function query($sql, array $criteria = array())
    {
        $query = $this->pdo->prepare($sql);

        $query->execute($criteria);

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function queryOne($sql, array $criteria = array())
    {
        $query = $this->pdo->prepare($sql);

        $query->execute($criteria);

        return $query->fetch(PDO::FETCH_ASSOC);
    }
}