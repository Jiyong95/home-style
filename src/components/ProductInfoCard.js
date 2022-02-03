import Card from 'common/Card';
import Container from 'common/Container';
import Img from 'common/Img';
import React from 'react';
import { ARROW_ICON } from 'utils/constants';
import addCommaToMoney from 'utils/formatMoney';

const ProductInfoCard = ({
  productInfo: {
    imageUrl,
    productId,
    productName,
    discountRate,
    priceDiscount,
  },
}) => {
  return (
    <Card
      width="220px"
      isFlex
      bg="#fdfdfd"
      padding="8px 0 8px 8px"
      radius="7px"
    >
      <Container margin="0 8px 0 0">
        <Img
          src={imageUrl}
          alt={productId}
          width="70px"
          height="70px"
          sx={{ borderRadius: '7px' }}
        />
      </Container>
      <Container isFlex column justify="space-between">
        <Container sx={{ textOverflow: 'ellipsis', lineHeight: '1.2em' }}>
          {productName}
        </Container>
        <Container isFlex>
          {discountRate === 0 ? (
            <span
              style={{
                color: '#898f94',
                fontSize: '11px',
                fontWeight: 'bold',
                marginRight: '4px',
              }}
            >
              예상가
            </span>
          ) : (
            <span
              style={{
                color: '#ff585d',
                marginRight: '4px',
                fontWeight: 'bold',
              }}
            >
              {`${discountRate}%`}
            </span>
          )}
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#181d1f',
              fontWeight: 'bold',
            }}
          >
            {addCommaToMoney(priceDiscount)}
          </span>
        </Container>
      </Container>
      <Container isFlex align="flex-end" margin="0 2px 0 0">
        <Img src={ARROW_ICON} alt="arrowIcon" width="20px" height="20px" />
      </Container>
    </Card>
  );
};

export default React.memo(ProductInfoCard);
