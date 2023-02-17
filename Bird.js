class Bird {
  moveBird;
  birdFrame;

  constructor() {
    this.birdSize = [51, 36];
    this.index = 0;
    this.gravity = 3;
    this.birdSource = null;
    this.birdY = canvas.height / 2;
    this.angle = 0;
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

  render() {
    bird.index += 0.6;
    // this.birdsId = (this.birdsId + 1) % this.birds.length;

    bird.birdDirection = (bird.index * bird.gravity) % canvas.height;

    //
    // ctx.moveTo(190, 384);
    //
    // ctx.fillStyle = 'transparent';
    // ctx.fillRect(190, 384, 51, 36);
    // ctx.setTransform(1, 0, 0.2, 1, 0, 0);
    // ctx.fillStyle = 'transparent';
    // ctx.fillRect(190, 384, 51, 36);
    // ctx.rotate(60)

    // ctx.drawImage(
    //   image,
    //   bird.birdSource.x,
    //   bird.birdSource.y,
    //   bird.birdSource.width,
    //   bird.birdSource.height,
    //   bird.moveBird.x,
    //   bird.moveBird.y,
    //   bird.moveBird.width,
    //   bird.moveBird.height
    // )

    function convertToRadians(degree) {
      return degree * (Math.PI / 180);
    }

    function incrementAngle() {
      for (let i = 0; i < 90; i++)
        bird.angle += i;
    }

    bird.birdSource = {
      x: 432,
      y: Math.floor((bird.index % 9) / 3) * bird.birdSize[1],
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

    // ctx.save()
    //   ctx.translate(bird.moveBird.x, bird.birdY - 300)
    //   ctx.rotate(convertToRadians(bird.angle += 0.5));

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

    // ctx.restore();

    // let angle = Math.min(Math.max((bird.birdY /10), -90), 90) * Math.PI / 180;

    this.birdY += bird.gravity;

    if (((bird.moveBird.x + bird.birdSize[0] / 2 >= column.pipeSouthImage.x - 20 &&
          bird.moveBird.y + (bird.birdSize[1] / 2) >= column.pipeSouthImage.y - 20) ||
        (bird.moveBird.x - (bird.birdSize[0] / 2) === column.pipeSouthImage.x + column.pipeSouthSource.width &&
          bird.moveBird.y + (bird.birdSize[1]) >= column.pipeSouthImage.y - 20)) ||
      (bird.moveBird.y + (bird.birdSize[1] / 2) <= column.pipeNorthImage.y + (column.pipeNorthImage.height - 10) &&
        bird.moveBird.x + (bird.birdSize[0] / 2) >= column.pipeNorthImage.x - 20
      ) ||
      bird.moveBird.y + bird.birdSize[1] >= canvas.height) {
      bird.gameOver();
      bird.die();
      cancelAnimationFrame(background.frame);
    }

    if (bird.moveBird.y + bird.birdSize[1] >= canvas.height) {
      dieSound.play();
    }

    if (bird.moveBird.x + bird.birdSize[0] / 2 === column.pipeSouthImage.x + column.pipeSouthImage.width / 2 + 0.5 &&
      bird.moveBird.y + (bird.birdSize[1] / 2) < column.pipeSouthImage.y - 20) {
      counter.updateScore();
      pointSound.play();
    }
  }

  gameOver() {
    ctx.drawImage(
      image2,
      193,
      228,
      187,
      36,
      canvas.width / 2 - 87,
      288,
      187,
      36
    )
  }

  die() {
    counter.getBestScore();
    counter.showTable();
    restartButton.style.display = 'block';
    endGameButton.style.display = 'block';
    hitSound.play();
    // game.gameOver();
    // this.gameOver();
  }

  start() {
    // column.render();
    bird.render();

    // canvas.onclick = () => {
    //   bird.birdY -= background.gap / 2;
    // }

    window.onkeydown = (e) => {
      if (e.key === 'ArrowUp') {
        bird.birdY -= column.gap / 2;
        wingFlapSound.play();
      }
    }
  }
}

const bird = new Bird();
