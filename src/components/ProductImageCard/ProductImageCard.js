import React from 'react';
import {
  Container,
  Wrapper,
  CardWrap,
  CardImage,
  DiscountBadge,
  Text,
} from './style';

const ProductImageCard = ({ productList, clickedId, setClickedId }) => {
  return (
    <Container>
      <Wrapper>
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
                <DiscountBadge>
                  {` ${product.discountRate}`}
                  <Text>%</Text>
                </DiscountBadge>
              )}
            </CardImage>
          </CardWrap>
        ))}
      </Wrapper>
    </Container>
  );
};

export default React.memo(ProductImageCard);
