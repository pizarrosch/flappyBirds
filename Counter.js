class Counter {
  constructor(score, bestScore, countdown) {
    this.score = score;
    this.bestScore = bestScore;
    this.countdown = countdown;
  }

  render() {
    scoreDiv.innerHTML = `Score:${counter.score}`;
    bestScoreDiv.innerHTML = `Best:${counter.bestScore}`;
    countdownCount.innerHTML = this.countdown;
  }

  updateScore() {
    this.score += 1;

    if (this.score > this.bestScore) {
      localStorage.setItem('bestScore', `${this.score}`);
    }
    scoreDiv.innerHTML = `Score:${counter.score}`;
  }

  getBestScore() {
    this.bestScore = localStorage.getItem('bestScore');
    bestScoreDiv.innerHTML = `Best:${counter.bestScore}`;
  }

  reset() {
    counter.score = 0;
    localStorage.setItem('bestScore', `${counter.score}`);
    scoreDiv.innerHTML = `Score:${counter.score}`;
    const bestScoreValue = localStorage.getItem('bestScore');
    bestScoreDiv.innerHTML = `Best:${bestScoreValue}`;
  }

  showTable() {
    scoreTable.style.display = 'flex';
    scoreTableScore.innerHTML = `Score:${counter.score}`;
    scoreTableBestScore.innerHTML = `Best:${counter.bestScore}`;
  }
}

let counter = new Counter(0, 0, 5);
counter.render();