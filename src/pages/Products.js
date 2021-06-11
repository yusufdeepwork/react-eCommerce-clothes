import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Loader from '../components/Loader';
import ProductItem from '../components/ProductItem';
import { ProductContext } from '../context/ProductContext';

const Products = () => {
  const apiUrl = 'https://60bfb0e797295a0017c4398c.mockapi.io/clothesImage';
  const { data, setData, favorites } = useContext(ProductContext);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }, []);
  return (
    <>
      <ProductsContainer>
        {data.length !== 0
          ? data.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              favorite={!!favorites.find((favoriteItem) => favoriteItem.id === product.id)}
            />

          ))
          : <Loader />}
      </ProductsContainer>
    </>
  );
};
export default Products;
export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  grid-auto-rows: 50rem;
  grid-auto-columns: 40rem;
  text-align: center;
-ms-grid-column-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  padding: 1rem 2rem;
  @media screen and (max-width: 1300px){
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 30rem;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 35rem;
  }
  @media screen and (max-width: 600px){
    grid-auto-rows: 30rem;
  }
`;
