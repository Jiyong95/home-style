import { Container, Img } from 'common';
import React from 'react';
import styled from 'styled-components';

const ProductImageCard = ({ productList, clickedId, setClickedId }) => {
  return (
    <Container isFlex justify="center" sx={{ overFlow: 'scrollX' }}>
      {productList.map((product) => (
        <CardWrap
          key={product.productId}
          clicked={clickedId === product.productId ? true : null}
        >
          <CardImage
            bgUrl={product.imageUrl}
            onClick={() => {
              clickedId === product.productId
                ? setClickedId(null)
                : setClickedId(product.productId);
            }}
          >
            {product.discountRate !== 0 && (
              <DiscountBadge>{`${product.discountRate}%`}</DiscountBadge>
            )}
          </CardImage>
        </CardWrap>
      ))}
    </Container>
  );
};

const CardWrap = styled.div`
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 6px;
  ${(props) =>
    props.clicked === true &&
    `
  background: linear-gradient(163.54deg, #ff659e 8.22%, #f56b30 94.1%);
  margin: 26px 4px;
  padding: 2px;
  border-radius: 18px;
  `}
`;

const CardImage = styled.div`
  ${(props) => props.bgUrl && `background-image: url(${props.bgUrl});`}
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
`;

export default ProductImageCard;
