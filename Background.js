class Background {
  constructor() {
    this.speed = 4;
    this.index = 0;
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

    bird.render(background);
    column.render();

    window.requestAnimationFrame(background.render);

  }

  start() {
    image.onload = background.render;
  }
}

let background = new Background();