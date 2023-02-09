class Bird {
  moveBird;

  constructor() {
    this.birdSize = [51, 36];
    this.index = 0;
    this.gravity = 3;
    this.birdSource = null;
    this.birdY = canvas.height / 2;
   /* this.birds = [
      {
        x: 432,
        y: 0,
        width: bird.birdSize[0],
        height: bird.birdSize[1]
      },
      {
        x: 432,
        y: 36,
        width: bird.birdSize[0],
        height: bird.birdSize[1]
      },
      {
        x: 432,
        y: 72,
        width: bird.birdSize[0],
        height: bird.birdSize[1]
      },
      {
        x: 432,
        y: 36,
        width: bird.birdSize[0],
        height: bird.birdSize[1]
      },
    ];*/
  }

  render(background) {
    bird.index += 0.6;
    // this.birdsId = (this.birdsId + 1) % this.birds.length;

    bird.birdDirection = (bird.index * this.gravity) % canvas.height;
    bird.birdSource = {
      x: 432,
      y: Math.floor((background.index % 9) / 3) * bird.birdSize[1],
      width: bird.birdSize[0],
      height: bird.birdSize[1]
    }


    bird.moveBird = {
      x: canvas.width / 2 - bird.birdSize[0] / 2,
      // y: bird.birdDirection + canvas.height / 2,
      y: this.birdY,
      width: bird.birdSize[0],
      height: bird.birdSize[1]
    }


    ctx.drawImage(
      image,
      bird.birdSource.x,
      bird.birdSource.y,
      bird.birdSource.width,
      bird.birdSource.height,
      bird.moveBird.x,
      bird.moveBird.y,
      bird.moveBird.width,
      bird.moveBird.height
    )

    this.birdY += bird.gravity;



  }

  gameOver() {
    ctx.drawImage(
      gameOverImage,
      193,
      228,
      187,
      36,
      canvas.width / 2 - 87 ,
      388,
      187,
      36
    )
  }
}

const bird = new Bird();