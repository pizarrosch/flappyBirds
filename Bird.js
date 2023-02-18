class Bird {
  moveBird;

  constructor() {
    this.birdSize = [51, 36];
    this.index = 0;
    this.gravity = 3;
    this.birdSource = null;
    this.birdY = canvas.height / 2;
    this.angle = 0;
  }

  render() {
    bird.index += 0.6;
    bird.birdDirection = (bird.index * bird.gravity) % canvas.height;

    function convertToRadians(degree) {
      return degree * (Math.PI / 180);
    }

    bird.birdSource = {
      x: 432,
      y: Math.floor((bird.index % 9) / 3) * bird.birdSize[1],
      width: bird.birdSize[0],
      height: bird.birdSize[1]
    }

    bird.moveBird = {
      x: canvas.width / 2 - bird.birdSize[0] / 2,
      y: this.birdY,
      width: bird.birdSize[0],
      height: bird.birdSize[1]
    }
    ctx.save();
    ctx.translate(bird.moveBird.x, bird.moveBird.y)
    ctx.rotate(convertToRadians(bird.angle));

    ctx.drawImage(
      image,
      bird.birdSource.x,
      bird.birdSource.y,
      bird.birdSource.width,
      bird.birdSource.height,
      0,
      0,
      bird.moveBird.width,
      bird.moveBird.height
    )

    ctx.restore();

    this.birdY += bird.gravity;

    if (bird.birdY < 0) {
      bird.birdY = 0
    }

    bird.angle += 1;

    if (bird.angle > 45) {
      bird.moveBird.x -= 50;
    }

    if (bird.angle > 82) {
      bird.angle = 83;
    }

    if (((bird.moveBird.x + bird.birdSize[0] / 2 >= column.pipeSouthImage.x - 20 &&
          bird.moveBird.y + (bird.birdSize[1] / 2) >= column.pipeSouthImage.y - 15) ||
        (bird.moveBird.x - (bird.birdSize[0] / 2) === column.pipeSouthImage.x + column.pipeSouthSource.width &&
          bird.moveBird.y + (bird.birdSize[1]) >= column.pipeSouthImage.y - 20)) ||
      (bird.moveBird.y + (bird.birdSize[1] / 2) <= column.pipeNorthImage.y + (column.pipeNorthImage.height - 10) &&
        bird.moveBird.x + (bird.birdSize[0] / 2) >= column.pipeNorthImage.x - 20
      ) || bird.moveBird.y + bird.birdSize[1] >= canvas.height) {
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
    bird.render();
    window.onkeydown = (e) => {
      if (e.key === 'ArrowUp') {
        bird.angle = -15;
        bird.birdY -= column.gap / 2;
        wingFlapSound.play();
      }
    }

    canvas.onclick = () => {
      bird.angle = -15;
      bird.birdY -= column.gap / 2;
      wingFlapSound.play();
    }
  }
}

const bird = new Bird();
