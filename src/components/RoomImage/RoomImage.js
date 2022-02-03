import Img from './style';
import React from 'react';

const RoomImage = ({ imgUrl }) => {
  return (
    <div>
      <Img src={imgUrl} alt="roomImage"></Img>
    </div>
  );
};

export default React.memo(RoomImage);
