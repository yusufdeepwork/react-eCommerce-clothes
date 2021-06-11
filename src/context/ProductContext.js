import React, { createContext, useState, useEffect } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter } from 'react-router-dom';

export const ProductContext = createContext(undefined, undefined);

const eCommerceApp = ({ children }) => {
  const [isBarActive, setIsBarActive] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [productsInCard, setProductsInCard] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
  }, [isBarActive]);

  const addFavorite = (favoriteProduct) => {
    const copyFavoriteArray = [...favorites];
    const isInProduct = copyFavoriteArray.map((copyProduct) => copyProduct.id)
      .includes(favoriteProduct.id);
    if (!isInProduct && favorites) {
      setFavorites((prevFavorites) => [...prevFavorites, favoriteProduct]);
    }
  };

  const removeFavorite = (removedfavorite) => {
    const copyFavoriteArray = [...favorites];
    const isInProduct = copyFavoriteArray.map((copyProduct) => copyProduct.id)
      .includes(removedfavorite.id);
    if (isInProduct && favorites) {
      setFavorites(copyFavoriteArray.filter((item) => item.id !== removedfavorite.id));
    }
  };
  const changeItem = (willChangeProduct, favorite) => {
    if (favorite) {
      removeFavorite(willChangeProduct);
    } else {
      addFavorite(willChangeProduct);
    }
  };

  const addCard = (willAddCardProduct) => {
    const {
      id, price, clothesUrl, description,
    } = willAddCardProduct;
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
  };
  return (
    <ProductContext.Provider value={{
      favorites,
      setFavorites,
      productsInCard,
      setProductsInCard,
      data,
      setData,
      isBarActive,
      setIsBarActive,
      changeItem,
      addCard,
    }}
    >
      <BrowserRouter>
        <ToastProvider>
          <AlertProvider template={AlertTemplate} position={positions.TOP_RIGHT} timeout={3000}>
            {children}
          </AlertProvider>
        </ToastProvider>
      </BrowserRouter>
    </ProductContext.Provider>
  );
};
export default eCommerceApp;
