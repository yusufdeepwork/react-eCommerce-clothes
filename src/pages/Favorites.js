import React, { useContext } from 'react';
import { ProductsContainer } from './Products';
import ProductContext from '../context/ProductContext';
import ProductItem from '../components/ProductItem';

const Favorites = () => {
  const { favorites } = useContext(ProductContext);

  return (
    <ProductsContainer>
      {favorites.map((favorite) => <ProductItem product={favorite} favorite />)}
    </ProductsContainer>
  );
};
export default Favorites;
