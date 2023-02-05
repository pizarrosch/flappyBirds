class Column {
  constructor() {
    this.speed = 4;
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
      x: columnDirection,
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
      x: columnDirection,
      y: 450,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    const thirdColumnSource = {
      x: 432,
      y: 110,
      width: 78,
      height: 530
    }

    const thirdColumnImage = {
      x: firstColumnImage.x + 2.76 * firstColumnSource.width,
      y: 0,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    const fourthColumnSource = {
      x: 510,
      y: 110,
      width: 80,
      height: 480
    }

    const fourthColumnImage = {
      x: firstColumnImage.x + 2.76 * firstColumnSource.width,
      y: 450,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    const fifthColumnSource = {
      x: 432,
      y: 110,
      width: 78,
      height: 530
    }

    const fifthColumnImage = {
      x: thirdColumnImage.x + 2.76 * firstColumnSource.width,
      y: 0,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    const sixthColumnSource = {
      x: 510,
      y: 110,
      width: 80,
      height: 480
    }

    const sixthColumnImage = {
      x: fourthColumnImage.x + 2.76 * firstColumnSource.width,
      y: 450,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    const seventhColumnSource = {
      x: 432,
      y: 110,
      width: 78,
      height: 530
    }

    const seventhColumnImage = {
      x: fifthColumnImage.x + 2.76 * firstColumnSource.width,
      y: 0,
      width: bird.birdSize[0] * 2,
      height: 318
    }

    const eighthColumnSource = {
      x: 510,
      y: 110,
      width: 80,
      height: 480
    }

    const eighthColumnImage = {
      x: sixthColumnImage.x + 2.76 * firstColumnSource.width,
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

    ctx.drawImage(
      image,
      thirdColumnSource.x,
      thirdColumnSource.y,
      thirdColumnSource.width,
      thirdColumnSource.height,
      thirdColumnImage.x,
      thirdColumnImage.y,
      thirdColumnImage.width,
      thirdColumnImage.height
    )

    ctx.drawImage(
      image,
      fourthColumnSource.x,
      fourthColumnSource.y,
      fourthColumnSource.width,
      fourthColumnSource.height,
      fourthColumnImage.x,
      fourthColumnImage.y,
      fourthColumnImage.width,
      fourthColumnImage.height
    )

    ctx.drawImage(
      image,
      fifthColumnSource.x,
      fifthColumnSource.y,
      fifthColumnSource.width,
      fifthColumnSource.height,
      fifthColumnImage.x,
      fifthColumnImage.y,
      fifthColumnImage.width,
      fifthColumnImage.height
    )

    ctx.drawImage(
      image,
      sixthColumnSource.x,
      sixthColumnSource.y,
      sixthColumnSource.width,
      sixthColumnSource.height,
      sixthColumnImage.x,
      sixthColumnImage.y,
      sixthColumnImage.width,
      sixthColumnImage.height
    )

    ctx.drawImage(
      image,
      seventhColumnSource.x,
      seventhColumnSource.y,
      seventhColumnSource.width,
      seventhColumnSource.height,
      seventhColumnImage.x,
      seventhColumnImage.y,
      seventhColumnImage.width,
      seventhColumnImage.height
    )

    ctx.drawImage(
      image,
      eighthColumnSource.x,
      eighthColumnSource.y,
      eighthColumnSource.width,
      eighthColumnSource.height,
      eighthColumnImage.x,
      eighthColumnImage.y,
      eighthColumnImage.width,
      eighthColumnImage.height
    )
  }
}

const column = new Column();