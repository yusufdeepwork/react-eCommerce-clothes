import React, { useState, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import BarItems from './components/BarItems';

function App() {
  const [isBarActive, setIsBarActive] = useState(false);

  useEffect(() => {

  }, [isBarActive]);

  return (
    <BrowserRouter>
      <NavBar isBarActive={isBarActive} setIsBarActive={setIsBarActive} />
      {isBarActive ? <BarItems isBarActive={isBarActive} setIsBarActive={setIsBarActive} /> : null}
    </BrowserRouter>
  );
}

export default App;
