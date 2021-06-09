import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import NavBar from './components/NavBar';
import BarItems from './components/BarItems';
import Products from './pages/Products';
import ProductContext from './context/ProductContext';
import Favorites from './pages/Favorites';

function App() {
  const [isBarActive, setIsBarActive] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
  }, [isBarActive]);

  return (
    <ProductContext.Provider value={{ favorites, setFavorites }}>
      <BrowserRouter>
        <NavBar isBarActive={isBarActive} setIsBarActive={setIsBarActive} />
        {isBarActive ? (
          <BarItems
            isBarActive={isBarActive}
            setIsBarActive={setIsBarActive}
          />
        ) : null}
        <Switch>
          <ToastProvider>
            <Route path="/products" exact component={Products} />
            <Route path="/favorites" component={Favorites} />
            <Redirect exact to="/products" />
          </ToastProvider>
        </Switch>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}

export default App;
