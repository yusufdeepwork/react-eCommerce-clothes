import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EcommerceProvider from './context/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <EcommerceProvider>
      <App />
    </EcommerceProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
