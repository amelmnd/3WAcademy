<?php

class MealModel {
    private $meals;

    public function listAll (){
        $dataMeal = new DataBase();
		$meals = $dataMeal->query('SELECT * FROM `Meal`',[]);

        return $meals;
    }

    public function mealElement ($id){
        $dataMeal = new DataBase();
		$meal = $dataMeal->queryOne('SELECT * FROM `Meal` WHERE Id = ?',[$id]);

        return $meal;
    }



}



?>