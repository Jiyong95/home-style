import styled from 'styled-components';

const containerPosition = (position) => {
  switch (position) {
    case 'topleft':
      return `top: 28px; left: -20px;`;
    case 'topright':
      return `top: 28px; left: -160px;`;
    case 'bottomleft':
      return `bottom: 52px; left: -20px;`;
    case 'bottomright':
      return `bottom: 52px; left: -160px;`;
    default:
      return '';
  }
};
const beforePosition = (position) => {
  switch (position) {
    case 'topleft':
      return `
        top: -8px;
        left: 30px;
        width: 12px;
        height: 8px;`;
    case 'topright':
      return `
        top: -8px;
        right: 45px;
        width: 12px;
        height: 8px;`;
    case 'bottomleft':
      return `
      bottom: -8px;
      left: 30px;
      width: 12px;
      height: 8px;
      transform: rotate(180deg);`;
    case 'bottomright':
      return `
        bottom: -8px;
        right: 45px;
        width: 12px;
        height: 8px;
        transform: rotate(180deg);`;
    default:
      return '';
  }
};

const Container = styled.span`
  z-index: 1000;
  display: flex;
  align-items: center;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  ${(props) => props.position && `${containerPosition(props.position)}`}
  &::before {
    content: '';
    position: absolute;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
    ${(props) => props.position && `${beforePosition(props.position)}`}
  }
`;

const CardImage = styled.div`
  ${(props) => props.bgUrl && `background-image: url(${props.bgUrl});`}
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const InfoWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
`;

const FunitureName = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  line-height: 1.3em;
`;

const FuniturePrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const ExpectedPrice = styled.span`
  line-height: 1.2em !important;
  color: #898f94;
  font-size: 11px;
  line-height: 11px;
  font-weight: bold;
  margin-right: 4px;
`;

const PercentDiscount = styled.span`
  line-height: 1.2em !important;
  color: #ff585d;
  margin-right: 4px;
`;

const PriceDiscount = styled.span`
  line-height: 1.2em !important;
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const Icon = styled.img`
  width: 20px;
  aspect-ratio: auto 20 / 20;
  height: 20px;
`;
export {
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
};
