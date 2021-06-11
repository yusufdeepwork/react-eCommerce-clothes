import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import shoppingCart from '../assets/shopping.png';
import { ProductContext } from '../context/ProductContext';

const NavBar = () => {
  const { isBarActive, setIsBarActive, productsInCard } = useContext(ProductContext);
  useEffect(() => {

  }, [productsInCard]);
  const calculateTotalPayment = () => {
    let sum = 0;
    // eslint-disable-next-line no-unused-expressions
    productsInCard.length !== 0 ? productsInCard.forEach((item) => {
      sum += parseInt(item.price, 10) * item.count;
    }) : null;
    return sum;
  };
  return (
    <Nav>
      <NavLink to="/products"><img alt="logo" src={logo} width="80px" height="80%" /></NavLink>
      <NavMenu>
        <NavLink to="/products" active="true"><h1>Products</h1></NavLink>
        <NavLink to="/favorites" active="true"><h1>Favorites</h1></NavLink>
        <NavLink to="/contact" active="true"><h1>Contact</h1></NavLink>
      </NavMenu>

      <NavLink to="/card" active="true">

          {productsInCard.length !== 0 ? <ProductCardText>
              {`Total Payment :  ${calculateTotalPayment()} TRY`}
          </ProductCardText> : null}
        <img alt="logo" src={shoppingCart} width="80px" height="80%" />

      </NavLink>
      <Bars onClick={() => setIsBarActive(!isBarActive)} />
    </Nav>
  );
};
export default NavBar;

const Nav = styled.nav`
  background: #000;
  display: flex;
  text-align: center;
  justify-content: space-between;
  height: 6rem;
  font-size: 20px;
  padding:0 12vw;
  
  @media screen and (max-width: 768px){
    padding: 0;
  } 
`;
const NavMenu = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  
  &.active {
    color:aquamarine ;
  }
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px){
      display: ${(({ active }) => (active ? 'none' : null))}
  }
`;
const Bars = styled(FaBars)`
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  width: 2.5rem;
  height: 100%;
  margin-right: 20px;
`;
const ProductCardText = styled.h1`
    font-size: 24px;
    color: royalblue;
    padding: 1rem;
  
  text-align: center;
  align-items: center;
  transition: 2s;
  margin-right: 10px; 
  animation-name: example;
  animation-duration: 2s;
  cursor: default;
  border-radius: 10rem;
  background-color: lightblue;
  @keyframes example {
    from {color: red;}
    to {color: royalblue;}
  }
  @media screen and (max-width: 1500px){
    font-size: 15px;
    padding: 0.2rem;
    width: 6rem;
  }
`;
