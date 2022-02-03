import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
  const {
    width,
    height,
    padding,
    margin,
    position,
    isFlex,
    isWrap,
    column,
    justify,
    align,
    bg,
    radius,
    border,
    top,
    left,
    cursor,
    children,
    _ref,
    _onClick,
    sx,
  } = props;

  const styles = {
    width,
    height,
    padding,
    margin,
    position,
    isFlex,
    isWrap,
    column,
    justify,
    align,
    bg,
    radius,
    border,
    top,
    left,
    children,
    cursor,
  };

  return (
    <ElContainer {...styles} style={{ ...sx }} onClick={_onClick} ref={_ref}>
      {children}
    </ElContainer>
  );
};

Container.defaultProps = {
  width: 'auto',
  height: 'auto',
  _ref: null,
  _onClick: () => {},
};

const ElContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => props.isFlex && 'display: flex;'}
  ${(props) => props.isWrap && 'flex-wrap: wrap;'}
  ${(props) => props.column && 'flex-direction: column;'}
  ${(props) => props.justify && `justify-content: ${props.justify};`};
  ${(props) => props.align && `align-items: ${props.align};`};
  ${(props) => props.bg && `background: ${props.bg};`}
  ${(props) => props.radius && `border-radius: ${props.radius};`}
  ${(props) => props.border && `border: 1px solid ${props.border};`};
  ${(props) => props.top && `top: ${props.top}px;`};
  ${(props) => props.left && `left: ${props.left}px;`};
  ${(props) => props.cursor && `cursor: pointer;`};
`;

export default Container;
