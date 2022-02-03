export const getPosition = ({ pointX, pointY, imageWidth, imageHeight }) => {
  let array = [0, 0];

  if (pointY * 1.6 <= imageWidth / 2) {
    array[0] = -1;
  } else {
    array[0] = 1;
  }

  if (pointX * 1.6 <= imageHeight / 2) {
    array[1] = 1;
  } else {
    array[1] = -1;
  }

  return array;
};
