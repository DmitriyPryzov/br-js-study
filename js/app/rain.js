export default function rain(canvas) {
	
			const ctx = canvas.getContext("2d");
	
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	
    let lines = [],
			maxSpeed = 5,
			spacing = 10,
			xSpacing = 0,
			n = innerWidth / spacing,
			colors = ["#0E2026", "#3D5159", "#76858C", "#A6AEB3"],
			i;
	
	for (i = 0; i < n; i++){
		xSpacing += spacing;
		lines.push({
			x: xSpacing,
			y: Math.round(Math.random()*canvas.height),
			width: 2,
			height: Math.round(Math.random()*(innerHeight/20)),
			speed: Math.random()*maxSpeed + 1,
			color: colors[Math.floor(Math.random() * colors.length)]
		});
	}
	
	
	function draw(){
	    let i;
		ctx.clearRect(0,0,canvas.width,canvas.height);
		
    
		for (i = 0; i < n; i++){
			ctx.fillStyle = lines[i].color;
			ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
			lines[i].y += lines[i].speed;
			
			if (lines[i].y > canvas.height)
				lines[i].y = 0 - lines[i].height;
		}
		
		requestAnimationFrame(draw);
		
	}
	
  
	draw();

}