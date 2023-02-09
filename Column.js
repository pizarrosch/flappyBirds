// class Column {
//   constructor() {
//     this.speed = 4;
//     this.index = 0;
//   }
//
//   render() {
//
//     // Note: to create columns on various random heights, possibly only one of a pair
//     // e.g. the one on the upper side should be changed and then, for the position of
//     // the one at the bottom the gap must be subtracted
//
//     column.index += 0.1;
//
//     // const columnDirection = -((column.index * column.speed) % canvas.width);
//     const firstColumnSource = {
//       x: 432,
//       y: 110,
//       width: 78,
//       height: 768
//     }
//
//     const firstColumnImage = {
//       x: canvas.width -= 1,
//       y: 0,
//       width:78,
//       height: 768
//     }
//
//     const secondColumnSource = {
//       x: 510,
//       y: 110,
//       width: 80,
//       height: 768
//     }
//
//     const secondColumnImage = {
//       x: canvas.width -= 1,
//       y: 450,
//       width: 78,
//       height: 768
//     }
//
//     // const thirdColumnSource = {
//     //   x: 432,
//     //   y: 110,
//     //   width: 78,
//     //   height: 530
//     // }
//     //
//     // const thirdColumnImage = {
//     //   x: firstColumnImage.x + 2.76 * firstColumnSource.width,
//     //   // y: -Math.floor((Math.random() * thirdColumnSource.height) + canvas.height / 2),
//     //   y: Math.random() * (canvas.height / 2),
//     //   width: 78,
//     //   height: 530
//     // }
//     //
//     // const fourthColumnSource = {
//     //   x: 510,
//     //   y: 110,
//     //   width: 80,
//     //   height: 480
//     // }
//     //
//     // const fourthColumnImage = {
//     //   x: firstColumnImage.x + 2.76 * firstColumnSource.width,
//     //   y: thirdColumnImage.y + 192,
//     //   width: 78,
//     //   height: 530
//     // }
//     //
//     // const fifthColumnSource = {
//     //   x: 432,
//     //   y: 110,
//     //   width: 78,
//     //   height: 530
//     // }
//     //
//     // const fifthColumnImage = {
//     //   x: thirdColumnImage.x + 2.76 * firstColumnSource.width,
//     //   y: 0,
//     //   width: 78,
//     //   height: 318
//     // }
//     //
//     // const sixthColumnSource = {
//     //   x: 510,
//     //   y: 110,
//     //   width: 80,
//     //   height: 480
//     // }
//     //
//     // const sixthColumnImage = {
//     //   x: fourthColumnImage.x + 2.76 * firstColumnSource.width,
//     //   y: 450,
//     //   width: 78,
//     //   height: 318
//     // }
//     //
//     // const seventhColumnSource = {
//     //   x: 432,
//     //   y: 110,
//     //   width: 78,
//     //   height: 530
//     // }
//     //
//     // const seventhColumnImage = {
//     //   x: fifthColumnImage.x + 2.76 * firstColumnSource.width,
//     //   y: 0,
//     //   width: 78,
//     //   height: 318
//     // }
//     //
//     // const eighthColumnSource = {
//     //   x: 510,
//     //   y: 110,
//     //   width: 80,
//     //   height: 480
//     // }
//     //
//     // const eighthColumnImage = {
//     //   x: sixthColumnImage.x + 2.76 * firstColumnSource.width,
//     //   y: 450,
//     //   width: 78,
//     //   height: 318
//     // }
//
//     ctx.drawImage(
//       image,
//       firstColumnSource.x,
//       firstColumnSource.y,
//       firstColumnSource.width,
//       firstColumnSource.height,
//       firstColumnImage.x,
//       firstColumnImage.y,
//       firstColumnImage.width,
//       firstColumnImage.height
//     )
//
//     ctx.drawImage(
//       image,
//       secondColumnSource.x,
//       secondColumnSource.y,
//       secondColumnSource.width,
//       secondColumnSource.height,
//       secondColumnImage.x,
//       secondColumnImage.y,
//       secondColumnImage.width,
//       secondColumnImage.height
//     )
//
//     // ctx.drawImage(
//     //   image,
//     //   thirdColumnSource.x,
//     //   thirdColumnSource.y,
//     //   thirdColumnSource.width,
//     //   thirdColumnSource.height,
//     //   thirdColumnImage.x,
//     //   thirdColumnImage.y,
//     //   thirdColumnImage.width,
//     //   thirdColumnImage.height
//     // )
//     //
//     // ctx.drawImage(
//     //   image,
//     //   fourthColumnSource.x,
//     //   fourthColumnSource.y,
//     //   fourthColumnSource.width,
//     //   fourthColumnSource.height,
//     //   fourthColumnImage.x,
//     //   fourthColumnImage.y,
//     //   fourthColumnImage.width,
//     //   fourthColumnImage.height
//     // )
//     //
//     // ctx.drawImage(
//     //   image,
//     //   fifthColumnSource.x,
//     //   fifthColumnSource.y,
//     //   fifthColumnSource.width,
//     //   fifthColumnSource.height,
//     //   fifthColumnImage.x,
//     //   fifthColumnImage.y,
//     //   fifthColumnImage.width,
//     //   fifthColumnImage.height
//     // )
//     //
//     // ctx.drawImage(
//     //   image,
//     //   sixthColumnSource.x,
//     //   sixthColumnSource.y,
//     //   sixthColumnSource.width,
//     //   sixthColumnSource.height,
//     //   sixthColumnImage.x,
//     //   sixthColumnImage.y,
//     //   sixthColumnImage.width,
//     //   sixthColumnImage.height
//     // )
//     //
//     // ctx.drawImage(
//     //   image,
//     //   seventhColumnSource.x,
//     //   seventhColumnSource.y,
//     //   seventhColumnSource.width,
//     //   seventhColumnSource.height,
//     //   seventhColumnImage.x,
//     //   seventhColumnImage.y,
//     //   seventhColumnImage.width,
//     //   seventhColumnImage.height
//     // )
//     //
//     // ctx.drawImage(
//     //   image,
//     //   eighthColumnSource.x,
//     //   eighthColumnSource.y,
//     //   eighthColumnSource.width,
//     //   eighthColumnSource.height,
//     //   eighthColumnImage.x,
//     //   eighthColumnImage.y,
//     //   eighthColumnImage.width,
//     //   eighthColumnImage.height
//     // )
//   }
//
// }
//
// const column = new Column();
