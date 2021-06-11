import React, { useContext } from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const CardItem = ({ product }) => {
  const {
    productsInCard, setProductsInCard,
  } = useContext(ProductContext);
  const { addToast } = useToasts();

  const changeItem = (isAdd) => {
    if (!isAdd) {
      addToast(`decreased | removed from shopping card :${product.description}`, {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      addToast(`add to shopping card :${product.description}`, {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  };

  const increaseProductInCard = () => {
    const { id } = product;
    if (productsInCard.find((item) => item.id === id)) {
      // eslint-disable-next-line max-len
      const updatedCard = productsInCard.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item));
      setProductsInCard(updatedCard);
    }
  };

  const decreaseProductInCard = () => {
    const { id } = product;
    if (productsInCard.find((item) => item.id === id)) {
      // eslint-disable-next-line max-len
      const updatedCard = productsInCard.map((item) => (item.id === id ? { ...item, count: item.count - 1 } : item));
      setProductsInCard(updatedCard.filter((item) => item.count !== 0));
    }
  };

  const getTotalPrice = () => {
    const { id } = product;
    const searchedProduct = productsInCard.find((item) => item.id === id);
    return searchedProduct.price * searchedProduct.count;
  };

  return (
    <CardBox>
      <CartProductImage src={product.clothesUrl} alt={`${product.description}`} />
      <ProductBar>
        <ProductPrice>{`Product Price : ${product.price} | Total Price: ${getTotalPrice()}`}</ProductPrice>
        <InfoProduct>{product.description}</InfoProduct>
        <ShowDetails to={`/products/${product.id}`}> See Details</ShowDetails>
      </ProductBar>
      <CardChanges>
        <ChangeItem>
          <FaPlus color="blue" onClick={() => {
            increaseProductInCard();
            changeItem(true);
          }}
          />
        </ChangeItem>
        <ProductCardCount>{productsInCard.find((item) => item.id === product.id).count}</ProductCardCount>
        <ChangeItem>
          <FaMinus color="red" onClick={() => {
            decreaseProductInCard();
            changeItem(false);
          }}
          />
        </ChangeItem>
      </CardChanges>

    </CardBox>
  );
};

export default CardItem;

const CardBox = styled.div`
  cursor: default;
  display: flex;
  width: 90%;
  height: 30rem;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #f2f2f2;
  border-radius: 4rem;
  margin: 20px 0px;
  @media screen and (max-width: 425px){
    height: 20rem;
  }
  
`;
const CartProductImage = styled.img`
  height: 90%;
  width: 20%;
  float: left;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  object-fit: contain;
  @media screen and (max-width: 1350px){
    width: 20rem;
  }
  @media screen and (max-width: 600px){
    display: none;
  }
`;
const InfoProduct = styled.text`
  cursor: default;
  display: flex;
  padding: 1rem;
  font-size: 20px;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;

  @media screen and (max-width: 1300px){
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;
const ProductBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const CardChanges = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 3rem;
  font-size: 30px;
  padding: 1rem;
  @media screen and (max-width: 710px){
    font-size: 20px;
    padding: 0;
    margin: 0;
  }
`;
const ChangeItem = styled.div`
  display: flex;
  padding: 1rem;
  font-size: 30px;
  font-family: "Helvetica Neue",monospace;
  justify-content: space-between;
  :hover{
    transition: 0.1s;
    color: blue;
    cursor: pointer;
  }
  
`;
const ShowDetails = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  font-size: 20px;
  font-family: "Fira Code Medium",monospace;
  margin: 10px;
  background-color: lightpink;
  
  &.active {
    color:aquamarine ;

  }
  border-radius:10rem;
  color: black;

  :hover{
    transition: 0.1s;
    color: blue;
    cursor: pointer;
    background-color: #5cf0ff;
  }
  transition: all 0.2s ease-in-out;
  @media screen and (min-width: 600px){
    display: none;
  }
`;
const  ProductCardCount = styled.text`
  cursor: default;
  font-size: 70px;
  color: black;
  margin: 1.5rem 0;
  font-family: "Fira Code Medium",serif;
  @media screen and (max-width: 700px){
    font-size: 50px;
    margin: 10px;
  }
`
