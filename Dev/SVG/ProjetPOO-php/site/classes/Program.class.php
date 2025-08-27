<?php
//contruit les elements a partir des différentes calss creer en réunissant les elements.

class Program {
	private $rectangle;
	private $carre;
	private $ellipse;
	 private $polygone;
	 private $arrayString;

    public function __construct(Rectangle $rectangle, Carre $carre, Cercle  $cercle, Ellipse $ellipse , Polygone $polygone) {
    
		$this->rectangle = $rectangle;
		$this->carre = $carre;
		$this->cercle = $cercle;
		$this->ellipse = $ellipse;
		$this->polygone = $polygone;    
		 
    }

	public function drawRectangle() {
		$size = $this->rectangle->getSize();
    	$position = $this->rectangle->getPosition();
		$style = $this->rectangle->getStyle();
    
    	return '<rect x="'.$position['x'].'" y="'.$position['y'].'" width="'.$size['width'].'" height="'.$size['height'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';
	}
	
	public function drawCarre() {
		$size = $this->carre->getSize();
    	$position = $this->carre->getPosition();
		$style = $this->carre->getStyle();
    
    	return '<rect x="'.$position['x'].'" y="'.$position['y'].'" width="'.$size['width'].'" height="'.$size['width'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';
	}
	public function drawCercle() {
		$rayon = $this->cercle->getRayon();
    	$position = $this->cercle->getPosition();
		$style = $this->cercle->getStyle();

		return '<circle cx="'.$position['x'].'" cy="'.$position['y'].'" r="'.$rayon['rayon'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></circle>';
	}
	public function drawEllipse(){
		$rayon=$this->ellipse->getRayon();
		$position = $this->ellipse->getPosition();
		$style = $this->ellipse->getStyle();

		return '<ellipse cx="'.$position['x'].'" cy="'.$position['y'].'" rx="'.$rayon['rx'].'" ry="'.$rayon['ry'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></ellipse>';
	}
 	public function drawTriangle(){
		$points=$this->polygone->getTriangle();
		$position = $this->polygone->getPosition();
		$style = $this->polygone->getStyle();

		return '<polygon points="'.$position['x'].' '.$position['y'].', '.$points['x2'].' '.$points['y2'].', '.$points['x3'].' '.$points['y3'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></polygon>';
	}
	   public function drawAll() {
   	  $result = [];
      array_push( $result, $this->drawRectangle() );
	  array_push( $result, $this->drawCarre() );
	  array_push( $result, $this->drawCercle() );
	  array_push( $result, $this->drawEllipse() );
      array_push( $result, $this->drawEllipse() );
      $rec = $prog->drawRectangle();
$car = $prog->drawCarre();
$circle = $prog->drawCercle();
$elli = $prog->drawEllipse();
$trig = $prog->drawTriangle();
      return $result;
   }
   

}

?>