<?php
class Polygone extends Shape {

	private $x2;
    private $y2;
    private $x3;
    private $y3;

    
    public function __construct($x, $y, $x2, $y2, $x3, $y3, $fill, $opacity)
	{
    	parent::__construct($x, $y, $fill, $opacity);
   	    $this->x2 = $x2;
     	$this->y2 = $y2;
   	    $this->x3 = $x3;
     	$this->y3 = $y3;
	}


	public function getTriangle() {

		return [
            'x2' => $this->x2,
            'y2' => $this->y2,
            'x3' => $this->x3,
            'y3' => $this->y3,
		];
	}


}