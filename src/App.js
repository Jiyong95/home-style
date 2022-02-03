import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductImageCard, RoomImage, ToolTip } from 'components';
import { API_URL } from 'utils';
import styled from 'styled-components';

const App = () => {
  const [data, setData] = useState(null);
  const [clickedId, setClickedId] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: apiData } = await axios.get(API_URL);
        setData(apiData);
      } catch (err) {
        console.log(err);
        setErrMessage(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      {data ? (
        <>
          <Container isFlex justify="center" position="relative">
            <RoomImage imgUrl={data.imageUrl} />
            {data.productList.map((product) => (
              <ToolTip
                key={product.productId}
                productInfo={product}
                clickedId={clickedId}
                setClickedId={setClickedId}
              />
            ))}
          </Container>
          <ProductImageCard
            productList={data.productList}
            clickedId={clickedId}
            setClickedId={setClickedId}
          />
        </>
      ) : (
        <Container>{errMessage}</Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
