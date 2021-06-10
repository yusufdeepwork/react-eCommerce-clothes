import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'react-router-dom';
import { addFavoriteToast, removeFavoriteToast, getAddCardToast } from './Toasts';
import { ProductContext } from '../context/ProductContext';

const DetailItem = ({ product, favorite }) => {
  // eslint-disable-next-line no-console
  const { addToast } = useToasts();
  const { changeItem, addCard } = useContext(ProductContext);
  useEffect(() => {

  }, [product, favorite]);

  return (
    <DetailProductBox>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {product ? (
        <>
          <CartProductImage src={product.clothesUrl} />
          <InfoBar>
            <InfoBar>
              <DetailInfoProduct>{product.description}</DetailInfoProduct>
              <DetailInfoProduct>{`Price : ${product.price}`}</DetailInfoProduct>
            </InfoBar>
            <DetailProductBar>
              <DetailInfoProduct
                link
                onClick={() => {
                  addCard(product);
                  getAddCardToast(product, addToast);
                }}
              >
                Add to Card
              </DetailInfoProduct>
              <DetailInfoProduct
                link
                onClick={() => {
                  changeItem(product, favorite);
                  // eslint-disable-next-line no-unused-expressions
                  favorite ? removeFavoriteToast(product, addToast)
                    : addFavoriteToast(product, addToast);
                }}
              >
                {' '}
                {favorite ? 'Remove From Favorites ' : 'Add To Favorites'}
              </DetailInfoProduct>
              <BackHome to="/products" link>Back to Products Page</BackHome>
            </DetailProductBar>
          </InfoBar>
        </>
      ) : null}

    </DetailProductBox>
  );
};
export default DetailItem;

const DetailProductBox = styled.div`
  cursor: default;
  display: flex;
  width: 90%;
  height: 80vh;
  margin: 1rem 0;
  text-align: center;
  justify-content: space-evenly ;
  align-items: center;
  flex-direction: row;
  background: black;
  border: white solid 3px;
  color: white;
 
  @media screen and (max-width:650px){
    flex-direction: column;
  }
  @media screen and (max-width:650px){
    height: 85vh;
  }
`;
const CartProductImage = styled.img`
  height: 90%;
  width: 40%;
  float: left;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media screen and (max-width: 1350px){
    width: 20rem;
  }
  @media screen and (max-width: 320px){
    width: 15rem;
  }@media screen and (max-width: 500px){
  height: 70%;
}
`;

const DetailInfoProduct = styled.text`
  cursor: default;
  display: flex;
  padding: 1rem;
  font-size: 2rem;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;

  :hover{
    transition: 0.1s;
    color: blue;
    cursor: ${({ link }) => (link ? 'pointer' : 'default')};
  }
  @media screen and (max-width:1000px){
    font-size: 1.5rem;
  }
  @media screen and (max-width:650px) {
    padding: 0rem 1rem;  font-size: 1rem;
  }
  @media screen and (max-width:650px) {
    padding: 0rem 1rem;  font-size: 1rem;
  }
`;
const DetailProductBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width:1000px) and (min-width: 650px){
    flex-direction: column;
  }
`;
const InfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const BackHome = styled(Link)`
  cursor: default;
  display: flex;
  padding: 2rem;
  font-size: 2rem;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
  :hover{
    transition: 0.1s;
    color: blue;
    cursor: ${({ link }) => (link ? 'pointer' : 'default')};
  }
  @media screen and (max-width:1000px){
    font-size: 1.5rem;
  }
  @media screen and (max-width:650px) {
    padding: 1rem;  font-size: 1rem;
  }
`;
