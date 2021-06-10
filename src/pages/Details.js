import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartProductsContainer } from './ShoppingCard';
import DetailItem from '../components/DetailItem';
import { ProductContext } from '../context/ProductContext';

const Details = () => {
  const [detailItem, setDetailItem] = useState();
  const dynamicUrl = useParams();
  const { id } = dynamicUrl;
  const apiUrl = `https://60bfb0e797295a0017c4398c.mockapi.io/clothesImage/${id}`;
  const { favorites } = useContext(ProductContext);
  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setDetailItem(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);
  const favorite = !!favorites.find((favoriteItem) => favoriteItem.id === id);
  return (
    <CartProductsContainer>
      <DetailItem product={detailItem} favorite={favorite} />
    </CartProductsContainer>
  );
};
export default Details;
