var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];

function preload() {
  backgroundImage = loadImage("assets/road.png");
  car1_img = loadImage("assets/Run (1).png");
  car2_img = loadImage("assets/Run (2).png");
  track = loadImage("assets/road.png");
  fuelImage = loadImage("assets/police1.png");
  powerCoinImage = loadImage("assets/police1.png");
  obstacle1Image = loadImage("assets/police1.png");
  obstacle2Image = loadImage("assets/police1.png");
  lifeImage = loadImage("assets/bank.png");
  blastImage = loadImage("assets/bank.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
