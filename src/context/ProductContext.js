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
