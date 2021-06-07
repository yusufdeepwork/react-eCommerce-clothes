import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
