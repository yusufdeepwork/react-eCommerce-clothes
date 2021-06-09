import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BarItems from './components/BarItems';
import Products from './pages/Products';

function App() {
  const [isBarActive, setIsBarActive] = useState(false);

  useEffect(() => {
  }, [isBarActive]);

  return (
    <BrowserRouter>
      <NavBar isBarActive={isBarActive} setIsBarActive={setIsBarActive} />
      {isBarActive ? <BarItems isBarActive={isBarActive} setIsBarActive={setIsBarActive} /> : null}
      <Switch>
        <Route path="/products" exact component={Products} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
