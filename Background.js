class Background {
  pipeNorthSource;
  pipeSouthSource;
  pipeNorthImage;
  pipeSouthImage
  gap;
  constantGap;
  pipe = [];


  constructor() {
    this.speed = 4;
    this.index = 0;
    this.pipe[0] = {
      x: canvas.width,
      y: -504
    }
  }

  render() {
    background.index += 0.3;

    const backgroundDirection = -((background.index * background.speed) % canvas.width);

    const bgSource = {
      x: 0,
      y: 0,
      width: canvas.width,
      height: canvas.height
    }

    const bgMovePartOne = {
      x: backgroundDirection + canvas.width,
      y: 0,
      width: canvas.width,
      height: canvas.height
    }

    const bgMovePartTwo = {
      x: backgroundDirection,
      y: 0,
      width: canvas.width,
      height: canvas.height
    }

    ctx.drawImage(
      image,
      bgSource.x,
      bgSource.y,
      bgSource.width,
      bgSource.height,
      bgMovePartOne.x,
      bgMovePartOne.y,
      bgMovePartOne.width,
      bgMovePartOne.height
    )

    ctx.drawImage(
      image,
      bgSource.x,
      bgSource.y,
      bgSource.width,
      bgSource.height,
      bgMovePartTwo.x,
      bgMovePartTwo.y,
      bgMovePartTwo.width,
      bgMovePartTwo.height
    )


    for (let i = 0; i < background.pipe.length; i++) {
      background.pipeNorthSource = {
        x: 432,
        y: 110,
        width: 78,
        height: 504
      }

      background.pipeSouthSource = {
        x: 510,
        y: 110,
        width: 80,
        height: 504
      }

      background.pipeNorthImage = {
        x: background.pipe[i].x,
        y: background.pipe[i].y,
        width: bird.birdSize[0] * 2,
        height: 580
      }

      background.pipeSouthImage = {
        x: background.pipe[i].x,
        y: background.pipe[i].y + background.constantGap,
        width: bird.birdSize[0] * 2,
        height: 580
      }

      background.gap = background.pipeNorthImage.height * 0.25;
      background.constantGap = background.pipeNorthImage.height + background.gap;
      // console.log(background.gap)

      ctx.drawImage(
        image,
        background.pipeNorthSource.x,
        background.pipeNorthSource.y,
        background.pipeNorthSource.width,
        background.pipeNorthSource.height,
        background.pipeNorthImage.x,
        background.pipeNorthImage.y,
        background.pipeNorthImage.width,
        background.pipeNorthImage.height
      )

      ctx.drawImage(
        image,
        background.pipeSouthSource.x,
        background.pipeSouthSource.y,
        background.pipeSouthSource.width,
        background.pipeSouthSource.height,
        background.pipeSouthImage.x,
        background.pipeSouthImage.y,
        background.pipeSouthImage.width,
        background.pipeSouthImage.height
      )

      background.pipe[i].x --;

      if(background.pipe[i].x === canvas.width - (background.pipeNorthImage.width * 3)) {
        background.pipe.push({
          x: canvas.width,
          y: Math.floor(Math.random() * background.pipeNorthSource.height) - background.pipeNorthSource.height
        })
        console.log(background.pipeSouthImage.x + background.pipeSouthImage.width)
      }


    }


    bird.render(background);
    const frame = requestAnimationFrame(background.render);

    if(((bird.moveBird.x >= background.pipeSouthImage.x ||
        bird.moveBird.x + bird.birdSize[0] / 2 >= background.pipeSouthImage.x ||
        background.pipeSouthImage.x + background.pipeSouthImage.width === 164.5) &&
        bird.moveBird.y + (bird.birdSize[1] / 2) >= background.pipeSouthImage.y) ||
        bird.moveBird.y + bird.birdSize[1] === canvas.height) {
      bird.gameOver();
      cancelAnimationFrame(frame)
    }


  }

  start() {
    image.onload = () => {
      background.render();
    };

    canvas.onclick = () => {
      bird.birdY -= background.gap / 2;
    }


  }
}

let background = new Background();