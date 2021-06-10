import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProductContext } from './context/ProductContext';
import NavBar from './components/NavBar';
import BarItems from './components/BarItems';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import ShoppingCard from './pages/ShoppingCard';
import Details from './pages/Details';

function App() {
  const { isBarActive } = useContext(ProductContext);
  useEffect(() => {
  }, [isBarActive]);

  return (
    <>
      <NavBar />
      {isBarActive ? <BarItems /> : null}
      <Switch>
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={Details} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/card" exact component={ShoppingCard} />
        <Redirect exact to="/products" />
      </Switch>
    </>

  );
}

export default App;
