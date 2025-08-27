<?php
class Ellipse extends Shape {

	private $rx;
	private $ry;

    
    public function __construct($x, $y, $rx, $ry, $fill, $opacity)
	{
    	parent::__construct($x, $y, $fill, $opacity);
   	    $this->rx = $rx;
     	$this->ry = $ry;

	}


	public function getRayon() {

		return [
            'rx' => $this->rx,
            'ry' => $this->ry,

		];
	}



}