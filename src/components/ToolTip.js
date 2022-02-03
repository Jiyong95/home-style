import Grid from 'common/Grid';
import Img from 'common/Img';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SEARCH_ICON, CLOSE_ICON } from 'utils/constants';

const ToolTip = ({ productInfo, clickedId, setClickedId }) => {
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
      _onClick={() => setClickedId(productInfo.productId)}
    >
      {clickedId === productInfo.productId ? (
        <Img width="32px" height="32px" src={CLOSE_ICON} alt="searchIcon" />
      ) : (
        <Img width="32px" height="32px" src={SEARCH_ICON} alt="closeIcon" />
      )}
    </Grid>
  );
};

export default ToolTip;
