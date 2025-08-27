var Slate = function(pen, canvas)
{
    this.canvas          = canvas  
    this.context         = this.canvas.getContext('2d');
    this.currentLocation = null;      
    this.isDrawing       = false;
    this.pen             = pen;  

    this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup',    this.onMouseUp.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseUp.bind(this));
}


Slate.prototype.getMouseLocation = function(event)
{

    var offset = this.canvas.getBoundingClientRect();

    var location =
    {
        x: event.clientX - offset.left,
        y: event.clientY - offset.top
    };

    console.log(location);

    return location;
};


Slate.prototype.onMouseDown = function(event)
{
    this.isDrawing = true;

    this.currentLocation = this.getMouseLocation(event);
};

Slate.prototype.onMouseMove = function(event)
{
    
    var location = this.getMouseLocation(event);

    if(this.isDrawing == true)
    {
        this.pen.configure(this.context);


        this.context.beginPath();

        this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.context.lineTo(location.x, location.y);

        this.context.closePath();

        this.context.stroke();

        this.currentLocation = location;
    }
};

Slate.prototype.onMouseUp = function()
{
    this.isDrawing = false;
};

Slate.prototype.onMouseLeave = function() {

    this.isDrawing = false;
};