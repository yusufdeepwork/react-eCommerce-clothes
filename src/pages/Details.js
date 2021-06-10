import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/ProductContext';
import { CartProductsContainer } from './ShoppingCard';

const Details = () => {
  const { data } = useContext(ProductContext);
  const dynamicUrl = useParams();
  const { id } = dynamicUrl;
  // eslint-disable-next-line no-console
  console.log(id, 'id');
  // eslint-disable-next-line no-console
  console.log(data.find((product) => product.id === id), 'details');
  return (
    <CartProductsContainer>
      selam
    </CartProductsContainer>
  );
};
export default Details;
