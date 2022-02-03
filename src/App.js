import { useEffect, useState } from 'react';
import axios from 'axios';
import RoomImage from 'components/RoomImage';
import Container from 'common/Container';
import ToolTip from 'components/ToolTip';
import { API_URL } from 'utils/constants';

const App = () => {
  const [data, setData] = useState(null);
  const [clickedId, setClickedId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: apiData } = await axios.get(API_URL);
        setData(apiData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  console.log(data);
  return (
    <>
      {data && (
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
      )}
    </>
  );
};

export default App;
