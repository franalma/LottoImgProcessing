import Jimp from 'jimp';

const ImageParams: any = {
  digit0: { x: 145, y: 35, src: '../imgs/dig_0.png' },
  digit1: { x: 185, y: 35, src: '../imgs/dig_1.png' },
  digit2: { x: 225, y: 35, src: '../imgs/dig_2.png' },
  digit3: { x: 265, y: 35, src: '../imgs/dig_3.png' },
  digit4: { x: 305, y: 35, src: '../imgs/dig_4.png' },
};

const ImageFiles = {
    digit0: '../imgs/dig_0.png' ,
    digit1: '../imgs/dig_1.png' ,
    digit2:  '../imgs/dig_2.png' ,
    digit3: '../imgs/dig_3.png' ,
    digit4:  '../imgs/dig_4.png', 
    digit5:  '../imgs/dig_5.png', 
    digit6:  '../imgs/dig_6.png',
    digit7:  '../imgs/dig_7.png',
    digit8: '../imgs/dig_8.png' ,
    digit9:  '../imgs/dig_9.png' ,
};

export const addNumber = async ({
  numbers,
  serie,
}: {
  numbers: string;
  serie: string;
}) => {
  let font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
  const callback = function () {};
  const digitsImgs: Jimp[] = [
    await Jimp.read(ImageFiles.digit0),
    await Jimp.read(ImageFiles.digit1),
    await Jimp.read(ImageFiles.digit2),
    await Jimp.read(ImageFiles.digit3),
    await Jimp.read(ImageFiles.digit4),
    await Jimp.read(ImageFiles.digit5),
    await Jimp.read(ImageFiles.digit6),
    await Jimp.read(ImageFiles.digit7),
    await Jimp.read(ImageFiles.digit8),
    await Jimp.read(ImageFiles.digit9),
  ];

  //remove bombo
  Jimp.read('../imgs/template_loteria.jpg')
    .then((image) => {
      const w = image.bitmap.width;
      const h = image.bitmap.height;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w * 4; x++) {
          if (x > 140 * 4 && x < 350 * 4 && y > 32 && y < 85) {
            let byte = image.bitmap.data[y * w * 4 + x];
            // if (byte >= 0 && byte <= 90){
            image.bitmap.data[y * w * 4 + x] = 0xff;
            // }
          }
        }
      }

      const values = numbers.split('');
      for (let i = 0; i < values.length; i++) {
        const key = 'digit' + i;
        image.blit(
          digitsImgs[parseInt(values[i])],
          ImageParams[key].x,
          ImageParams[key].y,
          callback
        );
      }
      image.write('img/output.jpg');
    })
    .catch((err) => {
      console.log(`error:${{ err }}`);
    });
};
