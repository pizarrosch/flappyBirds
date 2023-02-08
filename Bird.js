class Bird {
  constructor() {
    this.birdSize = [51, 36];
    this.index = 0;
    this.gravity = 10;
    this.birdSource = null;
    this.moveBird = null;
    this.birdDirection = 0;
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
      y: canvas.height / 2,
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



  }
}

const bird = new Bird();