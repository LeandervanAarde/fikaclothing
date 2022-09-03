import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./index.scss";
import { CartProvider } from './contexts/CartDrop.context';
import { RenderProvider } from './contexts/Rerenders.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CartProvider>
      <RenderProvider>
        <App />
      </RenderProvider>
    </CartProvider>
  </BrowserRouter>
);


