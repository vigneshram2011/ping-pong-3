noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
img = "";

function preload() {
	img = loadImage("mario.jpg");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	instializeInSetup(mario);
}

function draw() {
	game()
}

