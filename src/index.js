import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import MyCart from './components/MyCart';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      { path: '/my-cart', element: <MyCart /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
