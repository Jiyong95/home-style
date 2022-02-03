import Grid from 'common/Grid';
import Img from 'common/Img';
import React from 'react';

const RoomImage = ({ data }) => {
  return (
    <Grid>
      <Img src={data.imageUrl} alt="roomImage" width="800px"></Img>
    </Grid>
  );
};

export default RoomImage;
