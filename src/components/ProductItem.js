import React, { useContext } from 'react';
import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductItem = ({ product, favorite }) => {
  const { addToast } = useToasts();
  const {
    setFavorites, favorites, setProductsInCard, productsInCard,
  } = useContext(ProductContext);

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

  const changeItem = () => {
    if (favorite) {
      removeFavorite();
      addToast(`removed favorite :${product.description}`, {
        appearance: 'info',
        autoDismiss: true,
      });
    } else {
      addFavorite();
      addToast(`add favorite :${product.description}`, {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  };
  const addCard = () => {
    const {
      id, price, clothesUrl, description,
    } = product;
    if (productsInCard.length === 0) {
      setProductsInCard([{
        id, count: 1, price, clothesUrl, description,
      }]);
    } else if (productsInCard.find((item) => item.id === id)) {
      // eslint-disable-next-line max-len
      const updatedCard = productsInCard.map((item) => (item.id === id ? { ...item, count: item.count + 1 } : item));
      setProductsInCard(updatedCard);
    } else {
      setProductsInCard((prevState) => [...prevState, {
        id, count: 1, price, clothesUrl, description,
      }]);
    }
    addToast(`added shopping card :${product.description}`, {
      appearance: 'success',
      autoDismiss: true,
    });
  };

  return (
    <ProductCart>
      <ProductImage src={product.clothesUrl} alt="selam" />
      <ProductBar>
        <ProductPrice>
          {product.price}
          {' TRY'}
        </ProductPrice>
      </ProductBar>

      <ProductBar>
        <InfoProduct
          onClick={() => addCard()}
        >
          Add To Cart
        </InfoProduct>
        <ShowingDetails to={`/products/${product.id}`}>
          See Details
        </ShowingDetails>
        <InfoProduct onClick={() => changeItem()}>
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
  @media screen and (max-width: 768px) and (min-width: 500px){
    width: 25rem;
  }
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
const ShowingDetails = styled(Link)`
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
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
  @media screen and (max-width: 1300px){
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;
