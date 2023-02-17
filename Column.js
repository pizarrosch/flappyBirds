class Column {

  pipeNorthSource;
  pipeSouthSource;
  pipeNorthImage;
  pipeSouthImage
  gap;
  constantGap;
  pipe = [];

  constructor() {
    this.pipe[0] = {
      x: canvas.width,
      y: -204
    }
  }

  render() {
    for (let i = 0; i < column.pipe.length; i++) {
      column.pipeNorthSource = {
        x: 432,
        y: 110,
        width: 78,
        height: 504
      }

      column.pipeSouthSource = {
        x: 510,
        y: 110,
        width: 80,
        height: 504
      }

      column.pipeNorthImage = {
        x: column.pipe[i].x,
        y: column.pipe[i].y,
        width: bird.birdSize[0] * 2,
        height: 580
      }

      column.pipeSouthImage = {
        x: column.pipe[i].x,
        y: column.pipe[i].y + column.constantGap,
        width: bird.birdSize[0] * 2,
        height: 580
      }

      column.gap = column.pipeNorthImage.height * 0.25;
      column.constantGap = column.pipeNorthImage.height + column.gap;

      ctx.drawImage(
        image,
        column.pipeNorthSource.x,
        column.pipeNorthSource.y,
        column.pipeNorthSource.width,
        column.pipeNorthSource.height,
        column.pipeNorthImage.x,
        column.pipeNorthImage.y,
        column.pipeNorthImage.width,
        column.pipeNorthImage.height
      )

      ctx.drawImage(
        image,
        column.pipeSouthSource.x,
        column.pipeSouthSource.y,
        column.pipeSouthSource.width,
        column.pipeSouthSource.height,
        column.pipeSouthImage.x,
        column.pipeSouthImage.y,
        column.pipeSouthImage.width,
        column.pipeSouthImage.height
      )

      column.pipe[i].x -= 3;

      if (column.pipe[i].x === canvas.width - (column.pipeNorthImage.width * 3)) {
        column.pipe.push({
          x: canvas.width + column.pipeNorthImage.width,
          y: Math.floor(Math.random() * column.pipeNorthSource.height) - column.pipeNorthSource.height
        })
      }
      console.log(column.pipe[i].x)
    }
  }
}

const column = new Column();
