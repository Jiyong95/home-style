import React from 'react';
import styled from 'styled-components';

const Card = (props) => {
  const { width, height, padding, bg, isFlex, radius, cursor, children, sx } =
    props;

  const styles = {
    width,
    height,
    padding,
    bg,
    isFlex,
    radius,
    cursor,
    children,
  };

  return (
    <ElCard {...styles} style={{ ...sx }}>
      {children}
    </ElCard>
  );
};

Card.defaultProps = {
  width: 'auto',
  height: 'auto',
  cursor: 'pointer',
};

const ElCard = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: ${(props) => props.cursor};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.bg && `background-color: ${props.bg};`}
  ${(props) => props.isFlex && `display: flex;`}
  ${(props) => props.radius && `border-radius: ${props.radius};`}
  z-index: 1100;
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

export default Card;
