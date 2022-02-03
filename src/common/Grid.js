import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
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
    cursor,
    children,
    _ref,
    _onClick,
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
    children,
    cursor,
  };

  return (
    <ElGrid {...styles} onClick={_onClick} ref={_ref}>
      {children}
    </ElGrid>
  );
};

Grid.defaultProps = {
  width: '100%',
  height: 'auto',
  _ref: null,
  _onClick: () => {},
};

const ElGrid = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.isFlex && 'display: flex;'}
  ${(props) => props.isWrap && 'flex-wrap: wrap;'}
  ${(props) => props.column && 'flex-direction: column;'}
  ${(props) => `justify-content: ${props.justify};`};
  ${(props) => `align-items: ${props.align};`};
  ${(props) => props.background && `background: ${props.bg};`}
  ${(props) => props.radius && `border-radius: ${props.radius};`}
  ${(props) => props.border && `border: 1px solid ${props.border};`};
  ${(props) => props.cursor && `cursor: pointer;`};
`;

export default Grid;
