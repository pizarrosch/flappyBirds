class Column {
  constructor() {
    this.speed = 2;
    this.index = 0;
  }
  render(bird) {
    column.index += 0.3;

    const columnDirection = -((column.index * column.speed) % canvas.width);

    const firstColumnSource = {
      x: 432,
      y: 110,
      width: 78,
      height: 530
    }

    const firstColumnImage = {
      x: columnDirection + canvas.width,
      y: 0,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    const secondColumnSource = {
      x: 510,
      y: 110,
      width: 80,
      height: 480
    }

    const secondColumnImage = {
      x: columnDirection + canvas.width,
      y: 450,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    ctx.drawImage(
      image,
      firstColumnSource.x,
      firstColumnSource.y,
      firstColumnSource.width,
      firstColumnSource.height,
      firstColumnImage.x,
      firstColumnImage.y,
      firstColumnImage.width,
      firstColumnImage.height
    )

    ctx.drawImage(
      image,
      secondColumnSource.x,
      secondColumnSource.y,
      secondColumnSource.width,
      secondColumnSource.height,
      secondColumnImage.x,
      secondColumnImage.y,
      secondColumnImage.width,
      secondColumnImage.height
    )
  }
}

const column = new Column();