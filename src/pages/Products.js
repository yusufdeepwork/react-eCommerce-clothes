import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductItem from '../components/ProductItem';

const Products = () => {
  const [data, setData] = useState([]);
  const apiUrl = 'https://60bfb0e797295a0017c4398c.mockapi.io/clothesImage';

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (

    <>
      <ProductsContainer>
        {data.map((product) => (
          <ProductItem product={product} />
        ))}

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
`;
