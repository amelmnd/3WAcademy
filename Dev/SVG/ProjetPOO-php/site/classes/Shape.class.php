<?php
//Base de tous les objets que l'on va instancier 
abstract class Shape {

	private $x;
    private $y;
    private $fill;
    private $opacity;
    
    
     public function __construct($x, $y, $fill, $opacity)
	{
    	$this->x = $x;
		$this->y = $y;
        $this->fill = $fill;
		$this->opacity = $opacity;
    }
    
    public function getPosition() {
		return [
			'x'=> $this->x,
			'y' => $this->y
		];
	}

	public function getStyle() {
		return [
			'fill'=> $this->fill,
			'opacity' => $this->opacity
		];
	}
    
    
}

?>