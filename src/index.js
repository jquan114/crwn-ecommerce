import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
// import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <CategoriesProvider> */}
          <CartProvider>
            <Elements stripe = {stripePromise}>
              <App />
            </Elements>
          </CartProvider>
        {/* </CategoriesProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);