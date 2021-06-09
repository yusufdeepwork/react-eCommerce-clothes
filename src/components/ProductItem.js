import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductContext from '../context/ProductContext';

const ProductItem = ({ product, favorite }) => {
  const { setFavorites, favorites } = useContext(ProductContext);

  const addFavorite = () => {
    const copyFavoriteArray = [...favorites];
    const isInProduct = copyFavoriteArray.map((copyProduct) => copyProduct.id).includes(product.id);
    if (!isInProduct && favorites) {
      setFavorites((prevFavorites) => [...prevFavorites, product]);
    }
  };

  const removeFavorite = () => {
    const copyFavoriteArray = [...favorites];
    const isInProduct = copyFavoriteArray.map((copyProduct) => copyProduct.id).includes(product.id);
    if (isInProduct && favorites) {
      setFavorites(copyFavoriteArray.filter((item) => item.id !== product.id));
    }
  };

  return (
    <ProductCart>
      <ProductImage src={product.clothesUrl} alt="selam" />
      <ProductBar>
        <ProductPrice>{product.price}</ProductPrice>
      </ProductBar>

      <ProductBar>
        <InfoProduct>Add To Cart</InfoProduct>
        <InfoProduct>See Details</InfoProduct>
        <InfoProduct onClick={() => (favorite ? removeFavorite() : addFavorite())}>
          {favorite ? 'Remove From Favorites ' : 'Add To Favorites'}
        </InfoProduct>
      </ProductBar>

    </ProductCart>
  );
};
export default ProductItem;

const ProductCart = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: black;
  border: white solid 3px;
  color: white;
`;
const ProductImage = styled.img`
  padding: 1rem 0 0 0;
  height: 80%;
  width: 80%;
  justify-content: center;
  align-items: center;

`;
const InfoProduct = styled.text`
  display: flex;
  padding: 1rem;
  font-size: 20px;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;
  :hover{
    transition: 1s;
    color: blue;
    cursor: pointer;
  }
  @media screen and (max-width: 1300px){
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;
const ProductBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductPrice = styled.text`

  padding: 1rem;
  font-size: 1.5rem;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;

  @media screen and (max-width: 1300px){
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 0;
  }
`;
