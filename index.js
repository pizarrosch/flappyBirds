class Game {
  start() {
    background.render();

    startButton.onclick = () => {
      background.start()
      startButton.style.display = 'none';
    }

    restartButton.onclick = () => {
      location.reload();
      background.start()
      startButton.classList.add('invisible');

      requestAnimationFrame(background.start)

      restartButton.style.display = 'none';
      endGameButton.style.display = 'none';
    };

    endGameButton.onclick = () => {
      location.reload();
      counter.reset();
      restartButton.style.display = 'none';
      endGameButton.style.display = 'none';
    };

    window.onload = () => {
      counter.getBestScore();
    }
  }
}

let game = new Game();
game.start();

