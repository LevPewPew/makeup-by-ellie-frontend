const imageRotation = require('fix-image-rotation');

async function rotatedImageBlobsWithExif(imageFiles) {
  let rotatedImageFiles = await imageRotation.fixRotation(imageFiles);

  return rotatedImageFiles;
}

export { rotatedImageBlobsWithExif };
