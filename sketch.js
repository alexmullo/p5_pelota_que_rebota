const NP = 100;
let pelotas = [];
let img;

function preload() {
  img = loadImage('ICONO_BLANCO.png');
}


function setup(){
	createCanvas(windowWidth,windowHeight);
	rectMode(CENTER);

	for(let i = 0; i < NP; i++){
		let nuevaPelota = new Pelota();
		pelotas[i] = nuevaPelota;
	}

}

function draw(){
	background(15, 30, 60);

	for(let i = 0; i < pelotas.length; i++){
		pelotas[i].actualizar();
		pelotas[i].visualizar();
	}

}