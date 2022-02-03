import React from 'react';
import styled from 'styled-components';

const Img = (props) => {
  const { width, height, src, alt, sx } = props;

  const styles = {
    width,
    height,
  };

  return <Image {...styles} style={{ ...sx }} src={src} alt={alt} />;
};

Img.defaultProps = {
  width: 'auto',
  height: 'auto',
};

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export default Img;
