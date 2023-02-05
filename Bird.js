class Bird {
  constructor() {
    this.birdSize = [51, 36];
  }

  render(background) {
    const birdSource = {
      x: 432,
      y: Math.floor((background.index % 9) / 3) * bird.birdSize[1],
      width: bird.birdSize[0],
      height: bird.birdSize[1]
    }


    const moveBird = {
      x: canvas.width / 2 - bird.birdSize[0] / 2,
      y: 300,
      width: bird.birdSize[0],
      height: bird.birdSize[1]
    }

    ctx.drawImage(
      image,
      birdSource.x,
      birdSource.y,
      birdSource.width,
      birdSource.height,
      moveBird.x,
      moveBird.y,
      moveBird.width,
      moveBird.height
    )

    column.render(bird);
  }
}

const bird = new Bird();