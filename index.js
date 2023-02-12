class Game {
  render() {
    background.start();

    restartButton.onclick = () => {
      location.reload();
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
game.render();

