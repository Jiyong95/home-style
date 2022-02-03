import Grid from 'common/Grid';
import Img from 'common/Img';
import React from 'react';

const RoomImage = ({ imgUrl }) => {
  return (
    <Grid>
      <Img src={imgUrl} alt="roomImage" width="800px"></Img>
    </Grid>
  );
};

export default React.memo(RoomImage);
