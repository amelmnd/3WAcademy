<?php
class Carre extends Rectangle {
    
    public function __construct($x, $y, $width, $fill, $opacity)
	{
    	parent::__construct($x, $y, $width, $width, $fill, $opacity);
	}
}