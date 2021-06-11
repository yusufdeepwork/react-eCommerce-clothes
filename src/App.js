import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ProductContext } from './context/ProductContext';
import NavBar from './components/NavBar';
import BarItems from './components/BarItems';
import Products from './pages/Products';
import Favorites from './pages/Favorites';
import ShoppingCard from './pages/ShoppingCard';
import Details from './pages/Details';
import Contact from './pages/Contact';

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
        <Route path="/favorites" component={Favorites} />
        <Route path="/card" component={ShoppingCard} />
        <Route path="/contact" component={Contact} />

        <Redirect to="/products" />
      </Switch>
    </>

  );
}

export default App;
