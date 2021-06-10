import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import NavBar from './components/NavBar';
import BarItems from './components/BarItems';
import Products from './pages/Products';
import ProductContext from './context/ProductContext';
import Favorites from './pages/Favorites';
import ShoppingCard from './pages/ShoppingCard';
import Details from './pages/Details';

function App() {
  const [isBarActive, setIsBarActive] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [productsInCard, setProductsInCard] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
  }, [isBarActive]);

  return (
    <ProductContext.Provider value={{
      favorites, setFavorites, productsInCard, setProductsInCard, data, setData,
    }}
    >
      <BrowserRouter>
        <ToastProvider>
          <AlertProvider template={AlertTemplate} position={positions.TOP_CENTER} timeout={3000}>
            <NavBar isBarActive={isBarActive} setIsBarActive={setIsBarActive} />
            {isBarActive ? (
              <BarItems
                isBarActive={isBarActive}
                setIsBarActive={setIsBarActive}
              />
            ) : null}
            <Switch>
              <Route path="/products" exact component={Products} />
              <Route path="/products:id" component={Details} />
              <Route path="/favorites" exact component={Favorites} />
              <Route path="/card" exact component={ShoppingCard} />
              <Redirect exact to="/products" />
            </Switch>
          </AlertProvider>
        </ToastProvider>
      </BrowserRouter>

    </ProductContext.Provider>
  );
}

export default App;
