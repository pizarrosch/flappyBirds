class Game {

  start() {
    background.render();

    restartButton.onclick = () => {
      location.reload();
      restartButton.style.display = 'none';
      endGameButton.style.display = 'none';
    };

    endGameButton.onclick = () => {
      counter.reset();
      endGameButton.style.display = 'none';
      scoreTable.style.display = 'none';
    };

    window.onload = () => {
      counter.getBestScore();
      setInterval(() => {
        if (countdownCount.innerHTML > 1) {
          countdownCount.innerHTML -= 1
        } else {
          countdownCount.innerHTML = 'Go!';
          countdownCount.style.left = '160px';
        }
      }, 1000);
    }
  }
}

let game = new Game();
game.start();

