import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Contexts/Cart.context';
import { SearchProvider } from './Contexts/Search.context';
import { UserProvider } from './Contexts/User.context';
import ScrollToTop from './Routes/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <UserProvider>
        <CartProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
