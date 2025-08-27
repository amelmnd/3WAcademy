<?php
class Cercle extends Shape {

	private $rayon;
	
    
    public function __construct($x, $y, $rayon, $fill, $opacity)
	{
    	parent::__construct($x, $y, $fill, $opacity);
   	    $this->rayon = $rayon;
  
	}


	public function getRayon() {

		return [
			'rayon' => $this->rayon,
		];
	}



}
