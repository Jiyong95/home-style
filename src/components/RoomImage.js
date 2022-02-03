import { Container, Img } from 'common';
import React from 'react';

const RoomImage = ({ imgUrl }) => {
  return (
    <Container>
      <Img src={imgUrl} alt="roomImage" width="800px"></Img>
    </Container>
  );
};

export default React.memo(RoomImage);
