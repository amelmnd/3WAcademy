var Pen = function()
{
    this.color = 'black';
    this.size  = 1;
};


Pen.prototype.configure = function(slateCanvasContext)
{
    slateCanvasContext.strokeStyle = this.color;
    slateCanvasContext.lineWidth   = this.size;
};