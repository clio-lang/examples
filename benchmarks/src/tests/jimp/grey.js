const Jimp = require("jimp");

module.exports.grey = async (index) => {
  const img = await Jimp.read(`tests/jimp/images/low/img${index}.jpg`);
  img.greyscale();
  return img.bitmap.width * img.bitmap.height;
};
