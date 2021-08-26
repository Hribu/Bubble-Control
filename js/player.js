const playerImg = document.createElement('img');
playerImg.src = './images/player.png'

class Player {

    constructor(canvasContext, positionX, positionY){
        this.ctx = canvasContext,
        this.image = playerImg,
        this.x = positionX,
        this.y = positionY,
        this.width = 80,
        this.height = 80,
        this.accelerationX = 0,
        this.accelerationY = 0;
    }

    draw(){
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }




//movement for spaceship
moveLeft = () => {
    this.accelerationX = -1.3;
  };

  moveRight = () => {
    this.accelerationX = 1.3;
  };
  stopX = () => {
    this.accelerationX = 0.5;
  };
  stopY = () => {
    this.accelerationY = 0.5;
  };
}








