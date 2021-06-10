import React, { useContext } from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';
import ProductContext from '../context/ProductContext';
import CardItem from '../components/CardItem';

const ShoppingCard = () => {
  const currency = ' TRY';
  const { productsInCard } = useContext(ProductContext);
  const alert = useAlert();
  const calculateTotalPayment = () => {
    let sum = 0;
    // eslint-disable-next-line no-unused-expressions
    productsInCard ? productsInCard.forEach((item) => {
      sum += parseInt(item.price, 10) * item.count;
    }) : null;
    return sum;
  };

  return (
    <CartProductsContainer>
      <TotalPayment>
        <TotalPaymentText>
          Shopping Total Payment :
          {` ${calculateTotalPayment()}`}
          {currency}
        </TotalPaymentText>
        <PayButton
          type="button"
          onClick={() => alert.error('We are sorry, we are closed. Please Try again after.')}
        >
          Pay
        </PayButton>
      </TotalPayment>
      {productsInCard.map((product) => <CardItem product={product} />)}
    </CartProductsContainer>
  );
};
export default ShoppingCard;
export const CartProductsContainer = styled.div`
  cursor: default;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  text-align: center;
  align-self: center;
  padding: 1vw 5vw;
`;
const TotalPayment = styled.div`
  width: 90%;
  height: 10rem;
  color: cornflowerblue;
  display: flex;
  justify-content: space-evenly;
  font-size:60px;
  align-items:center;
  text-align:center;
  border: darkblue 5px solid;
 
`;
const TotalPaymentText = styled.text`
  font-size: 40px;
  font-family: "Fira Code Medium",monospace;
  text-align: center;
  @media screen and (max-width: 600px){
    font-size: 20px;
  }
`;
const PayButton = styled.button`
  text-align: center;
  font-size: 40px;
  font-family: "Helvetica Neue",monospace;
  margin-right: 5rem;
  height: 4rem;
  width: 10rem;
  border-radius: 10rem;
  color: white;
  background: darkblue;
  :hover{
    background: red;
    cursor: pointer;
    transition: 0.5s;
    border: red solid 1px;
  }
  @media screen and (max-width: 600px){
    font-size: 25px;
    margin: 2vw;
  }
`;
