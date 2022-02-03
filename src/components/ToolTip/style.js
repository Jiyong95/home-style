import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => props.top && `top: ${props.top}px;`}
  ${(props) => props.left && `left: ${props.left}px;`}
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
export { Container, Image };
