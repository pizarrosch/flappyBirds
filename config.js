const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imgURL = 'https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png';
const image = new Image();
image.src = imgURL;

const gameOverImage = new Image();
gameOverImage.src = 'https://raw.githubusercontent.com/CodeExplainedRepo/Original-Flappy-bird-JavaScript/master/img/sprite.png';
gameOverImage.id = 'gameOver';

const scoreDiv = document.querySelector('.score');