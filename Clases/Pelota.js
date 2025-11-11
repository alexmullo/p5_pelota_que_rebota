class Pelota{
	constructor(){
		this.diam = random(30, 80);
		this.rad = this.diam /2;

		this.posx = random(this.rad, width - this.rad);
		this.posy = random(this.rad, height - this.rad);

		this.velx = random(-5, 5);
		this.vely = random(-5, 5);

		this.nuevoColor = color(int(random(0, 255)), int(random(0, 255)), int(random(0, 255)));

    this.adorno = int(random(1, 5));

    this.adornColor = color(int(random(0, 255)),int(random(0, 255)),int(random(0, 255)));
	}

	actualizar(){
		if (this.posx + this.rad > width || this.posx - this.rad < 0) this.velx *= -1;
		if (this.posy + this.rad > height || this.posy - this.rad < 0) this.vely *= -1;
		
		this.posx += this.velx;
		this.posy += this.vely;
	}

	visualizar(){
    fill(this.nuevoColor);
    stroke("#234a8eff");
    strokeWeight(2 + this.adorno);
    circle(this.posx, this.posy, this.diam);

    noStroke();
    fill(this.adornColor);

  if (this.adorno == 2) {
    let r = this.rad * 0.7;
    let x0 = this.posx; let y0 = this.posy - r; let x1 = this.posx - r * Math.sin(Math.PI / 3);
    let y1 = this.posy + r / 2; let x2 = this.posx + r * Math.sin(Math.PI / 3); let y2 = this.posy + r / 2;
    triangle(x0, y0, x1, y1, x2, y2);

  } else if (this.adorno == 3) {
    arc(this.posx, this.posy, this.diam * 0.8, this.diam * 0.8, PI, TWO_PI, PIE);

  } else if (this.adorno == 4) {
    rect(this.posx, this.posy, this.rad, this.rad);
  }
      
  if(this.adorno == 1 && typeof img !== 'undefined'){
    imageMode(CENTER);
    image(img, this.posx, this.posy, this.diam * 0.85, this.diam * 0.85);
    }
 }
}