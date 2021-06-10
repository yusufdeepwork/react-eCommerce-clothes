import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import shoppingCart from '../assets/shopping.png';
import { ProductContext } from '../context/ProductContext';

const NavBar = () => {
  const { isBarActive, setIsBarActive } = useContext(ProductContext);
  return (
    <Nav>
      <NavLink to="/products"><img alt="logo" src={logo} width="80px" height="80%" /></NavLink>
      <NavMenu>
        <NavLink to="/products" activeStyle><h1>Products</h1></NavLink>
        <NavLink to="/favorites" activeStyle><h1>Favorites</h1></NavLink>
        <NavLink to="/contact" activeStyle><h1>Contact</h1></NavLink>
      </NavMenu>
      <NavLink to="/card" activeStyle>
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
      display: ${(({ activeStyle }) => (activeStyle ? 'none' : null))}
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
