import {
  Container,
  CardImage,
  InfoWrap,
  FunitureName,
  FuniturePrice,
  ExpectedPrice,
  PercentDiscount,
  PriceDiscount,
  IconWrapper,
  Icon,
} from './style';
import React from 'react';
import { ARROW_ICON } from 'utils';

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
    <Container>
      <CardImage bgUrl={imageUrl} />
      <InfoWrap isFlex column justify="space-between">
        <FunitureName>{productName}</FunitureName>
        <FuniturePrice>
          {discountRate === 0 ? (
            <>
              <ExpectedPrice>예상가</ExpectedPrice>
              <PriceDiscount>
                {` ${priceDiscount.toLocaleString()} `}
              </PriceDiscount>
            </>
          ) : (
            <PriceDiscount style={{ marginTop: '5px' }}>
              <PercentDiscount>{`${discountRate}%`}</PercentDiscount>
              {` ${priceDiscount.toLocaleString()} `}
            </PriceDiscount>
          )}
        </FuniturePrice>
      </InfoWrap>
      <IconWrapper>
        <Icon src={ARROW_ICON} alt="arrowIcon" />
      </IconWrapper>
    </Container>
  );
};

export default React.memo(ProductInfoCard);
