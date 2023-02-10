class Counter {
  constructor(score, bestScore) {
    this.score = score;
    this.bestScore = bestScore;
  }

  updateScore() {
    this.score += 1;
    localStorage.setItem('bestScore', `${this.score}`);
  }

  getBestScore() {
    this.bestScore = localStorage.getItem('bestScore');
    return this.bestScore;
  }
}

let counter = new Counter(0);
scoreDiv.innerHTML = counter.score;