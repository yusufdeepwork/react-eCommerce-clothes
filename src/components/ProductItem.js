import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { ProductContext } from '../context/ProductContext';
import { addFavoriteToast, getAddCardToast, removeFavoriteToast } from './Toasts';

const ProductItem = ({ product, favorite }) => {
  const { addCard, changeItem } = useContext(ProductContext);
  const { addToast } = useToasts();

  return (
    <ProductCart favorite={favorite}>
      <ProductImage src={product.clothesUrl} alt={product.id} />
      <ProductBar>
        <ProductPrice>
          {product.price}<text> TRY</text>
        </ProductPrice>
      </ProductBar>
      <ProductBar>
        <InfoProduct
          onClick={() => {
            addCard(product);
            getAddCardToast(product, addToast);
          }}
        >
          Add To Cart
        </InfoProduct>
        <ShowingDetails to={`/products/${product.id}`}>See Details</ShowingDetails>
        <InfoProduct
          onClick={() => {
            changeItem(product, favorite);
            // eslint-disable-next-line no-unused-expressions
            favorite ? removeFavoriteToast(product, addToast)
              : addFavoriteToast(product, addToast);
          }}
        >

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

  border: 1.5px solid ${({favorite}) => favorite ? `deeppink` : `blue`};
  color: deepskyblue;
`;
const ProductImage = styled.img`
  padding: 1rem 0 0 0;
  height: 80%;
  width: 80%;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  @media screen and (max-width: 768px) and (min-width: 500px){
    width: 25rem;
  }
`;
const InfoProduct = styled.text`
  display: flex;
  padding: 0.5rem;
  font-size: 20px;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;
  border: blue 1px solid;
  color: blue;
  :hover{
    transition: 0.2s;
    color: deeppink;
    cursor: pointer;
    border: deeppink 1px solid;

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
  margin: 0 10px;
  
`;

const ProductPrice = styled.text`

  padding: 1rem;
  font-size: 1.5rem;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;
  color: black;
  @media screen and (max-width: 1300px){
    font-size: 1rem;
    padding: 0.5rem 0 0.5rem 0;
  }
`;
const ShowingDetails = styled(Link)`
  color: blue;
  display: flex;
  padding: 0.5rem;
  margin: 0px 10px;
  font-size: 20px;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;
  border: blue 1px solid;
  

  
  :hover{
    transition: 0.2s;
    color: deeppink;
    cursor: pointer;
    border: deeppink 1px solid;
  } /* blue colors for links too */
  text-decoration: inherit; /* no underline */
  @media screen and (max-width: 1300px){
    font-size: 1rem;
    padding: 0 0.5rem;
  }
  border: blue 1px solid;

`;
