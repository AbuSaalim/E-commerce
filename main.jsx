import React from 'react';
import { render } from 'preact';
import ShopContextProvider from './Context/ShopContext.jsx';
import { App } from './app.jsx';

render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
  document.getElementById('app')
);
