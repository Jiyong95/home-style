import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Container, Image } from './style';
import { SEARCH_ICON, CLOSE_ICON } from 'utils';
import { ProductInfoCard } from 'components';

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
    <Container
      position="absolute"
      top={productInfo.pointX * 1.6}
      left={spaceWidth + productInfo.pointY * 1.6}
      onClick={() => {
        clickedId === productInfo.productId
          ? setClickedId(null)
          : setClickedId(productInfo.productId);
      }}
    >
      {clickedId === productInfo.productId ? (
        <Container>
          <Image src={CLOSE_ICON} alt="searchIcon" />
          <ProductInfoCard productInfo={productInfo} />
        </Container>
      ) : (
        <Image src={SEARCH_ICON} alt="closeIcon" />
      )}
    </Container>
  );
};

export default ToolTip;
