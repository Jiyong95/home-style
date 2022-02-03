export const getPosition = (pointX, pointY, imageWidth, imageHeight) => {
  let position = '';

  console.log('pointX', pointX);
  console.log('pointY', pointY);
  if (pointX * 1.6 <= imageHeight / 2) {
    position += 'top';
  } else {
    position += 'bottom';
  }

  if (pointY * 1.6 <= imageWidth / 2) {
    position += 'left';
  } else {
    position += 'right';
  }
  console.log(position);
  return position;
};
