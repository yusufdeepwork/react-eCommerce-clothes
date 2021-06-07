import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

const BarItems = ({ isBarActive, setIsBarActive }) => {
  const onChangeBar = (active) => setIsBarActive(!active);
  return (
    <BarItemContainer>
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
    background: lawngreen;
  
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
