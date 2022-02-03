import Grid from 'common/Grid';
import Img from 'common/Img';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const ToolTip = ({ productInfo }) => {
  const [isClick, setIsClick] = useState(0);
  const [spaceWidth, setSpaceWidth] = useState((window.innerWidth - 800) / 2);
  let timer = useRef(null);

  const handleWindow = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setSpaceWidth((window.innerWidth - 800) / 2);
    }, [100]);
  }, [timer]);

  useEffect(() => {
    window.addEventListener('resize', handleWindow);
    return () => window.removeEventListener('resize', handleWindow);
  }, [handleWindow]);

  return (
    <Grid
      position="absolute"
      top={productInfo.pointX * 1.6}
      left={spaceWidth + productInfo.pointY * 1.6}
    >
      <Img
        width="32px"
        height="32px"
        src="//cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png"
        alt="roomImage"
      ></Img>
    </Grid>
  );
};

export default ToolTip;
