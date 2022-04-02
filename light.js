(function()
{
var canvas = document.getElementById('light');
var ctx = canvas.getContext('2d');

var resize_canvas = function()
	{
	canvas.width  = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;
	};

resize_canvas();
window.addEventListener('resize',resize_canvas,false);

var mouseX = 50;
var mouseY = 50;

var mouse_move = function(event)
	{
	mouseX = event.clientX;
	mouseY = event.clientY;
	};

window.addEventListener('mousemove',mouse_move);
window.addEventListener('touchmove',mouse_move);

var render = function(timestamp)
	{
	var r = 1000;
	//ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.rect(0,0,canvas.width,canvas.height);
	ctx.fillStyle = '#fff';
	ctx.fill();
	for (var t = 0 ; t < 360 ; t+=2)
		{
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#000';
		ctx.beginPath();
		ctx.moveTo(mouseX,mouseY);
		var a = Math.PI*t/180;
		ctx.lineTo(mouseX + r * Math.cos(a),mouseY + r * Math.sin(a));
		ctx.stroke();
		}
	window.requestAnimationFrame(render);
	};

window.requestAnimationFrame(render);
})();