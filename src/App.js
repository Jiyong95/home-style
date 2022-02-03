import { useEffect, useState } from 'react';
import axios from 'axios';
import RoomImage from 'components/RoomImage';
import Grid from 'common/Grid';
import ToolTip from 'components/ToolTip';

const App = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const { data: apiData } = await axios.get(
        'https://cdn.ggumim.co.kr/test/image_product_link.json'
      );
      setData(apiData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <>
      {data && (
        <Grid isFlex justify="center" position="relative">
          <RoomImage data={data} />
          {data.productList.map((product, idx) => (
            <ToolTip productInfo={product} key={idx} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default App;
