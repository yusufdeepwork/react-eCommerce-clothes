import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const BarItems = () => {
  const { isBarActive, setIsBarActive } = useContext(ProductContext);
  const onChangeBar = (active) => setIsBarActive(!active);
  return (
    <BarItemContainer>
      <BarItem onClick={() => onChangeBar(isBarActive)} to="/card" activeStyle>
        <h1>Shopping Card</h1>
      </BarItem>
      <BarItem onClick={() => onChangeBar(isBarActive)} to="/favorites" activeStyle>
        <h1>Favorites</h1>
      </BarItem>
      <BarItem onClick={() => onChangeBar(isBarActive)} to="/contact" activeStyle>
        <h1>Contact</h1>
      </BarItem>
    </BarItemContainer>
  );
};
export default BarItems;

const BarItemContainer = styled.nav`
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 20px;
  padding:0 12vw;
  flex-direction: column;
  @media screen and (max-width: 768px){
    padding: 0;
  }
  
`;

const BarItem = styled(Link)`
  color: white;
  display: flex;
  border-bottom: cornflowerblue solid 1px;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  padding: 0 1rem;
  background: darkblue;
  &.active {
    color:white ;
  }
  transition: all 0.2s ease-in-out;
  :hover{
    background: cornflowerblue;
  }
`;
