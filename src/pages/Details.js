import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartProductsContainer } from './ShoppingCard';
import DetailItem from '../components/DetailItem';

const Details = () => {
  const [detailItem, setDetailItem] = useState();
  const dynamicUrl = useParams();
  const { id } = dynamicUrl;
  const apiUrl = `https://60bfb0e797295a0017c4398c.mockapi.io/clothesImage/${id}`;

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setDetailItem(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);
  return (
    <CartProductsContainer>
      <DetailItem product={detailItem} />
    </CartProductsContainer>
  );
};
export default Details;
