import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductImageCard, RoomImage, ToolTip } from 'components';
import { Container } from 'common';
import { API_URL } from 'utils';

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

  console.log(data);
  return (
    <>
      {data ? (
        <>
          <Container isFlex justify="center" position="relative">
            <RoomImage imgUrl={data?.imageUrl} />
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

export default App;
