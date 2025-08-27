<?php
class Rectangle extends Shape {
//herite des parametre de Shape et permet d'jouter des elemnts pour construire un rectangles 
	private $width;
	private $height;
	
    
    public function __construct($x, $y, $width, $height, $fill, $opacity)
	{
    	parent::__construct($x, $y, $fill, $opacity);
   	    $this->width = $width;
		$this->height = $height ;
  
	}


	public function getSize() {

		return [
			'width' => $this->width,
			'height' => $this->height
		];
	}



}


